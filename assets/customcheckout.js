$(document).ready(function() {
  checkForDiscount(); 
  var surveyShown = readCookie('postpurchase');
  if ($(".thank-you__additional-content").length && !surveyShown) {
    $('.postpurchase').show().insertAfter('.thank-you__additional-content'); 
    createCookie('postpurchase', 'true'); 
  }
}); 

