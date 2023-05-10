import React, { useEffect } from 'react';
import $ from 'jquery';

function Header() {
  useEffect(() => {
    // Detect onclick event
    if (window.matchMedia("(max-width: 920px)").matches === false) {
      $(".ham").on("click", function() {
        $("menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","99");
      });
      $(".close").on("click", function() {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-500px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
      });
      $(".overlay").on("click", function() {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-500px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
      });
    } else {
      $(".ham").on("click", function() {
        $("menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","9");
      });
      $(".close").on("click", function() {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-120%");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
      });
      $(".overlay").on("click", function() {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-120%");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
      });
    }

    // Scroller Nav
    window.onscroll = function() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--primary)");
        $("nav").css("box-shadow","0px 6px 16px -6px var(--dark)");
        $(".social_icons").addClass("social_icon");
        $(".social_icons").removeClass("social_icons");
        $(".google_play").children("strong").hide("slow");
        $(".google_play").children("img").css("margin-right","0px");
      } else {
        $("nav").css("background-color","transparent");
        $("nav").css("box-shadow","0px 0px 0px 0px var(--dark)");
        $(".social_icon").addClass("social_icons");
        $(".social_icon").removeClass("social_icon");
        $(".google_play").children("strong").show("slow");
        $(".google_play").children("img").css("margin-right","10px");
      }
    };

    // DETECT ESC KEY PRESSED
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      // Check if the key pressed is the Escape key
if (evt.keyCode === 27) {
    $(".contact").hide().css("top","-100%").fadeOut('100');
    $("menu").css("right", "-500px");
    $(".overlay").css("opacity","0");
    $(".overlay").css("z-index","-1");
    }
    };
    // Smooth Scrolling
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600, 'linear');
  });

}, []);

return (
<header>
{/* header content goes here */}
</header>
);
}

export default Doggo;