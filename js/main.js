// $(".accordion-content").css("display", "none");
$(document).ready(function () {
  $("#testimonial-first").slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,

          infinite: true,
          cssEase: "linear",
        },
      },
    ],
  });
  $("#testimonial-second").slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          infinite: true,
          cssEase: "linear",
        },
      },
    ],
  });
});

$(document).on("click", ".read-more-link", function () {
  var $contentToggle = $(this).closest(".content-toggle");
  var $readMoreText = $contentToggle.find(".read-more-text");
  var $threedots = $contentToggle.find(".three-dots");
  var isActive = $(this).hasClass("active");
  var readIcon = $(".readmore__toggle");
  $readMoreText.slideToggle();
  $threedots.toggle();
  $(this)
    .toggleClass("active", !isActive)
    .text(isActive ? "Read more" : " Read less");
});
