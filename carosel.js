
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
const $responsiveCarousel = document.querySelector(".js-carousel--responsive");
 
new Glider($responsiveCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});