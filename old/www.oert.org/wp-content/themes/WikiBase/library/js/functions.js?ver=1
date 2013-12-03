jQuery.noConflict();

if (typeof Belle == 'undefined') var Belle = {};


Belle.ajaxGet = function(data, complete_fn) {
	jQuery.ajax({
		url:		Belle.AjaxURL,
		data:		data,
		dataType:	'html',

		error: function(request) {
			jQuery('#notices')
				.show()
				.append('<p class="alert">Error ' + request.status + ': ' + request.statusText + '</p>');
		},

		success: function() {
			jQuery('#notices').hide().html(); 
		},

		complete: function(request) {

			document.write = function(str) {};
			
			if ( complete_fn ) {
				complete_fn( request.responseText );
			}
		}
	});
}

