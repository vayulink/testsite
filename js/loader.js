$(document).ready(function(){
	$("#content").load("home.html");

});

$('.menu li a').click(function(e){
	var page = $(this).attr('href');
	$('.menu li').removeClass('active');
   var $parent = $(this).parent();
	   if (!$parent.hasClass('active')) {
			$parent.addClass('active');
      }
   e.preventDefault();
	$("#content").load(page);
});