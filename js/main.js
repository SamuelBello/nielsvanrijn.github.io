$(document).ready(function(){
    gradient3d();
});

function gradient3d() {
    $('div.card div').mousemove(function(e){
        var w = $(this).innerWidth();
        var h = $(this).innerHeight();

        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);

        yPercent = relativeY/h * 100;
        xPercent = relativeX/w * 100;

        var xDeg = -(0.2*xPercent)+10;
        var yDeg = (0.2*yPercent)-10;

        $(this).attr("style", "transform:perspective(300px) rotateX("+yDeg.toFixed(2)+"deg) rotateY("+xDeg.toFixed(2)+"deg) scale3d(1, 1, 1); -webkit-transform:perspective(300px) rotateX("+yDeg.toFixed(2)+"deg) rotateY("+xDeg.toFixed(2)+"deg) scale3d(1, 1, 1); -moz-transform:perspective(300px) rotateX("+yDeg.toFixed(2)+"deg) rotateY("+xDeg.toFixed(2)+"deg) scale3d(1, 1, 1); background: radial-gradient(150% 150% at "+xPercent+"% "+yPercent+"%, "+this.dataset.radcolor2+", "+this.dataset.radcolor1+");");
    });
    $('div.card div').mouseleave(function(){
        $(this).addClass('transition').attr("style", "transform: perspective(300px) rotateX(0deg) rotateY(0deg); background: radial-gradient(150% 150% at "+xPercent+"% "+yPercent+"%, "+this.dataset.radcolor2+", "+this.dataset.radcolor1+");").delay(400).queue(function(){
            $(this).removeClass('transition').dequeue();
        });
    });
    $('div.card div').mouseenter(function(){
        if($(this).css('background').includes('linear-gradient')){
            input = $(this).css('background').split(' ');
            console.log(input);
            $(this).attr('data-radcolor1', ''+input[5]+''+input[6]+''+input[7]);
            $(this).attr('data-radcolor2', ''+input[9]+''+input[10]+''+input[11]);
        };

        $(this).addClass('transition').delay(400).queue(function(){
            $(this).removeClass('transition').dequeue();
        });
    })
};