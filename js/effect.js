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
 JS code from: https://codepen.io/michaeldoyle/pen/Bhsif
 */
var bgimg = $(document).getElementById("bgimg");
var navbar = $(document).getElementById("navbar");
var range = 200;
$(window).on('scroll', (function() {
  var scrollTop = $(this).scrollTop(),
      height = bgimg.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;
  
  navbar.css({ 'opacity': calc});
});