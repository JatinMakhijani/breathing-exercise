function startCountdown () {
    var timer= 4;
    var startTimer = setInterval(function(){
        timer = timer - 1;
        document.getElementsByClassName("breathing")[0].innerHTML = timer;

        if (timer == 1) {
            clearInterval(startTimer);
            document.getElementsByClassName("");
            // console.log("success");
            breathIn( );
        }

        }, 1000);
}
startCountdown();

function breathIn() {
    document.getElementsByClassName("breathing")[0].innerHTML = "Breath In";
    document.getElementsByClassName("main-circle-container")[0].classList.add('main-circle-container-large');

    // var test = document.getElementsByClassName("breathing");
    // console.log(test);
var startBreathing = setInterval(function(){
    document.getElementsByClassName("breathing")[0].innerHTML = "Hold";
    breathOut();
    clearInterval(startBreathing);
}, 6000);
}

function breathOut(){
    var holdBreath = setInterval(function(){
        document.getElementsByClassName("breathing")[0].innerHTML = "Breath Out";
        document.getElementsByClassName("main-circle-container")[0].classList.remove('main-circle-container-large');
    }, 3000);

}

function holdBreathing() {
    document.getElementsByClassName("main-circle-container")[0].classList.add('main-circle-container-large');
}


