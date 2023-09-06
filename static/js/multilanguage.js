
$('document').ready(function () {


// RESTYLE THE DROPDOWN MENU
$('#google_translate_element').on("click", function () {

$('.goog-te-menu-frame').toggleClass("toggle-none");

  // Change font family and color
  $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
    .css({
      'color': '#544F4B',
      'width': '200px'
    });
    

  // Change menu's padding
  $("iframe").contents().find('.goog-te-menu2-item-selected').css('display', 'none');

  // Change menu's padding
  $("iframe").contents().find('.goog-te-menu2').css('padding', '0px');

  // Change the padding of the languages
  $("iframe").contents().find('.goog-te-menu2-item div').css('padding-left', '20px');
  $("iframe").contents().find('.goog-te-menu2-item div').css('padding-right', '20px');
  $("iframe").contents().find('.goog-te-menu2-item div').css('padding-top', '10px');
  $("iframe").contents().find('.goog-te-menu2-item div').css('padding-bottom', '10px');

  // Change the width of the languages
  $("iframe").contents().find('.goog-te-menu2-item').css('width', '300px');
  $("iframe").contents().find('td').css('width', '100%');

  // Change hover effects
  $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
    $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
  }, function () {
    $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
  });

  // Change Google's default blue border
  $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

  // Change the iframe's box shadow
  $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');


  // Change the iframe's size and position?
  $(".goog-te-menu-frame").css({
    'height': '315px',
    'width': '200px',
    'top': '55px',
    'right': '20%',

  });
  // Change iframes's size
  $("iframe").contents().find('.goog-te-menu2').css({
    'height': '100%',
    'width': '100%'
  });
  });
});


