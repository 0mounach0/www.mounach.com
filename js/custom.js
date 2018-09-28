   // hide navbar on scroll

$('document').ready(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        'use strict';
        
        if( $(window).scrollTop() < 100 )
        {
            $('.navbar-expand-lg').css({
               'margin-top':'-100px',
                'opacity':'0'
            });
            $('.navbar-expand-lg').css({
               'background-color': 'rgba(59, 59, 59, 0)' 
            });
            
            $('#btn-tgl').addClass('collapsed');
            $('#btn-tgl').attr('aria-expanded','false');
            $('#navbarTogglerMounach').removeClass('show');
            
        }else{
                $('.navbar-expand-lg').css({
                    'margin-top':'0px',
                    'opacity':'1'
                });
                $('.navbar-expand-lg').css({
               'background-color': 'rgba(59, 59, 59, .7)',
                    'border-color': '#444'
            });
            
        }
        
        
    });
    
     
});


//add smooth scrolling
$(document).ready(function() {
    
    'use strict';
   
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
});


//scrollUp hide
$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function(){
        'use strict';
        
        if( $(window).scrollTop() < 600 )
        {
            $('.scrollUp a').css({
                'margin-bottom': '-100px',
                'opacity':'0'
            });
            
        }else{
                $('.scrollUp a').css({
                    'margin-bottom': '0px',
                    'opacity':'1'
                });
        }
    });
});


// active menu item on click
$(document).ready(function() {
   
    'use strict';
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').removeClass('active');
        
        $(this).addClass('active');
        
        if( $(this).attr('id') != 'w1' && $(this).attr('id') != 'p1' ){
            
            $('#btn-tgl').addClass('collapsed');
            $('#btn-tgl').attr('aria-expanded','false');
            $('#navbarTogglerMounach').removeClass('show');
    
        }else {
            $('#w1').click(function(){
               $(this).popover('show'); 
                
            });
            $('#p1').click(function(){
               $(this).popover('show'); 
                
            });
        }
        
    });
    
});

//hightlight menu item on scroll
$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function(){
       
        'use strict';
        
        $('section').each(function(){
           
            'use strict';
            
            //-------
            $('#w1').removeClass('active');
            $('#p1').removeClass('active');
            
            $('#w1').popover('hide');
            $('#p1').popover('hide');
            
            var theId = $(this).attr('id');
            var hei = $(this).outerHeight();
            var grtTop = $(this).offset().top - 70;
            
            if( $(window).scrollTop() > grtTop && $(window).scrollTop() < ( grtTop + hei ) ) {
                
                $(".navbar-nav li a[href='#" + theId + "']").addClass('active');
            }else {
                
                $(".navbar-nav li a[href='#" + theId + "']").removeClass('active');
                
            }
            
            
        });
        
              // header exception
            if( $(window).scrollTop() < 510 ) {
            
            $('.navbar-nav li a[href="#home"]').addClass('active');
                
        }else {
            $('.navbar-nav li a[href="#home"]').removeClass('active');
        }
  
    });
    
    
});

//add auto padding to header

$(document).ready(function(){
    
    'use strict';
    
    setInterval(function(){
        
        var windowHeight = $(window).height();
        var containerHeight = $('.theContainer').height();
        var padtop = windowHeight - containerHeight;
    
        
        
    $('.theContainer').css({
       
        'padding-top': Math.round( padtop / 2 ) + 'px',
        'padding-bottom': Math.round( padtop / 2 ) + 'px'
        
    });
    
        
    },10);

});

   //popovers
   $(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});



//---------- contact ---------------
function _(id){ return document.getElementById(id); }
function submitForm(){
	_("mybtn").disabled = true;
	//_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "name", _("name").value );
	formdata.append( "email", _("email").value );
    formdata.append( "subject", _("subject").value );
	formdata.append( "message", _("message").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "contact.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				/*_("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';*/
			} else {
				/*_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;*/
			}
		}
	}
	ajax.send( formdata );
}

