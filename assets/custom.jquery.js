// desktop sub-nav
$('.sub-nav-header').on('click mouseover', function() {
  event.preventDefault();  
  $(this).next('.sub-nav').slideDown(); 
});
// thumbnail selection on product pages
$('#thumbnails ul li img').click(function() {
  var src = $(this).attr("src").replace("compact", "2000x2000"); 
  $(this).addClass('border-lightgray').parent().siblings().children().removeClass('border-lightgray'); 
  $('#featured-image').attr("src", src); 
}); 

// 3-d shoe on index page 
$('.switch-button').click(function(){
      var display = ""
      $('.drag-to').attr('src', '{{"drag-to.png" | asset_url}}')
      switch ($(this).attr("id")) {
        case "switch-to-flat": 
          display = 'https://sibepher.sirv.com/Geek%20Flats%20NEW/Geek%20Flats%20NEW.spin'
          $(this).parent().parent().addClass('current-switch').siblings().removeClass('current-switch');
        console.log($(this).parent().parent())
          break;
        case "switch-to-sneaker":
          display = 'https://sibepher.sirv.com/Gekk%20Sneaker%20NEW/Gekk%20Sneaker%20NEW.spin';
          $(this).parent().parent().addClass('current-switch').siblings().removeClass('current-switch');
          break;
        case "switch-to-loafer":
          display = 'https://sibepher.sirv.com/Gekk%20Loafer%20(1-26)/Gekk%20Loafer%20(1-26).spin';
          $(this).parent().parent().addClass('current-switch').siblings().removeClass('current-switch');
          break; 
      }
      $('.shoe-switch').text('see in shoe')
      $('.Sirv').attr('src', display); 
    }); 

    $('.shoe-switch').click(function() {
      if ($('.Sirv').attr('src').indexOf('Shoe') >= 0) {
        $('.drag-to').attr('src', '{{"drag-to.png" | asset_url}}')
      }
      else {
        $('.drag-to').attr('src', '{{"horiz-drag.png" | asset_url}}')
      }
      var display = ""
      if ($('.Sirv').attr('src').indexOf('Sneaker') >= 0) {
        if ($('.Sirv').attr('src').indexOf('Shoe') >= 0)  {
          display = 'https://sibepher.sirv.com/Gekk%20Sneaker%20NEW/Gekk%20Sneaker%20NEW.spin'
        }
        else {
          display = 'https://sibepher.sirv.com/Gekk%20in%20Sneaker%20(1-30)/Sneaker%20in%20Shoe%20(1-30).spin'
        }
      }
      else if ($('.Sirv').attr('src').indexOf('Loafer') >= 0) {
        if ($('.Sirv').attr('src').indexOf('Shoe') >= 0)  {
          display = 'https://sibepher.sirv.com/Gekk%20Loafer%20(1-26)/Gekk%20Loafer%20(1-26).spin'
        }
        else {
          display = 'https://sibepher.sirv.com/Gekk%20in%20Loafer%20(1-30)/Loafer%20in%20Shoe%20(1-30).spin'
        }
      }
      else if ($('.Sirv').attr('src').indexOf('Flat') >= 0) {
        if ($('.Sirv').attr('src').indexOf('Shoe') >= 0)  {
          display = 'https://sibepher.sirv.com/Geek%20Flats%20NEW/Geek%20Flats%20NEW.spin'
        }
        else {
        display = 'https://sibepher.sirv.com/Flat%20in%20Shoe%20NEW/Flat%20in%20Shoe%20NEW.spin'
        }
      }
      $('.Sirv').attr('src', display); 
      $('.shoe-switch').text($('.shoe-switch').text() == "see in shoe" ? "see outside shoe" : "see in shoe")
    })


function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
// cruding with cookies
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Tues, 14 July 1992 00:00:01 GMT;';
}

if(window.location.href.indexOf("countdown") > -1) {
  localStorage.setItem("timer", true);
}

// redirect v. no redirect 
$(document).ready(function(){
  var flowFinish = readCookie('flowFinish')
  var gekksVisit = readCookie('gekksVisit')
  var customGekks = readCookie('customGekks')
  if ((!flowFinish) && (!gekksVisit)){
    createCookie("gekksVisit", "remarketing", 7)
    createCookie("flowFinish", "learnMore", 14)
    if (!(window.location.href.indexOf("?sh=d") > -1) && ( typeof on_index != "undefined" )) {
      window.location.href="/pages/customize"
    };
  }
  if (customGekks) {
    $('#custom-gekks a').attr("href", customGekks) 
  } 
})
 function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function countdownActive(){
  localStorage.setItem("activate", true);
  setTimeout(function() {
    $('span a h4').hide(); 
    $('#activate-countdown').show();
   }, 15000); 
 }
 

function checkForDiscount() {
$discountInput = $("input.js-form-discount");
$coupon = getParameterByName('coupon');

if($coupon){
  createCookie('discountCode', $coupon, { expires: 2 });
}

$discountCode = readCookie('discountCode');


if($discountCode){
  if ($discountInput.length > 0) { 
    $discountInput.val( $discountCode );
  }
} 
}; 


 function discountTimedBanner(){
   $('span a h4').hide();
    $('#activate-countdown').hide(); 
    $('#countdown').show();
   var minutesleft = 10;
   var secondsleft = 0; 
   var finishedtext = "Out of Time! Check back soon!";
   var end;
    if(localStorage.getItem("end")) {
      end = new Date(localStorage.getItem("end"));
   } else {
       end = new Date();
    end.setMinutes(end.getMinutes()+minutesleft);
    end.setSeconds(end.getSeconds()+secondsleft);
   }
  var counter = function () {
     var now = new Date();
    var diff = end - now;
    diff = new Date(diff);
    var sec = diff.getSeconds();
   var min = diff.getMinutes(); 
    if (min < 10) {
       min = "0" + min;
    }
     if (sec < 10) { 
       sec = "0" + sec;
     }     
      
      if(now >= end || localStorage.getItem("end") == "Invalid Date") { 
       $('#countdown').hide();
        clearTimeout(interval);
        localStorage.setItem("end", null)
        localStorage.clear()
      } 
      else {
        var value = min + ":" + sec;
        localStorage.setItem("end", end);
        document.getElementById('divCounter').innerHTML = value
     }
    }
    var interval = setInterval(counter, 1000);
}

$('#activate-timer').click(function(){
  discountTimedBanner(); 
  localStorage.setItem("timer", true);
});

var $animation_elements = $('.review-list');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('fade-in');
      $element.addClass('come-in')
    } 
  });
}


$(window).scroll(function() {
check_if_in_view()
}); 

$(document).ready(function() {
  check_if_in_view();
checkForDiscount()
})

$('.collection-prod').click(function() {
  event.preventDefault();
  $(this).siblings('.childlink').slideToggle();
  $(this).css(':after', 'transform:rotate(90deg)')
  $(this).children('span').text($(this).children('span').text() == '>' ? 'v' : '>')
});