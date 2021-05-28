const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require ('../middleware/auth')


//@desc login/landing page
//@route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: './layouts/login',
        title: 'Welcome',
    })
})

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        title: "Dashboard",
        name: req.user.displayName,
        dp: req.user.image,
    })
})

//transaction
router.get('/transaction', ensureAuth, (req, res) => {
    res.render('transaction', {
        title: "Transaction",
        name: req.user.displayName,
        dp: req.user.image,
    })
})

//summary
router.get('/history', ensureAuth, (req, res) => {
    res.render('history', {
        title: "History",
        name: req.user.displayName,
        dp: req.user.image,
    })
})

//financial-advices
router.get('/financial-advices', ensureAuth, (req, res) => {
    res.render('financial-advices', {
        title: "Financial Advices",
        name: req.user.displayName,
        dp: req.user.image,
    })
})

//about
router.get('/setting', ensureAuth, (req, res) => {
    res.render('setting', {
        title: "setting",
        name: req.user.displayName,
        dp: req.user.image,
    })
})

//404
router.get('/404', (req, res) => {
    res.render('404', {title: "404 Error"})
})

module.exports = router