"use strict";

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
    $(this).find('div').css({'backgroundColor': '#f4b60d', 'color': '#fff'});
  }, function () {
    if ($(this).find('.banners__item_content').css('display') === 'none') {
      $(this).find('div').css({'backgroundColor': '#fff', 'color': 'black'});
    };
  });

  button.click(function () {

    var obj = $(this);

    $(this).find('.banners__item_content').css('display', function (i, val) {
      if ($(this).css('display') === 'none') {
        $('.banners__item').find('.banners__item_content').css('display', 'none');
        $('.banners__item').find('.banners__openPnl').html('+');
        $('.banners__item').find('div').css({'backgroundColor': '#fff', 'color': 'black'});

        return 'block';
      } else {
        return 'none';
      };
    });
    colorist(obj);
    if ($(this).find('.banners__openPnl').html() === '+') {
      $(this).find('.banners__openPnl').html('-');
    } else {
      $(this).find('.banners__openPnl').html('+');
    };

    function colorist(obj) {
      if (obj.find('.banners__item_content').css('display') === 'block') {
        obj.find('div').css({'backgroundColor': "#f4b60d", 'color': '#fff'});
      } else if (obj.data('hovered', true)) {
        obj.find('div').css({'backgroundColor': "#f4b60d", 'color': '#fff'});
      } else {
        obj.find('div').css('backgroundColor', "#fff");
      };
    };
  });
});
