// carousel

$(function() {
    $('.carousel').myCarousel({
        widthImg: 1024,
        carousel: $('.carousel-list')
    });
});

// Read more

$(function () {
  var button = $('.adv__content a');
  button.click(function (e) {
    e.preventDefault();
    var number = button.index(this);
    var content = $('.adv__content_text' + (number+1));
    content.toggleClass("adv__content_text-visible");
    var removeBlock = $('.adv__content_text' + (number+1)).siblings().last().detach();

    e.stopPropagation();

  $('body').click(function () {
    content.removeClass('adv__content_text-visible');
    var containerForBlock = $('.adv__content')[number];

    removeBlock.appendTo(containerForBlock);
    })
  });
});

// Accordion banners

$(function () {
  var button = $('.banners__item');
  button.hover(function () {
    $(this).find('li').css('backgroundColor', '#f4b60d');
  }, function () {
    if ($(this).find('.banners__item_content').css('display') === 'none') {
      $(this).find('li').css('backgroundColor', '#fff');
    };
  });
  button.click(function () {
    var obj = $(this);
    $(this).find('.banners__item_content').css('display', function (i, val) {
      if ($(this).css('display') === 'none') {
        $('.banners__item').find('.banners__item_content').css('display', 'none');
        $('.banners__item').find('.banners__button').html('+');
        $('.banners__item').find('li').css('backgroundColor', '#fff');
        return 'block';
      } else {
        return 'none';
      };
    });
    colorist(obj);
    if ($(this).find('.banners__button').html() === '+') {
      $(this).find('.banners__button').html('-');
    } else {
      $(this).find('.banners__button').html('+');
    };

    function colorist(obj) {
      if (obj.find('.banners__item_content').css('display') === 'block') {
        obj.find('li').css('backgroundColor', "#f4b60d");
      } else if (obj.data('hovered', true)) {
        obj.find('li').css('backgroundColor', "#f4b60d");
      } else {
        obj.find('li').css('backgroundColor', "#fff");
      };
    };
  });
});
