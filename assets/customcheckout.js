$(document).ready(function() {
  var surveyShown = readCookie('postpurchase');
  if ($(".thank-you__additional-content").length && !surveyShown) {
    $('.postpurchase').show().insertAfter('.thank-you__additional-content'); 
    createCookie('postpurchase', 'true'); 
  }
  if ($(".section--shipping-method").length) {
    $('.gift-option').insertBefore(".section--shipping-method").show(); 
  }


  $('#gift').change(function() {
    if ($(this).prop("checked") == true) {
      jQuery.post('/cart/update.js', {note: "gift"});
    }
  })
})


 