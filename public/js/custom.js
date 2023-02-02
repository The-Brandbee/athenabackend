  // Header scroll class

  $(window).scroll(function() {

    if ($(this).scrollTop() > 0) {

      $('.header').addClass('header-scrolled');

    } else {

      $('.header').removeClass('header-scrolled');

    }

  });



  if ($(window).scrollTop() > 0) {

    $('.header').addClass('header-scrolled');

  }

  //Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
$("#yearslider").owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots:false,
			autoplay:true,
    		autoplayTimeout:3000,
    		autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  768:{
					items:1
			  },
			  900:{
				items:1
		  } 
			}

});

$("#pillarofantara").owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			dots:false,
			autoplay:false,
			mouseDrag: false,
  			touchDrag: false,
    		autoplayTimeout:3000,
    		autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 3,
			responsive:{
			  0:{
					items:1
			  },
			  768:{
				items:2
		  },
		  900:{
			items:3
	  } 
			}

});

$("#blogslider").owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots:false,
			autoplay:true,
    		autoplayTimeout:3000,
    		autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 2,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:2
			  }
			}

});
$("#testimonial").owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
	items : 3,
	responsive:{
	  0:{
			items:1
	  },
	  600:{
			items:1
	  }
	}

});

$("#wayoflife").owlCarousel({
	stagePadding: 50,
	loop:true,
	margin:10,
	nav:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
	items : 2,
	responsive:{
		0:{
			  items:1
		},
		768:{
			  items:2
		} 
	  }


});



$(document).ready(function() {
           
	$("#btn-increase").click(function () {
	 $(this).addClass('addactive');
	 $("#btn-orig").removeClass('addactive');
	 $("#btn-decrease").removeClass('addactive');
	   });
	 
	   $("#btn-decrease").click(function () {
		$(this).addClass('addactive');
		$("#btn-orig").removeClass('addactive');
		$("#btn-increase").removeClass('addactive');
	   });
	 
   });

var $affectedElements = $("p, h1, h2, h3, h4, h5, h6"); // Can be extended, ex. $("div, p, span.someClass")
   
// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});

var count = 0;

$("#btn-increase").click(function () {  
	if (count <= 1)
	{  
		//$(this).addClass('addactive'); 	$(this).removeClass('removeactive');
		changeFontSize(1);
		count++;
	}
	// else {
	// 	("max limit reached");
	// }
  
})

$("#btn-decrease").click(function () {
 
	if (count >= -1)
	{ 
	//	$(this).removeClass('removeactive');
	//	$(this).addClass('addactive'); 	$(this).addClass('addactive');
		changeFontSize(-1);
		count--;
	}
	// else {
	// 	alert("min limit reached");
	// }
	

})

$("#btn-orig").click(function () {
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
  });
	count = 0;
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
  }

  $(document).ready(function() {
	$("#toggle").click(function() {
	  var elem = $("#toggle").text();
	  if (elem == "Read More") {
		//Stuff to do when btn is in the read more state
		$("#toggle").text("Read Less");
		$("#text").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$("#toggle").text("Read More");
		$("#text").slideUp();
	  }
	});
  });
 
(function() {
  
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	  if (e.type=='show'){
		$(this).addClass('active');
	  }else{
		$(this).removeClass('active');
	  }
	});  
  
  }).call(this);

  
  AOS.init({

    easing: 'ease-out-back',

    duration: 1000

  });

  /*
  $(".enquirenowbtn").click(function () {
    $("html,body").animate(
      { 
        scrollTop: $(".getintouchform").offset().top,
      },
      "slow"
    );
  }); */