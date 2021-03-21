import '../../node_modules/focus-visible/dist/focus-visible';

import $ from 'jquery';
import '../css/main.scss';
import '../js/datepicker.js';
import '../js/jquery.maskedinput.js';
import '../js/gsap.min.js';
import '../js/ScrollTrigger.min.js';

import '../index.html';


$(document).ready(function() {
  $('.top__nav-mobile').click(function(event) {
    $('.top__nav-mobile, .top__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });

  var top = $('.top');
  var scroll = $(window).scrollTop();
  if (scroll >= 1) {
    top.addClass('sticky');
  }
  $(window).on('scroll', function() {
    scroll = $(window).scrollTop();
    if (scroll != 0) {
      top.addClass('sticky');
    } else {
      top.removeClass('sticky');
    }
  });

});

//animation s4 block
$('html').mousemove(function(e) {
  var x = e.pageX,
    y = e.pageY;
  $('.s4').css('transform', 'translate(' + x / -75 + 'px, ' + y / -75 + 'px)');

});

//return to top
$("a[href='#'], a[href='#home']").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});

$("a[href='#about'], a[href='#booking'], a[href='#contact'], a[href='#careers']").click(function(e) {
  e.preventDefault();
  var targetId = $(this).attr("href");
  var top = (($(targetId).offset().top) - 96);
  $('html, body').stop().animate({
    scrollTop: top
  }, "slow");
  return false;
});


gsap.utils.toArray(".parallax-item .parallax-content").forEach((section, i) => {
  const heightDiff = section.offsetHeight - section.parentElement.offsetHeight + 300;

  gsap.fromTo(section, {
    y: -heightDiff
  }, {
    scrollTrigger: {
      trigger: section.parentElement,
      scrub: true
    },
    y: 300,
    ease: "none"
  });
});



$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function() {
    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click', function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});



$(function() {
  //Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+1(999) 999-9999");
});

$(document).ready(function() {
  function showSteps() {
    $("#step1").click(function() {
      $("#stepcontent1").slideUp();
      $("#stepcontent2").addClass("show").removeClass("hide");
      $("#backstep1").show().appendTo($(".modal"));
    })
    $("#backstep1").click(function() {
      $("#stepcontent1").slideDown();
      $("#stepcontent2").addClass("hide");
      $("#backstep1").hide();
    })
    $("#step2").click(function() {
      $("#stepcontent2").slideUp();
      $("#stepcontent3").addClass("show").removeClass("hide");
      $("#backstep1").hide();
      $("#backstep2").show().appendTo($(".modal"));
    })
    $("#backstep2").click(function() {
      $("#stepcontent2").slideDown();
      $("#stepcontent3").addClass("hide");
      $("#backstep2").hide();
      $("#backstep1").show().appendTo($(".modal"));

    })
    $("#step3").click(function() {
      $("#stepcontent3").slideUp();
      $("#success-msg").addClass("show").removeClass("hide");
      $("#backstep2").hide();
    })
  }
  showSteps();



  $('.modal--show#book').click(function(e) {
    e.preventDefault();
    $('.wrapper').addClass('overlay');
    $('.wrapper').css('position', 'fixed');
    $('.modal#book').addClass('active');
    $("#backstep1, #backstep2").css('opacity', '1');

  });

  $('.modal--close#book').click(function(e) {
    e.preventDefault();
    $('.wrapper').removeClass('overlay');
    $('.wrapper').css('position', '');
    $('.modal#book').removeClass('active');
    $("#backstep1, #backstep2").css('opacity', '0');
  });


  $('.modal--show#careers').click(function(e) {
    e.preventDefault();
    $('.wrapper').addClass('overlay');
    $('.wrapper').css('position', 'fixed');
    $('.modal#careers').addClass('active');
  });
  $('.modal--close#careers').click(function(e) {
    e.preventDefault();
    $('.wrapper').removeClass('overlay');
    $('.wrapper').css('position', '');
    $('.modal#careers').removeClass('active');
  });

  $('.modal--show#additional-services').click(function(e) {
    e.preventDefault();
    $('.wrapper').addClass('overlay');
    $('.wrapper').css('position', 'fixed');
    $('.modal#additional-services').addClass('active');
  });
  $('.modal--close#additional-services').click(function(e) {
    e.preventDefault();
    $('.wrapper').removeClass('overlay');
    $('.wrapper').css('position', '');
    $('.modal#additional-services').removeClass('active');
  });

})
