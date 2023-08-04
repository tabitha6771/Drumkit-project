//Variables for the background image elements
const boomImage = document.getElementById("boomImage");
const clapImage = document.getElementById("clapImage");
const hihatImage = document.getElementById("hihatImage");
const kickImage = document.getElementById("kickImage");
const openhatImage = document.getElementById("openhatImage");
const rideImage = document.getElementById("rideImage");
const snareImage = document.getElementById("snareImage");
const tinkImage = document.getElementById("tinkImage");
const tomImage = document.getElementById("tomImage");

//Variables for audio source
const boomAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/boom.wav");
const clapAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/clap.wav");
const hihatAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/hihat.wav");
const kickAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/kick.wav");
const openhatAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/openhat.wav");
const rideAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/ride.wav");
const snareAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/snare.wav");
const tinkAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/tink.wav");
const tomAudio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/tom.wav");

//Variables for divs containing images
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

//Variables for divs containing key reference
const boomReference = document.getElementById("boomReference");
const clapReference = document.getElementById("clapReference");
const hihatReference = document.getElementById("hihatReference");
const kickReference = document.getElementById("kickReference");
const openhatReference = document.getElementById("openhatReference");
const rideReference = document.getElementById("rideReference");
const snareReference = document.getElementById("snareReference");
const tinkReference = document.getElementById("tinkReference");
const tomReference = document.getElementById("tomReference");

//Events to play audio on click
boomImage.addEventListener("click", () => {
    boomAudio.play();
})
clapImage.addEventListener("click", () => {
    clapAudio.play();
})
hihatImage.addEventListener("click", () => {
    hihatAudio.play();
})
kickImage.addEventListener("click", () => {
    kickAudio.play();
})
openhatImage.addEventListener("click", () => {
    openhatAudio.play();
})
rideImage.addEventListener("click", () => {
    rideAudio.play();
})
snareImage.addEventListener("click", () => {
    snareAudio.play();
})
tinkImage.addEventListener("click", () => {
    tinkAudio.play();
})
tomImage.addEventListener("click", () => {
    tomAudio.play();
})

//Events to play audio on click
boomReference.addEventListener("click", () => {
    boomAudio.play();
})
clapReference.addEventListener("click", () => {
    clapAudio.play();
})
hihatReference.addEventListener("click", () => {
    hihatAudio.play();
})
kickReference.addEventListener("click", () => {
    kickAudio.play();
})
openhatReference.addEventListener("click", () => {
    openhatAudio.play();
})
rideReference.addEventListener("click", () => {
    rideAudio.play();
})
snareReference.addEventListener("click", () => {
    snareAudio.play();
})
tinkReference.addEventListener("click", () => {
    tinkAudio.play();
})
tomReference.addEventListener("click", () => {
    tomAudio.play();
})

//Events to play audio on Key press
document.addEventListener("keydown", () => {
    if (event.keyCode == 65) {
        boomAudio.play();
        boom.style.boxShadow = "5px 5px 5px 5px #8a2be2";
        boomReference.style.boxShadow = "5px 5px 5px 5px #8a2be2";
    } else if (event.keyCode == 83) {
        clapAudio.play();
        clap.style.boxShadow = "5px 5px 5px 5px orangered";
        clapReference.style.boxShadow = "5px 5px 5px 5px orangered";
    } else if (event.keyCode == 68) {
        hihatAudio.play();
        hihat.style.boxShadow = "5px 5px 5px 5px greenyellow";
        hihatReference.style.boxShadow = "5px 5px 5px 5px greenyellow";
    } else if (event.keyCode == 70) {
        kickAudio.play();
        kick.style.boxShadow = "5px 5px 5px 5px rgb(37, 121, 116)";
        kickReference.style.boxShadow = "5px 5px 5px 5px rgb(37, 121, 116)";
    } else if (event.keyCode == 71) {
        openhatAudio.play();
        openhat.style.boxShadow = "5px 5px 5px 5px rgb(226, 198, 43)";
        openhatReference.style.boxShadow = "5px 5px 5px 5px rgb(226, 198, 43)";
    } else if (event.keyCode == 72) {
        rideAudio.play();
        ride.style.boxShadow = "5px 5px 5px 5px rgb(226, 43, 83)";
        rideReference.style.boxShadow = "5px 5px 5px 5px rgb(226, 43, 83)";
    } else if (event.keyCode == 74) {
        snareAudio.play();
        snare.style.boxShadow = "5px 5px 5px 5px rgb(43, 101, 226)";
        snareReference.style.boxShadow = "5px 5px 5px 5px rgb(43, 101, 226)";
    } else if (event.keyCode == 75) {
        tinkAudio.play();
        tink.style.boxShadow = "5px 5px 5px 5px rgb(43, 112, 26)";
        tinkReference.style.boxShadow = "5px 5px 5px 5px rgb(43, 112, 26)";
    } else if (event.keyCode == 76) {
        tomAudio.play();
        tom.style.boxShadow = "5px 5px 5px 5px rgb(39, 25, 90)";
        tomReference.style.boxShadow = "5px 5px 5px 5px rgb(39, 25, 90)";
    }
})

//Events to remove effect on releasing key
document.addEventListener("keyup", () => {
    if (event.keyCode == 65) {
        boom.style.boxShadow = "0px 0px 0px 0px";
        boomReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 83) {
        clapAudio.play();
        clap.style.boxShadow = "0px 0px 0px 0px";
        clapReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 68) {
        hihatAudio.play();
        hihat.style.boxShadow = "0px 0px 0px 0px";
        hihatReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 70) {
        kickAudio.play();
        kick.style.boxShadow = "0px 0px 0px 0px";
        kickReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 71) {
        openhatAudio.play();
        openhat.style.boxShadow = "0px 0px 0px 0px";
        openhatReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 72) {
        rideAudio.play();
        ride.style.boxShadow = "0px 0px 0px 0px";
        rideReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 74) {
        snareAudio.play();
        snare.style.boxShadow = "0px 0px 0px 0px";
        snareReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 75) {
        tinkAudio.play();
        tink.style.boxShadow = "0px 0px 0px 0px";
        tinkReference.style.boxShadow = "0px 0px 0px 0px";
    } else if (event.keyCode == 76) {
        tomAudio.play();
        tom.style.boxShadow = "0px 0px 0px 0px";
        tomReference.style.boxShadow = "0px 0px 0px 0px";
    }
})



