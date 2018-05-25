document.addEventListener("DOMContentLoaded", function() {
    parralax();
});

function parralax(){
    window.onscroll = function() {
        var result = Math.floor(document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight) * 100);
        // console.log(result);

        // console.log(result, 0.2*result+40);

        var backgroundValue = "center "+(0.4*result+30)+"%"

        document.querySelectorAll('.img').forEach(function(elem) {
            // console.log(getComputedStyle(elem).background);
            elem.style.backgroundPosition = backgroundValue;
        });

    };
}