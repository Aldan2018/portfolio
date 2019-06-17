// select menu

// let topMenu = $('#topMenu').children();
// let topMenuArray = Array.from($('#topMenu').children());
//
// topMenu.click(function () {
//   topMenuArray.forEach(function () {
//     topMenu.removeClass("active");
//     topMenu.children('img').removeClass("visible").addClass("invisible");
//   })
//   $(this).addClass("active");
//   $(this).children('img').removeClass("invisible").addClass("visible");
// })

// hide-show top menu

let topMenuButton = $('#showMenuButton');
let menuArea = $('#topMenu');
topMenuButton.click(function () {
  menuArea.toggle();
})



// scrolling portfolio block

let portfolioWrapper = $('.portfolio__item_wrapper');
let prevButton = $('.portfolio__prev');
let nextButton = $('.portfolio__next');

let portfolioWrapperWidth = $('.portfolio__item_wrapper').width();

let itemWidth = portfolioWrapperWidth/portfolioWrapper.children().length;

if (portfolioWrapper.children().length > 4) {
    portfolioWrapper.children().last().prependTo(portfolioWrapper);
    portfolioWrapper.css("margin-left", -itemWidth + 'px');

    $(window).resize(function() {
      if($(window).width() <= '576') {
        portfolioWrapper.css("margin-left", 0 + 'px');
        itemWidth = portfolioWrapperWidth/portfolioWrapper.children().length;
        portfolioWrapperWidth = $('.portfolio__item_wrapper').width();
      }
      if($(window).width() > '576') {
        portfolioWrapper.css("margin-left", -itemWidth + 'px');
        itemWidth = portfolioWrapperWidth/portfolioWrapper.children().length;
        portfolioWrapperWidth = $('.portfolio__item_wrapper').width();
      }
    })

prevButton.click(function () {
    let currentMarginLeft = parseInt(portfolioWrapper.css("margin-left"));

    if (currentMarginLeft > -itemWidth*2) {
      portfolioWrapper.children().last().prependTo(portfolioWrapper);
      portfolioWrapper.css("margin-left", -itemWidth*2 + 'px');
    }

    portfolioWrapper.animate({
      'marginLeft': -itemWidth + 'px'
    }, 500);

});

nextButton.click(function () {
  let currentMarginLeft = parseInt(portfolioWrapper.css("margin-left"));
  let nextAddPoint = (portfolioWrapper.children().length - 5)*itemWidth;

  if (currentMarginLeft <= -nextAddPoint) {
    portfolioWrapper.children().first().appendTo(portfolioWrapper);
    currentMarginLeft += itemWidth;
    portfolioWrapper.css("margin-left", currentMarginLeft + 'px');
  }

  currentMarginLeft -= itemWidth;
  portfolioWrapper.animate({
    'marginLeft': currentMarginLeft + 'px'
  }, 500);
});
}
