$( document ).ready(function() {
    $(".button-collapse").sideNav();

    var men = jQuery.parseJSON(localStorage.getItem("menus"));
    for (var i = 0; i < men.length; i++) {
	    if(men[i].child != null){
	    	var kl='<a class="dropdown-button" href="#" data-activates="'+men[i].menu_id+'" dropdown data-hover="true">'+men[i].text_menu+'<i class="material-icons right">arrow_drop_down</i></a>';
    		var klmobile = '<a class="dropdown-button" href="#" data-activates="'+men[i].menu_id+'">'+men[i].text_menu+'<i class="material-icons right">arrow_drop_down</i></a>'
    		$('#dropdown-'+men[i].menu_id).html(kl);
    		$('#dropdown-mobile-'+men[i].menu_id).html(klmobile);
	    }
    }
	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
});