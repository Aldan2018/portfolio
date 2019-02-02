(function($){
  $.fn.myCarousel=function(options) {
      var defaults = {
          widthImg: 1024,
          carousel: $('.carousel-list')
      };

      var settings = $.extend(defaults, options);

      var widthImg = settings.widthImg;
      var carousel = settings.carousel;


      var carouselElementsLength = carousel.children().length;
      var maxMargin = -widthImg*2;
      var minMargin = -(carouselElementsLength - 2)*widthImg;

      var marginLeftValue = parseInt(carousel.css('margin-left'));

      var autoMove = setInterval(slideMover, 7000);

      function slideMover() {

          marginLeftValue -= widthImg;
          carousel.animate({'margin-left': marginLeftValue + 'px'}, 500);
          var append = setTimeout(function(){
              carousel.children().first().appendTo(carousel);
              marginLeftValue += widthImg;
              carousel.animate({'margin-left': marginLeftValue + 'px'}, 0);
          },500);
      };
  return this;
};
})(jQuery);
