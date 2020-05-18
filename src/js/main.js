import $ from 'jquery';
$(document).ready(function(){
  var btnToggle = $('.toggle');
  btnToggle.click(function(){
    $('.navbar').toggle();
  });

});//ready
