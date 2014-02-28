$(document).ready(function(){

$('#description').slideToggle(false);

$('#tns a').click(function(e) {
	var url = $(this).attr('href') + '#imginfo';
	$('#imgcontainer').html('<h3 id="loader">loading...</h3>').load(url);
	e.preventDefault();
})




$('#iconinfo').live('click', function(){
		$('#description').slideToggle('slow', 'swing', function() {
		});
}); 
	

/* 	$('.resources-header').click(function() {
		$(this).next().toggle('slow');
		return true;
	}).next().hide(); */

/* FADE THUMBNAILS */
	$(function() {
    $('#tns li').hover(function() {
        $(this).siblings().stop(true).animate({opacity:'0.2'},1000);
    }, function() {
        $(this).siblings().stop(true).animate({opacity:'1'},1000);
    });
});	
/* FADE THUMBNAILS */

}); /* END */

/* FILTERS */
$(document).ready(function() { 
    $('ul#filters a').click(function() {  
        $('ul#filters .current').removeClass('current');  
        $(this).parent().addClass('current');  
  
        var filtersVal = $(this).text().toLowerCase().replace(' ','-');  
  
        if(filtersVal == 'reset') {  
            $('ul#tns li.hidden').fadeIn('slow').removeClass('hidden');  
        } else {  
            $('ul#tns li').each(function() {  
                if(!$(this).hasClass(filtersVal)) {  
                    $(this).fadeOut('normal').addClass('hidden');  
                } else {  
                    $(this).fadeIn('slow').removeClass('hidden');  
                }  
            });  
        }  
  
        return false;  
    });  
  });   
/* FILTER */

/* NEW THUMBNAIL LOAD */


/* -:-:- SNIPPET -:-:- $(document).ready(function() {
$('#btn-next').click(function() {  
var img = $("<img />").attr('src', 'http://www.ryanbrett.net/images/tn-tertiary-homogeneous.jpg')
                      .load(function() {
                         if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                             alert('broken image!');
                         } else {
                             $("#tns").append(img);
                         }
                      });
					 });
}); */







