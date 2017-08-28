$(document).ready(function(){
        var date = new Date();
        var year = date.getFullYear();
        document.getElementById("current-year").innerHTML = year;
        if(window.innerWidth <= 745) {
          document.getElementById("logo-name").innerHTML = "Omowumi";
        }
});