

$(document).ready(function() {
  $(".arrow.up").addClass('hidden');

  $('.arrow.down').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(window).height()+60 }, 800);
      //$(".arrow.up").toggle('show');
  });

  $('.arrow.up').click(function (event) {
    //$(".arrow.up").toggle('show');
  });


  $(window).on('scroll', function() {

    if (document.body.scrollTop > document.documentElement.clientHeight/3 || document.documentElement.scrollTop > document.documentElement.clientHeight/3) {
      document.getElementById("navbar").style.top = "0";
      $(".arrow.up").removeClass('hidden');
      $(".arrow.up").removeClass('hidden');
      $(".mainCont").addClass('hidden');
    } else {
      document.getElementById("navbar").style.top = "-60px";
      $(".arrow.up").addClass('hidden');
      $(".mainCont").removeClass('hidden');
    }
  });

});
