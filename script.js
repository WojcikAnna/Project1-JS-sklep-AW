// console.log("Hello World!");

//////////////////////////////////
//SETING CURRENT YEAR IN FOOTER//
const $year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
$year.textContent = currentYear;
