document.getElementById('myVideo').addEventListener('click', function() {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});

/*for realizing the function of play and pause*/