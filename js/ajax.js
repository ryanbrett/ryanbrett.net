$(document).ready(function(){
	$('#tns li').on('click', function(e) {
		e.preventDefault();
	
	$.ajax({
		url: 'php/ajax-image.php',
		type: 'post',
		data: {'page': $(this).attr('href')},
		cache: false,
		success: function(json) {
			$.each(json, function(i, item) {
				if(typeof item == 'object') {
				newhtml += '<div id="img-wrap">
				}
			}
		}
	});
});
	
}