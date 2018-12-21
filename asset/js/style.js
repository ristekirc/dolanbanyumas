
		new WOW().init();

	    $(document).ready(function(){
			
			var owl = $('.owl-carousel');
	            
		    $('.sidenav').sidenav({
			    edge : 'right',
		        draggable : true,
		        preventScrolling : true,
		        inDuration : 300,
		        outDuration : 300
		    });

		    $('.parallax').parallax();

		    $('.slider').slider({
		    	indicators : false,
		    	duration : 500,
		    	height : 250,
		    	interval : 3000
		    });

		    $('.modal').modal();

		    owl.owlCarousel({
		    	loop : true,
		    	margin : 20,

		    	responsive : {
		    		992:{
		    			items : 3,
		    			nav : false
		    		},
		    		600 : {
		    			items : 2,
		    			nav : false
		    		},
		    		480 : {
		    			items : 1,
		    			nav : false
		    		},
		    		320 : {
		    			items : 1,
		    			nav : false	
		    		}
		    	},
		    	animateIn : 'flipInX',
		    	animateOut : 'slideOutDown'
		    });

		    $('.left_des').click(function(){
		    	owl.trigger('prev.owl.carousel', [300]);
		    });

		    $('.left_hotel').click(function(){
		    	owl.trigger('prev.owl.carousel.a2', [300]);
		    });

		    $('.right_des').click(function(){
		    	owl.trigger('next.owl.carousel', [300]);
		    });

		    $('.right_hotel').click(function(){
		    	owl.trigger('next.owl.carousel#hotel_s', [300]);
		    });

	    });

		$('a[href*="#"]')
		  
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
		      
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		     
		      if (target.length) {
		        
		        event.preventDefault();
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1600, function() {
		          
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { 

		            return false;
		          } else {
		            $target.attr('tabindex','-1');

		            $target.focus(); 

		          };
		        });
		      }
		    }
		  });