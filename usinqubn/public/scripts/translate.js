var arrLang = {
  // This is the english language
  "en-gb": {
    SETTINGS: "This is A Setting Pages",
    Dark: "Dark Mode",
    ChLang: "Change Language",
    DelData: "Delete Data",
    DelAcc: "Delete Account",
    Advices: "THIS IS WHERE YOU SEEK FOR FINANCIAL ADVICES",
    Transaction: "Latest Transactions",
    Date: "Date",
    Type: "Type",
    Category: "Category",
    Amount: "Amount",
    Comments: "Comments",
    Edit: "Edit",
    EditDel: "Edit/Delete",
  },

  //  This is the Malay
  "mal-bn": {
    SETTINGS: "Ini adalah page setting",
    Dark: "Mode Gelap",
    ChLang: "Tukar Bahasa",
    DelData: "Padam Data",
    DelAcc: "Buang Akaun",
    Advices: "Di sini adalah untuk kamu mencari nasihat tentang kewangan",
    Transaction: "Transaksi Terkini",
    Date: "Tarikh",
    Type: "Jenis-jenis",
    Category: "Kumpulan",
    Amount: "Jumlah",
    Comments: "Komen",
    Edit: "Mengedit",
    EditDel: "Menegedit/Padam",
  },
};

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
