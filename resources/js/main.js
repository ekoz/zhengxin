$(document).ready( function() {


    $('#btnStudy').click(function(){
        window.open('http://www.lmacc.com/zxkj_login.html', '_blank');
    });

    $('#btnSend').on('click', function(){
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var subject = $('#contact-subject').val();
        var content = $('#contact-message').val();

        if (name==''){
            $('#contact-name').focus();
            return false;
        }
        if (email=='') {
            $('#contact-email').focus();
            return false;
        }
        if (subject=='') {
            $('#contact-subject').focus();
            return false;
        }
        if (content=='') {
            $('#contact-message').focus();
            return false;
        }

        $(this).after('<a id="sendMail" href="javascript:void(0);"></a>');
        $('#sendMail').click(function(){
            content += ' <br/> from ' + email;
            window.open('mailto:3410247727@qq.com?subject=' + subject + '&body=' + content, '_self');
            return false;
        });
        window.setTimeout(function(){
            $('#sendMail').click();
            window.setTimeout(function(){
                $('#sendMail').remove();
            }, 1000);
        }, 300);

    });

	/*----------------------/
	/* NAVIGATION
	/*---------------------*/

	$(window).scroll(function() {
		if($(document).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('navbar-solid-color');
		}else {
			$('.navbar-fixed-top').removeClass('navbar-solid-color');
		}
	});

	// scrollspy
	$('body').scrollspy({ target: '#main-navbar', offset: 120});

	// onepage scroll links
	$('.nav-onepage, .onepage-links').localScroll({
		duration: 500,
		offset:  - $('.navbar-fixed-top').height()
	});

	// hide collapsible menu once menu item clicked 
	$('.nav-onepage li a').click( function() {
		var navbarCollapse = $(this).parents('.navbar-collapse.collapse');

		if(navbarCollapse.hasClass('in')) {
			navbarCollapse.collapse('hide');
		}
	});


	/*----------------------/
	/* TESTIMONIAL
	/*---------------------*/

	$('#testimonial-big-carousel').owlCarousel({
		singleItem: true,
		autoPlay: 3000,
		transitionStyle: 'fadeUp'
	});

});