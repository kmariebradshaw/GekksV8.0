// banner snow fall 
$(document).ready(function() {
  n = 0 
  setInterval(function () {
    n += 1
    $('#banner-cta').css("background-position-y", n)
  }, 100)
})


// hamburger nav
$('#hamburger').click(function(){
  // $(this).toggleClass('open');
  $('.mobile-nav1').show().removeClass('slide-out').addClass('slide-in');
  $('.index-sections, main, header, footer, #banner-cta, .modal').addClass('darken')
  $('body').addClass('freeze-frame')
});
$('#hamburger-close span').click(function() {
    $('.mobile-nav1').removeClass('slide-in').addClass('slide-out');
    $('body').removeClass('freeze-frame')

  $('.index-sections, main, header, footer, #banner-cta, .modal').removeClass('darken')
})
// $('#nav-more').click(function() {
//   $(this).hide(); 
//   $('.nav-more').show(); 
// }); 
$('.collection-prod').click(function() {
  event.preventDefault();
  $(this).siblings('.childlink').slideToggle();
  $(this).css(':after', 'transform:rotate(90deg)')
  $(this).children('span').text($(this).children('span').text() == '◯' ? '⬤' : '◯')
});
// sizing chart
$('#size-chart').click( function() {
  $('#display-size').fadeIn();  
});

// shoe diagram on how it works page
$('.text-solution').click(function(){
  var $this = $(this)
  $this.siblings().removeClass('up-label-vis').removeClass('label-vis').children('.info-label').hide();
  if ($this.hasClass('text-solution-below')) {
    $this.toggleClass('up-label-vis');
  } 
  else {
   $this.toggleClass('label-vis');
  }
  $this.children('.info-label').toggle(); 
});

$('.do-text div').click(function(){
  if ($(this).parent().parent().hasClass('do-text-below')) {
    $(this).parent().siblings('.do-benefit').toggleClass('border-left');
      $(this).toggleClass('rotate');
       $(this).parent().siblings('.do-benefit').toggleClass('invis');


  } 
  else {
    $(this).toggleClass('rotate');
    $(this).siblings('.do-benefit').toggleClass('invis');
  }
});

$(document).ready(function() {
  if (window.width < 800) {
$('body').on('click touchend', function(e) {
    var target = $(e.target);
    if(!target.is('.text-solution') ){
       if ( $('.info-label').is(':visible') ) {
        $('.info-label').hide(); 
        $('.text-solution').removeClass('label-vis');
        $('.text-solution-below').removeClass('up-label-vis');
    }
  }
});
}});
// popup close
$('.klaviyo_header_close').on('click', function() {
  $(this).closest('.modal').hide();
  $('header, main, footer, #banner-cta, .index-sections, .mobile-nav1').removeClass('darken');

});
$('body').click(function (event) {
   if(!$(event.target).closest('.modal').length && !$(event.target).is('.modal') && !$(event.target).is('#referafriend h3') && !
    $(event.target).is('#size-chart')  && !$(event.target).closest('#CartContainer').length && !$(event.target).is('button') && !$(event.target).is('button span') && !$(event.target).is('#hamburger span') && !$(event.target).closest('.mobile-nav1').length ) {
     $(".modal").hide(); 
     if ($('#CartContainer').is(":visible ")) {
      cartClose();
     }
     if ($('.mobile-nav1').is(":visible")) {
      if ($('.mobile-nav1').hasClass('slide-in')) {
        $(".mobile-nav1").removeClass('slide-in').addClass('slide-out');
      }     
    }
      $('body').removeClass('freeze-frame')

      $('header, main, footer, #banner-cta, .index-sections, .mobile-nav1').removeClass('darken');
   }    
});
// ajax cart close 
function cartClose() {
  if ($('#CartContainer').hasClass('slide-in')) {
    $("#CartContainer").removeClass('slide-in').addClass('slide-out');
  }
 $('header, main, footer, #banner-cta, .index-sections, .mobile-nav1').removeClass('darken');
}
// ajax cart countdown timer 
//      <div>
//             <div id="timer-wrapper" class="border-green tac">
//               <h3 class="ib text-green" id="timer">20:00</h3>
//             </div> 
//             <p class="text-green tac subscript">Looks like an item you ordered is in high demand. No worries, we've reserved your order for 20 minutes.</p>
//         </div>
// $('.checkout').submit(function() {
//   setTimeout(function() {
//   discountTimedBanner(); 
//   localStorage.setItem("timer", true);
//   }, 500); 

