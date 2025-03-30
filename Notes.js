function Sound(src) // the added sound for the sample music is from our lecture we had monday 
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() 
    {
        this.sound.play();
    }
    this.stop = function() 
    {
        this.sound.pause();
        this.sound.currentTime = 0; 
    }
}


let mySad = new Sound("Sound/Sample/an-explanation-sad-slow-piano-music-314450.mp3");
let myEmotional = new Sound("Sound/Sample/emotional-piano-music-256262.mp3");
let myRelaxing = new Sound("Sound/Sample/relaxing-piano-music-259727.mp3");

// added a play and stop button for each of the piano samples
function play(audio) 
{
    
    audio.play();

    
    document.getElementById("play").disabled = true;
    document.getElementById("play1").disabled = true;
    document.getElementById("play2").disabled = true;

    
    document.getElementById("stop").disabled = false;
    document.getElementById("stop1").disabled = false;
    document.getElementById("stop2").disabled = false;
}


function stop(audio) 
{
    
    audio.stop();

    
    document.getElementById("play").disabled = false;
    document.getElementById("play1").disabled = false;
    document.getElementById("play2").disabled = false;

    
    document.getElementById("stop").disabled = true;
    document.getElementById("stop1").disabled = true;
    document.getElementById("stop2").disabled = true;
}
    
    function playNote(note)
    {
    const notes = // Sadly due to the sound having a reverb affect on each note hitting to many keys in a fast succession can cause audio to distort only solution would be to edit each note in an audio program 
    {   // Added 88 piano notes had to look up each note to make sure it was in the correct location on the piano itself
        "A0": new Audio("Sound/Pianonotes/A0.ogg"),
        "As0": new Audio("Sound/Pianonotes/As0.ogg"),
        "B0": new Audio("Sound/Pianonotes/B0.ogg"),
        "C1": new Audio("Sound/Pianonotes/C1.ogg"),
        "Cs1": new Audio("Sound/Pianonotes/Cs1.ogg"),
        "D1": new Audio("Sound/Pianonotes/D1.ogg"),
        "Ds1": new Audio("Sound/Pianonotes/Ds1.ogg"),
        "E1": new Audio("Sound/Pianonotes/E1.ogg"),
        "F1": new Audio("Sound/Pianonotes/F1.ogg"),
        "Fs1": new Audio("Sound/Pianonotes/Fs1.ogg"),
        "G1": new Audio("Sound/Pianonotes/G1.ogg"),
        "Gs1": new Audio("Sound/Pianonotes/Gs1.ogg"),
        "A1": new Audio("Sound/Pianonotes/A1.ogg"),
        "As1": new Audio("Sound/Pianonotes/As1.ogg"),
        "B1": new Audio("Sound/Pianonotes/B1.ogg"),
        "C2": new Audio("Sound/Pianonotes/C2.ogg"),
        "Cs2": new Audio("Sound/Pianonotes/C#2.ogg"),
        "D2": new Audio("Sound/Pianonotes/D2.ogg"),
        "Ds2": new Audio("Sound/Pianonotes/Ds2.ogg"),
        "E2": new Audio("Sound/Pianonotes/E2.ogg"),
        "F2": new Audio("Sound/Pianonotes/F2.ogg"),
        "Fs2": new Audio("Sound/Pianonotes/Fs2.ogg"),
        "G2": new Audio("Sound/Pianonotes/G2.ogg"),
        "Gs2": new Audio("Sound/Pianonotes/Gs2.ogg"),
        "A2": new Audio("Sound/Pianonotes/A2.ogg"),
        "As2": new Audio("Sound/Pianonotes/As2.ogg"),
        "B2": new Audio("Sound/Pianonotes/B2.ogg"),
        "C3": new Audio("Sound/Pianonotes/C3.ogg"),
        "Cs3": new Audio("Sound/Pianonotes/Cs3.ogg"),
        "D3": new Audio("Sound/Pianonotes/D3.ogg"),
        "Ds3": new Audio("Sound/Pianonotes/Ds3.ogg"),
        "E3": new Audio("Sound/Pianonotes/E3.ogg"),
        "F3": new Audio("Sound/Pianonotes/F3.ogg"),
        "Fs3": new Audio("Sound/Pianonotes/Fs3.ogg"),
        "G3": new Audio("Sound/Pianonotes/G3.ogg"),
        "Gs3": new Audio("Sound/Pianonotes/Gs3.ogg"),
        "A3": new Audio("Sound/Pianonotes/A3.ogg"),
        "As3": new Audio("Sound/Pianonotes/As3.ogg"),
        "B3": new Audio("Sound/Pianonotes/B3.ogg"),
        "C4": new Audio("Sound/Pianonotes/C4.ogg"),
        "Cs4": new Audio("Sound/Pianonotes/Cs4.ogg"),
        "D4": new Audio("Sound/Pianonotes/D4.ogg"),
        "Ds4": new Audio("Sound/Pianonotes/Ds4.ogg"),
        "E4": new Audio("Sound/Pianonotes/E4.ogg"),
        "F4": new Audio("Sound/Pianonotes/F4.ogg"),
        "Fs4": new Audio("Sound/Pianonotes/Fs4.ogg"),
        "G4": new Audio("Sound/Pianonotes/G4.ogg"),
        "Gs4": new Audio("Sound/Pianonotes/Gs4.ogg"),
        "A4": new Audio("Sound/Pianonotes/A4.ogg"),
        "As4": new Audio("Sound/Pianonotes/As4.ogg"),
        "B4": new Audio("Sound/Pianonotes/B4.ogg"),
        "C5": new Audio("Sound/Pianonotes/C5.ogg"),
        "Cs5": new Audio("Sound/Pianonotes/Cs5.ogg"),
        "D5": new Audio("Sound/Pianonotes/D5.ogg"),
        "Ds5": new Audio("Sound/Pianonotes/Ds5.ogg"),
        "E5": new Audio("Sound/Pianonotes/E5.ogg"),
        "F5": new Audio("Sound/Pianonotes/F5.ogg"),
        "Fs5": new Audio("Sound/Pianonotes/Fs5.ogg"),
        "G5": new Audio("Sound/Pianonotes/G5.ogg"),
        "Gs5": new Audio("Sound/Pianonotes/Gs5.ogg"),
        "A5": new Audio("Sound/Pianonotes/A5.ogg"),
        "As5": new Audio("Sound/Pianonotes/As5.ogg"),
        "B5": new Audio("Sound/Pianonotes/B5.ogg"),
        "C6": new Audio("Sound/Pianonotes/C6.ogg"),
        "Cs6": new Audio("Sound/Pianonotes/Cs6.ogg"),
        "D6": new Audio("Sound/Pianonotes/D6.ogg"),
        "Ds6": new Audio("Sound/Pianonotes/Ds6.ogg"),
        "E6": new Audio("Sound/Pianonotes/E6.ogg"),
        "F6": new Audio("Sound/Pianonotes/F6.ogg"),
        "Fs6": new Audio("Sound/Pianonotes/Fs6.ogg"),
        "G6": new Audio("Sound/Pianonotes/G6.ogg"),
        "Gs6": new Audio("Sound/Pianonotes/Gs6.ogg"),
        "A6": new Audio("Sound/Pianonotes/A6.ogg"),
        "As6": new Audio("Sound/Pianonotes/As6.ogg"),
        "B6": new Audio("Sound/Pianonotes/B6.ogg"),
        "C7": new Audio("Sound/Pianonotes/C7.ogg"),
        "Cs7": new Audio("Sound/Pianonotes/Cs7.ogg"),
        "D7": new Audio("Sound/Pianonotes/D7.ogg"),
        "Ds7": new Audio("Sound/Pianonotes/Ds7.ogg"),
        "E7": new Audio("SoundPianonotes/E7.ogg"),
        "F7": new Audio("Sound/Pianonotes/F7.ogg"),
        "Fs7": new Audio("Sound/Pianonotes/Fs7.ogg"),
        "G7": new Audio("Sound/Pianonotes/G7.ogg"),
        "Gs7": new Audio("Sound/Pianonotes/Gs7.ogg"),
        "A7": new Audio("Sound/Pianonotes/A7.ogg"),
        "As7": new Audio("Sound/Pianonotes/As7.ogg"),
        "B7": new Audio("Sound/Pianonotes/B7.ogg"),
        "C8": new Audio("Sound/Pianonotes/C8.ogg")
    };

    if (notes[note]) 
        {
        notes[note].currentTime = 0;
        notes[note].play();
        }
}
