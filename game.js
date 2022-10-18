// Iteration 2: Generate 2 random number and display it on the screen
var numberHolder = (document.getElementsByClassName("number-holder"));
var number1 =(document.getElementById("number1"));
let numA = Math.floor(Math.random()*100);
var number2 =(document.getElementById("number2"));
let numB = Math.floor(Math.random()*100);
document.getElementById("number1").innerHTML=numA;
document.getElementById("number2").innerHTML=numB;
// Iteration 3: Make the options button functional
var greaterThan = document.getElementById('greater-than');
var equalTo = document.getElementById('equal-to');
var lesserThan= document.getElementById('lesser-than');
var score = 0;

greaterThan.onclick = ()=>{
    if(numA>numB){
        score++ ;
        resetTime(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    var number1 =(document.getElementById("number1"));
    numA = Math.floor(Math.random()*100);
    var number2 =(document.getElementById("number2"));
     numB = Math.floor(Math.random()*100);
    document.getElementById("number1").innerHTML=numA;
    document.getElementById("number2").innerHTML=numB;
};
lesserThan.onclick = ()=>{
    if(numA<numB){
        score++;
        resetTime(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    var number1 =(document.getElementById("number1"));
     numA = Math.floor(Math.random()*100);
     var number2 =(document.getElementById("number2"));
    numB = Math.floor(Math.random()*100);
    document.getElementById("number1").innerHTML=numA;
    document.getElementById("number2").innerHTML=numB;
};
equalTo.onclick = ()=>{
    if(numA===numB){
        score++;
        resetTime(timerId);
    }
    else{
        location.href='./gameover.html';
        }
        var number1 =(document.getElementById("number1"));
        numA = Math.floor(Math.random()*100);
        var number2 =(document.getElementById("number2"));
        numB = Math.floor(Math.random()*100);
        document.getElementById("number1").innerHTML=numA;
        document.getElementById("number2").innerHTML=numB;
};

// Iteration 4: Build a timer for the game
var time = 5;
var timer = document.getElementById('timer');
var timerId;
function startTimer(){
    time = 5;
    timer.innerHTML = time;
    timerId=setInterval(()=>{
        time--;
        if(time==0){
            location.href="./gameover.html";
            

        }
        timer.innerHTML=time;
    },1000);
    localStorage.setItem("score",score);
};
startTimer();
function resetTime(intervalId){
    
    clearInterval(intervalId);
    startTimer();
    
}