// });

//  function discountTimedBanner(){
//    var minutesleft = 20;
//    var secondsleft = 0; 
//    var end;
//     if(localStorage.getItem("end")) {
//       end = new Date(localStorage.getItem("end"));
//    } else {
//        end = new Date();
//     end.setMinutes(end.getMinutes()+minutesleft);
//     end.setSeconds(end.getSeconds()+secondsleft);
//    }
//   var counter = function () {
//      var now = new Date();
//     var diff = end - now;
//     diff = new Date(diff);
//     var sec = diff.getSeconds();
//    var min = diff.getMinutes(); 
//     if (min < 10) {
//        min = "0" + min;
//     }
//      if (sec < 10) { 
//        sec = "0" + sec;
//      }     
      
//       if(now >= end || localStorage.getItem("end") == "Invalid Date") { 
//         clearTimeout(interval);
//         localStorage.setItem("end", null)
//         localStorage.clear()
//       } 
//       else {
//         var value = min + ":" + sec;
//         localStorage.setItem("end", end);
//         document.getElementById('timer').innerHTML = value
//      }
//     }
//     var interval = setInterval(counter, 1000);
// }

// $('#activate-timer').click(function(){
//   discountTimedBanner(); 
//   localStorage.setItem("timer", true);
// });


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// desktop sub-nav
$('.sub-nav-header').on('click mouseover', function(event) {
  event.preventDefault();
  var subnav = $(this).next('.sub-nav')
  $('.sub-nav').not(subnav).hide(); 
  $(subnav).show(); 
  $('header').css("height", $('.desktop-sub-nav').height() + subnav.height() + 30 + "px")
});
$(window).scroll(function() {
  $('.sub-nav').hide(); 
  $('header').css("height", "")
})
$('.no-sub a').on('click mouseover', function() {
  $('.sub-nav').hide(); 
    $('header').css("height", "")
})
$('body').click(function (event) {
   if((!$(event.target).parent().parent().is('.desktop-sub-nav')) && (!$(event.target).parent().parent().is('.sub-nav'))) {
     $(".sub-nav").hide(); 
         $('header').css("height", "")
   }    
});
// thumbnail selection on product pages
$('#thumbnails ul li img').click(function() {
  var src = $(this).attr("src").replace("compact", "2000x2000"); 
  $(this).addClass('border-lightgray').parent().siblings().children().removeClass('border-lightgray'); 
  $('#featured-image').attr("src", src); 
}); 
var swipeLocation = 0 
var thumbs = $("#thumbnails ul li").children().toArray()

$('#featured-image').on("swipeleft", function(event) {
  var currentSrc = $(this).attr("src"); 
  $.each(thumbs, function(index, thumb) {
    if ($(thumb).attr("src").replace("compact", "2000x2000") == currentSrc) {
      swipeLocation = index 
    }
  }); 
  if ((thumbs.length - 1)> swipeLocation) {
swipeLocation += 1 
  } 
  $("#featured-image").attr("src", $(thumbs[swipeLocation]).attr("src").replace("compact", "2000x2000"))
  $('#thumbnails ul li img').removeClass('border-lightgray')
  $(thumbs[swipeLocation]).addClass('border-lightgray')
 }); 
            $('#featured-image').on("swiperight", function(event) {
  var currentSrc = $(this).attr("src"); 
  $.each(thumbs, function(index, thumb) {
    if ($(thumb).attr("src").replace("compact", "2000x2000") == currentSrc) {
      swipeLocation = index 
    }
  }); 
  if (swipeLocation > 0) { 
    swipeLocation -=1
  } 
  $("#featured-image").attr("src", $(thumbs[swipeLocation]).attr("src").replace("compact", "2000x2000"))
   $('#thumbnails ul li img').removeClass('border-lightgray')
  $(thumbs[swipeLocation]).addClass('border-lightgray')
 }); 

// 3-d shoe on index page 
$('.switch-button').click(function(){
      var display = ""
      $('.drag-to').attr('src', '{{"drag-to.png" | asset_url}}')
      switch ($(this).attr("id")) {
        case "switch-to-flat": 
          display = 'https://sibepher.sirv.com/Geek%20Flats%20NEW/Geek%20Flats%20NEW.spin'
          $(this).parent().parent().addClass('current-switch').siblings().removeClass('current-switch');
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
})





