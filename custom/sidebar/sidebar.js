var dbBtn = document.getElementsByClassName("bars_button")[0];
var dropbar = document.getElementsByClassName("dropbar")[0];
var dbCloseBtn = document.getElementById("dbClose");
var dropbarItems = document.getElementsByClassName("db_mm");
// var visibleDb = true;

const showDropBar = () => {
  dropbar.style.left = "0%";
};

const closeDropBar = () => {
  dropbar.style.left = "-100%";
};

dbBtn.onclick = showDropBar;
dbCloseBtn.onclick = closeDropBar;
