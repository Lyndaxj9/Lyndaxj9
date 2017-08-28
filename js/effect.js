/**
 * Get the current year from the date for the footer copyright
 */
$(document).ready(function(){
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById("current-year").innerHTML = year;
  if(window.innerWidth <= 745) {
    document.getElementById("logo-name").innerHTML = "Omowumi";
  }
});

/**
 * Center shrink name and center when screen size decreases
 */
var smallestWidth = 745;      
function navbarLogo() {
  if(window.innerWidth <= 745) {
    document.getElementById("logo-name").innerHTML = "Omowumi";
  } else {
    document.getElementById("logo-name").innerHTML = "Omowumi Lynda Ademola";
  }
}
      
window.onresize = navbarLogo;

/**
 * Change the navbar's opacity when scroll past the main image
 */
var range = 550;
$(window).on('scroll', (function() {
  
  console.log("scroll?");
  if($(this).scrollTop() > range) {
    $(".nav-overlay").fadeIn();
  } else {
    $(".nav-overlay").fadeOut();
  }
}));