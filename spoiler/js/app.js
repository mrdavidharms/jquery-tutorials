

//hide spoiler
$(".spoiler span").hide();
// add a button
$(".spoiler").append("<button>Reveal spoiler</button>");
//when button pressed
$("button").click(function(){
  //show spoiler
  $(this).prev().show();

//get rid of button
  $(this).remove();

});
