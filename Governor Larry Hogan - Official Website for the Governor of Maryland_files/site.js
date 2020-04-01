(function ($) {


	 $('#press a').each(function(){
	    $(this).addClass('list-group-item list-group-item-action flex-column align-items-start border-0');
		
	  });
	  
	   $('#press span').replaceWith(function() {
    return $('<small/>', {html: this.innerHTML
	    		
	  });

  });

	 $('#press small').each(function(){
	    $(this).addClass('list-group-item flex-column align-items-start border-0');
		
	  });

    /*
        Self-invoking function to contain scope. Receives $ as the global jQuery function.
    */

    mdgov.ready(function () {
		
		
		        /*
            Add your site's JS code here. When working with any MDGOV template module, be sure the API
            is ready by keeping code within this "mdgov.ready" callback.
            NOTE: this.modules contains template module objects.
        */
    });

})(jQuery);