// main.js


// When changed, slider bar moves
var slider = document.getElementById("volume-slider")
var volNum = document.getElementById("volume-number")
var audio = document.getElementById("horn-sound")
var image = document.getElementById("volume-image")
var airhorn = document.getElementById("radio-air-horn")
var carhorn = document.getElementById("radio-car-horn")
var partyhorn = document.getElementById("radio-party-horn")
var soundImage = document.getElementById("sound-image")
var honkButton = document.getElementById("honk-btn")

slider.oninput = function(){
    volNum.value = this.value;

    if ( this.value == 0 ) {
        image.src = "./assets/media/icons/volume-level-0.svg"
        honkButton.disabled = true;
    } 
    if ( this.value >= 1 && this.value <= 33 ){
        image.src = "./assets/media/icons/volume-level-1.svg"
    } 
    if ( this.value >= 34 && this.value <= 66 ){
        image.src = "./assets/media/icons/volume-level-2.svg"
    } 
    if ( this.value >= 67 && this.value <= 100 ){
        image.src = "./assets/media/icons/volume-level-3.svg"
    }
    audio.volume = this.value;
}

// When field changed, slider changes 
// TODO: doesn't change picture for half of them
volNum.oninput = function(){
    slider.value = this.value;

    // Change picture for audio levels
    if ( this.value == 0 ) {
        image.src = "./assets/media/icons/volume-level-0.svg"
        honkButton.disabled = true;
    } 
    if ( this.value >= 1 && this.value <= 33 ){
        image.src = "./assets/media/icons/volume-level-1.svg"
    } 
    if ( this.value >= 34 && this.value <= 66 ){
        image.src = "./assets/media/icons/volume-level-2.svg"
    } 
    if ( this.value >= 67 && this.value <= 100 ){
        image.src = "./assets/media/icons/volume-level-3.svg"
    }
    audio.volume = this.value;
}

// Radio that switches between diff horn sounds
airhorn.onchange = function(){
    if(airhorn.checked){
        soundImage.src = "./assets/media/images/air-horn.svg"
        audio.src = "./assets/media/audio/air-horn.mp3"
    }
}

carhorn.onchange = function(){
    if(carhorn.checked){
        soundImage.src = "./assets/media/images/car.svg"
        audio.src = "./assets/media/audio/car-horn.mp3"
    }
}

partyhorn.onchange = function(){
    if(partyhorn.checked){
        soundImage.src = "./assets/media/images/party-horn.svg"
        audio.src = "./assets/media/audio/party-horn.mp3"
    }
}

honkButton.onclick = function(){
    event.preventDefault()
    audio.volume = volNum.value * 0.01
    audio.play()
}




