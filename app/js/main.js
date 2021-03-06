$(function() {
  $('.callback-link, .quick-order-link').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    closeOnBgClick: false,
    closeBtnInside: true,
    mainClass: 'mfp-fade',
    removalDelay: 500,
  });

  $('.callback-link, .quick-order-link').click(function() {
    $('.mfp-close').empty();
  });

  $(".detailed-order-link").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
});