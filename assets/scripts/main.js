// main.js
let volImg;
let volSlider;
let volText;
let audio;
let soundImage;
let rah;
let rch;
let rph;
let honkButton;

window.onload = () => {
    volImg = document.getElementById("volume-image");
    volSlider = document.getElementById("volume-slider");
    audio = document.getElementById("horn-sound");
    soundImage = document.getElementById("sound-image");
    rah = document.getElementById("radio-air-horn");
    rch = document.getElementById("radio-car-horn");
    rph = document.getElementById("radio-party-horn");
    volText = document.getElementById("volume-number");
    honkButton = document.getElementById("honk-btn");

    honkButton.addEventListener("click",(e)=>{
        e.preventDefault();
        audio.play();
    });
    volSlider.addEventListener("input", volEvent);
    volText.addEventListener("input", volEvent);
    rah.addEventListener("change", changeType);
    rch.addEventListener("change", changeType);
    rph.addEventListener("change", changeType);
}

function changeType(e){
    if (e.target.id == "radio-air-horn"){
        soundImage.src = "./assets/media/images/air-horn.svg";
        soundImage.alt = "Air Horn";
        audio.src = "./assets/media/audio/air-horn.mp3";
    }
    if (e.target.id == "radio-car-horn"){
        soundImage.src = "./assets/media/images/car.svg";
        soundImage.alt = "Car Horn";
        audio.src = "./assets/media/audio/car-horn.mp3";
    }
    if (e.target.id == "radio-party-horn"){
        soundImage.src = "./assets/media/images/party-horn.svg";
        soundImage.alt = "Party Horn";
        audio.src = "./assets/media/audio/party-horn.mp3";
    }
}

function volEvent(e) {
    updateVol(e.target.value);
}

function updateVol(newVal){
    volSlider.value = newVal;
    volText.value = newVal;
    honkButton.disabled = newVal == 0 ? true : false;
    audio.volume = newVal/100;
    if (newVal >= 67){
        volImg.src = "./assets/media/icons/volume-level-3.svg"
    }else if(newVal >= 34){
        volImg.src = "./assets/media/icons/volume-level-2.svg"
    }else if(newVal >= 1){
        volImg.src = "./assets/media/icons/volume-level-1.svg"
    }else {
        volImg.src = "./assets/media/icons/volume-level-0.svg"
    }
}