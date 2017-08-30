//$('#btnSend').after('<a id="btnSend1" href="javascript:void(0);" class="btn btn-primary">发送1</a>');
//$('#btnSend1').click(function(){
//    alert(2);
//});
//$('#btnSend1').click();

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