$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    initialSlide: 1,
    pauseonfocus: true,
    pauseonhiver: true,
    pauseondots: true,
    draggable: false,
    swipe: true,
    touchThreshold: 10,
    touchmove: true,
    waitForAnimate: true,
  })

  $('.navigation-menu-burger').click(function (event) {
    $('.navigation-menu-burger,.navigation').toggleClass('active')
  })
  $('body').toggleClass('lock')
})
