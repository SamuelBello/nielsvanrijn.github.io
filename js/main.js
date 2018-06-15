document.addEventListener("DOMContentLoaded", function() {
    parralax();
    window.onscroll = function() {
        parralax();
    };
});

function parralax(){
    var result = Math.floor(document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight) * 100);

    var backgroundValue = "center "+(0.4*result+30)+"%"

    document.querySelectorAll('.img').forEach(function(elem) {
        elem.style.backgroundPosition = backgroundValue;
    });
}