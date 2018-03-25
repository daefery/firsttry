$( document ).ready(function() {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    $(".button-collapse").sideNav();
    $('.modal').modal();
    var men = jQuery.parseJSON(localStorage.getItem("menus"));
    for (var i = 0; i < men.length; i++) {
	    if(men[i].child != null){
	    	var kl='<a class="dropdown-button" href="#" data-activates="'+men[i].menu_id+'" dropdown data-hover="true">'+men[i].text_menu+'<i class="material-icons right">arrow_drop_down</i></a>';
    		$('#dropdown-'+men[i].menu_id).html(kl);
        $('#item_'+men[i].menu_id).html('Solutions<i class="material-icons right">arrow_drop_down</i>').
        attr('data-activates', 'data_'+men[i].menu_id);
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