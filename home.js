$(".rising-stars-owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  // center: true,
  nav: true,
  autoWidth: false,

  navText: [
    '<span class="rising-stars-custom-prev-btn rising-stars-custom-nav-btn"></span>',
    '<span class="rising-stars-custom-next-btn rising-stars-custom-nav-btn"></span>',
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      // autoWidth: true,
      // margin: 200,
      margin: 50,
    },
    650: {
      
      items: 2,
      margin: 50,
    },
    1024: {
      items: 3,
      margin: 50,
    },
    1500: {
      items: 4,
      margin: 60,
      
    },
  },
});

$(".featured-articles-owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  // center: true,
  nav: true,
  autoWidth: false,
  navText: [
    '<span class="blogs-custom-prev-btn blogs-custom-nav-btn"></span>',
    '<span class="blogs-custom-next-btn blogs-custom-nav-btn"></span>',
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      // autoWidth: true,
      // margin: 200,
    },
    780: {
      items: 2,
    },
    1024: {
      items: 3,
      margin: 50,
    },
  },
});

$(document).ready(function () {
  // Initialize Owl Carousels
  $("#iit-carousel").owlCarousel();
  $("#neet-carousel").owlCarousel();
  $("#foundation-carousel").owlCarousel();

  // Show the IIT carousel by default
  $("#iit-carousel").show();

  // Click event handler for carousel links
  $(".carousel-link").click(function (e) {
    e.preventDefault();

    // Remove 'active' class from all anchor tags
    $(".carousel-link").removeClass("active");

    // Add 'active' class to the clicked anchor tag
    $(this).addClass("active");

    var target = $(this).data("target");

    // Hide all carousels
    $("#iit-carousel, #neet-carousel, #foundation-carousel").hide();

    // Show the selected carousel
    $("#" + target + "-carousel").show();

    // Trigger Owl Carousel's refresh
    $("#" + target + "-carousel").trigger("refresh.owl.carousel");
  });

  // Trigger click on the "IIT" link by default
  $('[data-target="iit"]').trigger("click");
});

$("#iit-carousel").owlCarousel({
  loop: true,
  margin: 0,
  // center: true,
  dots:true,
  nav: false,
  autoWidth: false,
  dotsEach: 3,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      
      margin:30,
    },
    800:{
      items: 2,
      margin:30,
    },
    1000:{
      margin:30,
      
     
      items: 3,
  
    },
    
    1400: {
      margin:30,
      items: 4,
  
    },
  },
});

$("#neet-carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  dots:true,
  
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      
      margin:30,
    },
    800:{
      items: 2,
      
      margin:30,
    },
    1000:{
      
      
     
      items: 3,
      
      margin:30,
    },
    
    1400: {
      items: 4,
      
      margin:30,
    },
  },
});

$("#foundation-carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  dots:true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      
      margin:30,
    },
    800:{
      items: 2,
      
      margin:30,
    },
    1000:{
      
      
     
      items: 3,
      
      margin:30,
    },
    
    1400: {
      items: 4,
      
      margin:30,
    },
  },
});
