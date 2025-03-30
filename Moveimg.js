// variables to control the movement of our pong and our paddles images
let intervalId;  
let memeImage = document.getElementById("pong");
let upDownImage1 = document.getElementById("paddle1");  
let upDownImage2 = document.getElementById("paddle2"); 
// This is horizontal movement for the pong ball
let goingRight = true; 
let currentX = 0;
// This is movement for the paddles going up and down
let goingDown1 = true; 
let goingDown2 = true; 
let currentY1 = 2; 
let currentY2 = 2; 


// Function to enable/disable the buttons
function toggleButtons(startStatus, stopStatus) 
{
   
    document.getElementById("startButton").disabled = startStatus;
    document.getElementById("stopButton").disabled = stopStatus;
}

// Function to start moving the pong image back and forth
function startMovement() 
{
    
    toggleButtons(true, false);

    
    intervalId = setInterval(moveImage, 5);
}

// Function to stop the pong image movement
function stopMovement() 
{
    
    toggleButtons(false, true);

   
    clearInterval(intervalId);
}

// Created a if/else for the image to go left and right
function moveImage() 
{
    
    if (goingRight) 
        {
        currentX += 2;  
        if (currentX >= 900) 
            { 
              goingRight = false; 
            }
    } 
    else 
    {
       
        currentX -= 2;  
        if (currentX <= 0) 
            { 
              goingRight = true; 
            }
    }

    
    memeImage.style.left = currentX + 'px';

// Move paddle1 up and down and the speed is little slower
if (goingDown1) 
    {
    currentY1 += 2;  
    if (currentY1 >= 400) 
        { 
          goingDown1 = false; 
        }
} 
else 
{
    currentY1 -= 2;  
    if (currentY1 <= 0) 
        { 
          goingDown1 = true; 
        }
}
upDownImage1.style.top = currentY1 + 'px'; 

// Move paddle2 up and down and the speed is little faster
if (goingDown2) 
    {
    currentY2 += 2;  
    if (currentY2 >= 600) 
        { 
          goingDown2 = false; 
        }
} 
else 
{
    currentY2 -= 4;  
    if (currentY2 <= 0) 
        { 
           goingDown2 = true; 
        }
}
upDownImage2.style.top = currentY2 + 'px'; 
  
}

function Sound(src) 
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


let game = new Sound("Sound/Ponggame.mp3");


// added a play and stop button for the game music
function play(audio) 
{
    
    audio.play();

    
    document.getElementById("play").disabled = true;
   
    document.getElementById("stop").disabled = false;
   
}


function stop(audio) 
{
    
    audio.stop();
   
    document.getElementById("play").disabled = false;

    document.getElementById("stop").disabled = true;
   
}
