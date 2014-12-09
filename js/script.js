
/*-----------------------Comments-----------------------------*/
/*Text box comment 1*/
var main = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');
}

$(document).ready(main);

/*Text box comment 2*/
var main = function() {
  $('#btn2').click(function() {
    var post = $('.status-box2').val();
    $('<li>').text(post).prependTo('.posts2');
    $('.status-box2').val('');
    $('.counter2').text('140');
    $('#btn2').addClass('disabled'); 
  });
  
  $('.status-box2').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter2').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('#btn2').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('#btn2').addClass('disabled');
    }
    else {
      $('#btn2').removeClass('disabled');
    }
  });
  
  $('.btn2').addClass('disabled');
}

$(document).ready(main);

/*Text box comment 3*/
var main = function() {
  $('#btn3').click(function() {
    var post = $('.status-box3').val();
    $('<li>').text(post).prependTo('.posts3');
    $('.status-box3').val('');
    $('.counter3').text('140');
    $('#btn3').addClass('disabled'); 
  });
  
  $('.status-box3').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter3').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('#btn3').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('#btn3').addClass('disabled');
    }
    else {
      $('#btn3').removeClass('disabled');
    }
  });
  
  $('#btn3').addClass('disabled');
}

$(document).ready(main);



/*--------------------------------------------------------------*/


/*---------------------Loading files----------------------------*/
/*Load .md file*/
$(document).ready(function(){
  $(".mostrar").click(function(){
    $(".div1").load("_posts/2014-11-09-cognits-frontend-blog.md");
  });
});

/*Load second .md file*/
$(document).ready(function(){
  $(".mostrar2").click(function(){
    $(".div2").load("_posts/2014-11-10-first-post.md");
  });
});

/*Load third .md file*/
$(document).ready(function(){
  $(".mostrar3").click(function(){
    $(".div3").load("_posts/2014-11-12-second-post.md");
  });
});
/*---------------------------------------------------------------*/

/*-------------------Buttons-------------------------------------*/
/*Buttons 1*/
$(document).ready(function() {
	$('.container').hide();
	$('.div1').hide();
	$('.regresar').hide();
	
    $('.regresar').click(function() {
        $('.div1').hide();
		$('.container').hide();
		$('.regresar').hide();
	});
	$('.mostrar').click(function() {
	$('.div1').show();
	$('.post p').show();
	$('.container').show();
	$('.regresar').show();	
    });
});

/*Buttons 2*/
$(document).ready(function() {
	$('.container2').hide();
	$('.div2').hide();
	$('.regresar2').hide();
    $('.regresar2').click(function() {
        $('.div2').hide();
		$('.container2').hide();
		$('.regresar2').hide();
	});
	$('.mostrar2').click(function() {
	$('.div2').show();
	$('.sergio').show();
	$('.container2').show();
	$('.regresar2').show();	
    });
});

/*Buttons 3*/
$(document).ready(function() {
	$('.container3').hide();
	$('.div3').hide();
	$('.regresar3').hide();
    $('.regresar3').click(function() {
        $('.div3').hide();
	$('.container3').hide();
	$('.regresar3').hide();
	});
	$('.mostrar3').click(function() {
	$('.div3').show();
	$('.parrafo').show();
	$('.container3').show();
	$('.regresar3').show();	
    });
});

/*---------------------------------------------------*/


/*------------------Search--------------------------*/

/*Search button*/
$.expr[':'].icontains = function(obj, index, meta, stack){
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
        };
     
     
        $(document).ready(function(){    
       
            $('#buscador').keyup(function(){
       
                         buscar = $(this).val();
                         $('.lista li').removeClass('resaltar');
             
                                if(jQuery.trim(buscar) != ''){
                                   
                                   $(".lista li:icontains('" + buscar + "')").addClass('resaltar');
                                 
                                }
       
       
                });
        });

$(document).ready(function() {
    $('.buscador').hide();
	$('.searcher').hide();
    $('.search').click(function() {
        $('.buscador').show();
		$('.searcher').show();
	});
	$('.searcher').click(function() {
		$('.buscador').hide();
		$('.searcher').hide();
		$('resaltar').hide();
    });
	$('.search').click(function() {
        $('.buscador').show();
		$('.searcher').show();
	});
});
/*-----------------------------------------------*/




