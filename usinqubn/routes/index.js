const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Data = require("../models/data");

const moment = require("moment");

//@desc Landing Page
//@route GET /login
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "./layouts/login",
    title: "Welcome",
  });
});

//@desc Dashboard
//@route GET /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    const transactionData = await Data.find({ user: req.user.id })//pass in transaction data according to the logged in user
                                      .lean()
                                      .sort({date: -1}) //sort by date                                                                     

      res.render("dashboard", {  //callbacks
      title: "Dashboard",
      name: req.user.displayName,
      dp: req.user.image,
      transactionData,
      moment: moment,  
      
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc Transaction
//@routes GET /transaction
router.get("/transaction", ensureAuth, (req, res) => {
  res.render("transaction", {
    title: "Transaction",
    name: req.user.displayName,
    dp: req.user.image,
  });
});

//@desc Process add transaction
//@routes POST /transaction
router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Data.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.render("errors/500");
  }
});

//@desc History
//@routes GET /history
router.get("/history", ensureAuth, async (req, res) => {
  try {
    const transactionData = await Data.find({ user: req.user.id })//pass in transaction data according to the logged in user
                                      .lean()
                                      .sort({date: -1}); //sort by date                              
    res.render("history", {
      title: "History",
      name: req.user.displayName,
      dp: req.user.image,
      transactionData,
      moment: moment,
    });
  } catch (err) {
    console.error(err);
    res.render("errors/500");
  }
});


//@desc Financial-advices
//@routes GET /financial-advices
router.get("/financial-advices", ensureAuth, (req, res) => {
  res.render("financial-advices", {
    title: "Financial Advices",
    name: req.user.displayName,
    dp: req.user.image,
  });
});

//@desc Setting
//@routes GET /setting
router.get("/setting", ensureAuth, (req, res) => {
  res.render("setting", {
    title: "setting",
    name: req.user.displayName,
    dp: req.user.image,
  });
});

// Daily, Weekly and Monthly
router.get("/daily", ensureAuth, (req, res) => {
  res.render("daily", {
    title: "daily",
    name: req.user.displayName,
    dp: req.user.image,
  });
});

router.get("/weekly", ensureAuth, (req, res) => {
  res.render("weekly", {
    title: "weekly",
    name: req.user.displayName,
    dp: req.user.image,
  });
});

router.get("/monthly", ensureAuth, (req, res) => {
  res.render("monthly", {
    title: "monthly",
    name: req.user.displayName,
    dp: req.user.image,
  });
});

//404
router.get("/404", (req, res) => {
  res.render("404", { title: "404 Error" });
});

module.exports = router;
