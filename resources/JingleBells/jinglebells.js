var colorArr = ['#800040', '#FF0000', '#008000', '#0000FF', '#000000', '#800080', '#FF8000'];
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        slideChange: function(){
            var i = parseInt(colorArr.length * Math.random());
            $('body').css('color', colorArr[i]);
        }
    }
});

$('.zx-flow').textillate({
    minDisplayTime: 5*1000,
    initialDelay: 1000
});

var trianglify = function(){
    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight
    });
    document.body.style.backgroundImage = 'url(' + pattern.png() + ')';
}

trianglify();
