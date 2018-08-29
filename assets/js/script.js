

$(document).ready(function() {

  $(window).on('scroll', function() {

    if (document.body.scrollTop > document.documentElement.clientHeight || document.documentElement.scrollTop > document.documentElement.clientHeight) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
  });

});
