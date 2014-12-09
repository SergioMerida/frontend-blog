$(document).ready(function(){
  $(".show").click(function(){
	$("#div1").load("_posts/2014-11-09-cognits-frontend-blog.md");
        $("#div2").load("_posts/2014-11-10-first-post.md");
	$("#div3").load("_posts/2014-11-12-second-post.md");
  });
});

$(document).ready(function() {
	$('.back').hide();
	$('.title').hide();
        $('.older p').hide();
	$('.show').click(function() {
	$('.older p').show();
	$('.title').show();
	$('.back').show();
    });
});

$(document).ready(function() {
	$('.back').click(function() {
	$('.post').hide();
	$('.back').hide();
    	});
	$('.show').click(function() {
	$('.post').show();
    	});
});
