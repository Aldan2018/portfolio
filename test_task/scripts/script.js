// select menu

let topMenu = $('#topMenu').children();
let topMenuArray = Array.from($('#topMenu').children());

topMenu.click(function () {
  topMenuArray.forEach(function () {
    topMenu.removeClass("active");
    topMenu.children().removeClass("visible").addClass("invisible");
  })
  $(this).addClass("active");
  $(this).children().removeClass("invisible").addClass("visible");
})

// hide-show top menu

let topMenuButton = $('#showMenuButton');
let menuArea = $('#topMenu');
topMenuButton.click(function () {
  let currentMenuHeight = menuArea.css("height").replace(/\D+/g,"");
  if(currentMenuHeight == 32) {
  menuArea.animate({
    height: '+=140'
  }), 500} else {
    menuArea.css('height', '32px')
  }
})



// scrolling portfolio block

let container = $('.container').width();
let portfolioWrapper = $('.portfolio__item_wrapper');
let prevButton = $('.portfolio__prev');
let nextButton = $('.portfolio__next');

let containerWidth = $('.container').width();
let portfolioWrapperWidth = $('.portfolio__item_wrapper').width();
let hidenWrapper = portfolioWrapperWidth - containerWidth;


prevButton.click(function () {
  let currentMarginLeft = portfolioWrapper.css("margin-left").replace(/\D+/g,"");
  if(currentMarginLeft > 0) {
    portfolioWrapper.animate({
      marginLeft: '+=77'
    }, 500);
  } else {
    return
  }
});
nextButton.click(function () {
  let currentMarginLeft = portfolioWrapper.css("margin-left").replace(/\D+/g,"");
  if(currentMarginLeft < hidenWrapper) {
    // portfolioWrapper.css("margin-left", marginChange + "px")
    portfolioWrapper.animate({
      marginLeft: '-=77'
    }, 500);
  } else {
    return
  }
});
