// GSAP
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.home',
//       start: 'center center',
//       end: 'bottom top',
//     },
//   })
//   .from('.anima1', {
//     opacity: 0,
//     y: -100,
//     duration: 1,
//     stagger: 0.6,
//   })
//   .from('.home-img', { opacity: 0, x: 100, duration: 1 }, '-=.7');

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.works',
//       start: 'top',
//       end: 'bottom top',
//     },
//   })
//   .from('.anima2', {
//     opacity: 0,
//     y: -100,
//     duration: 1,
//     stagger: 0.6,
//   })
//   .from('.works-cards', { opacity: 0, x: 100, duration: 1 }, '-=.7');

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.skills',
//       start: 'top center',
//       end: 'bottom top',
//     },
//   })
//   .from('.anima3', {
//     opacity: 0,
//     y: -100,
//     duration: 1,
//     stagger: 0.6,
//   })
//   .from('.skills-cards', { opacity: 0, x: 100, duration: 1 }, '-=.7');

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.about',
//       start: 'top center',
//       end: 'bottom top',
//     },
//   })
//   .from('.anima4', {
//     opacity: 0,
//     y: -100,
//     duration: 1,
//     stagger: 0.6,
//   })
//   .from('.about-img', { opacity: 0, x: 100, duration: 1 }, '-=.7')
//   .from('.about-text', { opacity: 0, x: 100, duration: 1 }, '-=.7');

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.contact',
//       start: 'top center',
//       end: 'bottom top',
//     },
//   })
//   .from('.anima5', {
//     opacity: 0,
//     y: -100,
//     duration: 1,
//     stagger: 0.6,
//   })
//   .from('.footer-boxes', { opacity: 0, x: 100, duration: 1 }, '-=.7');

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1100,
  distance: '25rem',
  delay: 400,
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1100,
  distance: '25rem',
  delay: 400,
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1100,
  distance: '25rem',
  delay: 300,
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1100,
  distance: '25rem',
  delay: 300,
});

// Scroll down icon
$(function () {
  $('.scroll-down').click(function () {
    $('html, body').animate(
      { scrollTop: $('section.works').offset().top },
      'slow'
    );
    return false;
  });
});

//Menu button on mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.main-menu').classList.toggle('show');
});

//Menu btn on mobile disappear when click outside
$('html').click(function (event) {
  var otarget = $(event.target);
  if (
    !otarget.parents('.main-menu').length &&
    otarget.attr('id') != '.main-menu' &&
    !otarget.parents('.menu-toggle').length
  ) {
    $('.main-menu').removeClass('show');

    // console.log(otarget.parents('.main-menu').length);
    // console.log(otarget.attr('id'));
    // console.log(otarget.parents('.menu-toggle').length);
  }
});

// Filter Gallery
$(document).ready(function () {
  $('.works-btn').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.works-card').fadeIn();
    } else {
      $('.works-card')
        .not('.' + value)
        .fadeOut();
      $('.works-card')
        .filter('.' + value)
        .fadeIn();
    }
  });
  //add active class
  $('.works-btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
