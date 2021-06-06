var arrLang = {
  // This is the English language
  "en-gb": {
    SETTINGS: "This is A Setting Pages",
    Dark: "Dark Mode",
    ChLang: "Change Language",
    DelData: "Delete Data",
    DelAcc: "Delete Account",
    Advices: "THIS IS WHERE YOU SEEK FOR FINANCIAL ADVICES",
    Transaction: "Latest Transactions",
    AddTrans: "Add Transaction",
    Date: "Date",
    Type: "Type",
    Category: "Category",
    Amount: "Amount",
    Comments: "Comments",
    Cancel: "Cancel",
    Edit: "Edit",
    EditDel: "Edit/Delete",
    Plan: "Plan",

    //Sidebar
    Dashboard: "Dashboard",
    History: "History",
    AdvicesSide: "Advices",
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
    GiftsDonations: "Gifts & Donations",
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
    SETTINGS: "Ini adalah halaman tetapan",
    Dark: "Mode Gelap",
    ChLang: "Tukar Bahasa",
    DelData: "Padam Data",
    DelAcc: "Buang Akaun",
    Advices: "Di sini adalah untuk kamu mencari nasihat tentang kewangan",
    Transaction: "Transaksi Terkini",
    AddTrans: "Tambah Transaksi",
    Date: "Tarikh",
    Type: "Jenis-jenis",
    Category: "Kumpulan",
    Amount: "Jumlah",
    Comments: "Komen",
    Cancel: "Batal",
    Edit: "Mengedit",
    EditDel: "Mengedit/Padam",
    Plan: "Merancang",

    //Sidebar
    Dashboard: "Papan Pemuka",
    History: "Sejarah Transaksi",
    AdvicesSide: "Nasihat Kewangan",
    Settings: "Tetapan",

    //Balance, Income & Expense
    TotInc: "Jumlah Pendapatan",
    TotExpen: "Jumlah Perbelanjaan",
    Balance: "Baki",
    Income: "Gaji",
    Expense: "Perbelanjaan",
    ExpensCate: "Kategori Perbelanjaan",

    //Category sections
    Automobiles: "Kereta",
    BillUlti: "Bil & Utiliti",
    Business: "Bisnes",
    Clothing: "Pakaian",
    Entertainment: "Hiburan",
    Food: "Makanan",
    GiftsDonations: "Hadiah & Sumbangan",
    Healthcare: "Penjagaan kesihatan",
    Investment: "Pelaburan",
    PersonalCare: "Penjagaan Diri",
    Salary: "Gaji",
    Shopping: "Membeli-belah",
    SideHustle: "Keramaian Sampingan",
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
