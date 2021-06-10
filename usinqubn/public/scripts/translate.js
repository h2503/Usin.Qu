var arrLang = {
  // This is the English language
  "en-gb": {
    SETTINGS: "Settings",
    Scheme: "Scheme",
    Dark: "Dark Mode",
    ChLang: "Change Language",
    DelData: "Delete Data",
    DelAcc: "Delete Account",
    Advices: "Financial Tips",
    Transaction: "Latest Transactions",
    AddTrans: "Add Transaction",
    EditTrans: "Edit Transactions",
    Date: "Date",
    Type: "Type:",
    Category: "Category",
    Amount: "Amount",
    Comments: "Comments",
    Cancel: "Cancel",
    Clear: "Clear",
    Save: "Save",
    Edit: "Edit",
    EditDel: "Edit/Delete",
    Plan: "Plan",

    //Sidebar
    Dashboard: "Dashboard",
    Add: "Add",
    History: "History",
    HistorySide: "History Transaction",
    AdvicesSide: "Tips",
    AdvicesMoney: "Financial Tips",
    Settings: "Settings",

    //Income & Expense
    TotInc: "Total Income",
    TotExpen: "Total Expenses",
    Balance: "Balance",
    Income: "Income",
    Expense: "Expense",
    ExpensCate: "Expense Categories",

    //Category sections
    Automobiles: "Automobile",
    BillUlti: "Bill & Utilities",
    Business: "Business",
    Clothing: "Clothing",
    Entertainment: "Entertainment",
    Food: "Food",
    GiftDonations: "Gifts & Donations",
    Healthcare: "Healthcare",
    Investment: "Investment",
    PersonalCare: "Personal Care",
    Salary: "Salary",
    Shopping: "Shopping",
    SideHustle: "Side Hustle",
    Travel: "Travel",
    Others: "Others",

    //Mode Section
    Cash: "Cash",
    Credit: "Credit Card",
    Debit: "Debit Card",
    NetBank: "Net Banking",
    Cheque: "Cheque",
  },

  //  This is the Malay Language
  "mal-bn": {
    SETTINGS: "Tetapan",
    Scheme: "Skema",
    Dark: "Mod Gelap",
    ChLang: "Tukar Bahasa",
    DelData: "Padam Data",
    DelAcc: "Buang Akaun",
    Advices: "Tips & Nasihat Kewangan",
    Transaction: "Transaksi Terkini",
    AddTrans: "Tambah Transaksi",
    EditTrans: "Mengedit Transaksi",
    Date: "Tarikh",
    Type: "Jenis-jenis:",
    Category: "Kumpulan",
    Amount: "Jumlah",
    Comments: "Komen",
    Cancel: "Batal",
    Clear: "Padam",
    Save: "Simpan",
    Edit: "Mengedit",
    EditDel: "Mengedit/Padam",
    Plan: "Merancang",

    //Sidebar
    Dashboard: "Dashboard",
    Add: "Tambah",
    History: "Sejarah",
    HistorySide: "Sejarah Transaksi",
    AdvicesSide: "Tip",
    AdvicesMoney: "Tip Kewangan",
    Settings: "Tetapan",

    //Balance, Income & Expense
    TotInc: "Jumlah Pendapatan",
    TotExpen: "Jumlah Perbelanjaan",
    Balance: "Baki",
    Income: "Pendapatan",
    Expense: "Perbelanjaan",
    ExpensCate: "Kategori Perbelanjaan",

    //Category sections
    Automobiles: "Kereta",
    BillUlti: "Bil & Utiliti",
    Business: "Bisnes",
    Clothing: "Pakaian",
    Entertainment: "Hiburan",
    Food: "Makanan",
    GiftDonations: "Hadiah & Sumbangan",
    Healthcare: "Penjagaan kesihatan",
    Investment: "Pelaburan",
    PersonalCare: "Penjagaan Diri",
    Salary: "Gaji",
    Shopping: "Beli-belah",
    SideHustle: "Sampingan",
    Travel: "Melancong",
    Others: "Lain-lain",

    //Mode Section
    Cash: "Tunai",
    Credit: "Kad Kredit",
    Debit: "Kad Debit",
    NetBank: "Perbankan Bersih",
    Cheque: "Cek",
  },
};

//
$(document).ready(function () {
  // The default language is English
  var lang = getCookie("lang");
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function () {
  var lang = $(this).attr("id");
  setCookie("lang", lang, 10000);

  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
