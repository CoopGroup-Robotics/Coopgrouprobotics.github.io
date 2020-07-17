jQuery(document).ready(function($){

    // Smooth on external page
    $(function() {
      setTimeout(function() {
        if (location.hash) {
          /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
          window.scrollTo(0, 0);
          target = location.hash.split('#');
          smoothScrollTo($('#'+target[1]));
        }
      }, 1);

      // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          smoothScrollTo($(this.hash));
          return false;
        }
      });

      function smoothScrollTo(target) {
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
	
	
	// toggle comments
    $('.show-comments').on('click', function() {  
		$('#comments').toggleClass('comments--show');		
	});

	//toggle search
	$('.show-search').on('click', function() {  
		$('.bd-search').toggleClass('search--show');		
	});
    
    // spoilers
     $(document).on('click', '.spoiler', function() {
        $(this).removeClass('spoiler');
     });
    
 });   

// deferred style loading
var loadDeferredStyles = function () {
	var addStylesNode = document.getElementById("deferred-styles");
	var replacement = document.createElement("div");
	replacement.innerHTML = addStylesNode.textContent;
	document.body.appendChild(replacement);
	addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
if (raf) raf(function () {
	window.setTimeout(loadDeferredStyles, 0);
});
else window.addEventListener('load', loadDeferredStyles);


// Reset animations on page: body.preload
setTimeout(function(){
	document.body.className="";
},500);

// Open/close navigation when clicked .nav-icon
$(document).ready(function(){
	$('.nav-icon').click(function(){
		$('.nav-icon').toggleClass('active');
	});
	$(".nav-icon").click(function(){
		$("#menu").toggleClass('active');
	});
	$(".nav-icon").click(function(){
		$("#blackover-nav").toggleClass('active');
	});
	$(".nav-icon").click(function(){
		$("body").toggleClass('active-side');
	});
});

// Close navigation when clicked .blackover (Black background)
$(document).ready(function(){
	$("#blackover-nav").click(function(){
		$(".nav-icon").removeClass('active');
	});
	$("#blackover-nav").click(function(){
		$("#menu").removeClass('active');
	});
	$("#blackover-nav").click(function(){
		$("#blackover-nav").removeClass('active');
	});
	$("#blackover-nav").click(function(){
		$("body").removeClass('active-side');
	});
});

// Grid selector Inspiration
$(document).ready(function(){
	$(".grid-selector").click(function(){
		$(".grid-selector").toggleClass('active');
	});
	$(".grid-selector").click(function(){
		$(".post").toggleClass('active');
	});
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) { 
		$(".nav-icon").removeClass('active');
		$("#menu").removeClass('active');
		$("#blackover-nav").removeClass('active');
		$("body").removeClass('active-side');
	}
});


// remove all :hover stylesheets on mobile
function hasTouch() {
return 'ontouchstart' in document.documentElement
		|| navigator.maxTouchPoints > 0
		|| navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { 
	try {
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;

				if (styleSheet.rules[ri].selectorText.match(':hover')) {
					styleSheet.deleteRule(ri);
				}
			}
		}
	} catch (ex) {}
}


$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });

    //Click event to scroll to top
    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });

});


// DOCS

$(document).ready(function(){
    

     //Check to see if the back-menu is in the div
    $(window).scroll(function(){
        if ($(this).scrollTop() > 130) {
            $('.back-page-button-dark').removeClass('back-page-button-w');
        } else {
            $('.back-page-button-dark').addClass('back-page-button-w');
        }
    });


});

// Social Icons
var selected = null;
$(".icon").click(function() {
  var tempSelected = null;
  if (selected != null) {
    tempSelected = selected;
  }
  selected = $(this);
  $(this).find(".background_circle").css({ display: "block", opacity: "1" });

  var color = $(this).find(".background_circle").css("backgroundColor");
  console.log(color);
  var tl = new TimelineMax();
  tl
    .to($(this).find(".background_circle"), 3, {
      scale: 100,
      transformOrigin: "50% 50%",
      ease: Linear.easeIn
    })
    .to(
      $("body"),
      0,
      {
        backgroundColor: color
      },
      "-=2"
    );

  if (
    tempSelected !== null &&
    $(this).attr("class") !== tempSelected.attr("class")
  ) {
    TweenMax.to(
      tempSelected.find(".background_circle"),
      0,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "50% 50%",
        ease: Linear.easeIn
      },
      "-=3"
    );
  }
});

// Hamburger
window.onload = function() {
  document.getElementById("hamburger").addEventListener('click', nav);
}
function nav() {
  if (!document.getElementById('hamburger').checked) {
    document.getElementById("ham").style.height = "100%";
    document.body.classList.add("open");
  } else {
    document.getElementById("ham").style.height = "0%";
    document.body.classList.remove("open");
  }
}
// Typewriter
 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };
 var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
