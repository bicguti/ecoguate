$(document).ready(function(){
  //datos para inicializar el primer slider
  $('.bxslider').bxSlider({
pagerCustom: '#bx-pager',
captions: true,
mode: 'horizontal',
  auto: true,
  pause: 5000,
  speed: 500
});

//datos para inicializar el segundo slider
$('.bcSlider').bxSlider({
slideWidth: 320, //ancho maximo
minSlides: 2, //minimo de imagenes a mostrar en pantallas pequeñas
maxSlides: 3,//maximo de imagenes a mostrarse en pantallas grandes
slideMargin: 10, //margen entre imagenes
});

});//fin del document ready
