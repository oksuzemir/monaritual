const navİcon = document.getElementById("nav-icon3")
const mobileNav = document.querySelector(".top-nav nav")
const subMenu = document.querySelector(".sub-menu")
const parallax = document.getElementById("parallax")
const global = document.querySelector(".fa-globe")
const globalSubmenu = document.querySelector(".global-sub-menu")

$(document).ready(function () {


    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $(mobileNav).toggleClass('open-nav');
    });

    $('.menu-item-has-children .fa-angle-right').click(function () {
        $(this).next('.sub-menu').slideToggle("fast");
        $(this).toggleClass("rotate")
      });

      $(".harf-siniri").text(function () {
        return $(this).text().length > 120 ? $(this).text().substr(0, 120) + '..' : $(this).text();
      });

      $(global).click(function () {
        $(globalSubmenu).slideToggle('fast')
    });
})