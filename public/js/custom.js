$(document).ready(function(){
	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
 }); });

// jQuery Menu Closer
jQuery('.nav a').on('click', function(){
    jQuery('.navbar-collapse.in').collapse('hide');
});