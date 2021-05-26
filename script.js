var a = 0;
a++
var b = 3;
var count =1;

b--;
var hinted = 0;
var score = 0;
var Minutes=0;
var correct = [];
var correctAll=[1,2,3]
var scoreboard={
    name:'',
    finalscore:''
}
var start=0

function nextLevel(){
    clearInterval(start)
    a=1;
    hinted =0;
    correct = [];
    hintbtn.style.display="block"
    level.innerHTML=count
   var board= document.getElementById('board001')
  board.innerHTML=`  <button class="hide001" onclick="incorrect001()">
  <img src="images/image${count}.jpg" height="300" />  
</button>
<div class="block0${count}1
">
  <div id="disappear0${count}1">
      <button class="button0${count}1" onclick="correct001()"></button>
  </div>
</div>
<div class="block0${count}2">
  <div id="disappear0${count}2">
      <button class="button0${count}2" onclick="correct002()"></button>
  </div>
</div>
<div class="block0${count}3">
  <div id="disappear0${count}3">
      <button class="button0${count}3" onclick="correct003()"></button>
  </div>` 
   if(count>3){
       correctAll=[1,2,3,4]
       var block = document.createElement('div')
       block.innerHTML=`<div id="disappear0${count}4">
       <button class="button0${count}4" onclick="correct004()"></button>
   </div>`
   block.classList.add('block0'+count+'4')
       board.appendChild(block)
        Minutes = 40 * 1,
       display = document.querySelector('#time');
    startTimer(Minutes, display);
    score002.innerHTML="/4"
   }else if(count>1 && count<4){
    Minutes = 30 * 1,
    display = document.querySelector('#time');
    startTimer(Minutes, display)
   }
   if(count===10){
    correctAll=[1,2,3,4,5,6]
    score002.innerHTML="/6"
    var block = document.createElement('div')
    block.innerHTML=`<div id="disappear0${count}5">
    <button class="button0${count}5" onclick="correct005()"></button>
</div>`
block.classList.add('block0'+count+'5')
var block2 = document.createElement('div')
    block2.innerHTML=`<div id="disappear0${count}6">
    <button class="button0${count}6" onclick="correct006()"></button>
</div>`
block2.classList.add('block0'+count+'6')
    board.appendChild(block)
    board.appendChild(block2)
     Minutes = 60 * 1,
    display = document.querySelector('#time');
 startTimer(Minutes, display);
}
   message001.innerHTML = "";
   message002.innerHTML = "";
   score001.innerHTML=0
}
function correct001() {
    correct.push(1)
   d=document.getElementById('disappear0'+count+'1')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if(count >=4 && count <10){
        if (a > 4) {
            count++
            score ++
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }else if(count ===10) {
        if (a > 6) {
            
            message001.innerHTML = "Congratulations. You won.";
            
            
        }
       
    }
    else{
        if (a > 3) {
            count++
            score ++
            scorediv.innerHTML=score
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }
}

function correct002() {
    correct.push(2)
    d=document.getElementById('disappear0'+count+'2')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if(count >=4 && count <10){
        if (a > 4) {
            count++
            score ++
            scorediv.innerHTML=score
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }else if(count ===10) {
        if (a > 6) {
            message001.innerHTML = "Congratulations. You won."; 
        }
       
    }
    else{
        if (a > 3) {
            count++
            score ++
            scorediv.innerHTML=score
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }
}

function correct003() {
    correct.push(3)
    d=document.getElementById('disappear0'+count+'3')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if(count >=4 && count <10){
        if (a > 4) {
            count++
            score ++
            scorediv.innerHTML=score
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }else if(count ===10) {
        if (a > 6) {
            
            message001.innerHTML = "Congratulations. You won.";    
        }
       
    }
    else{
        if (a > 3) {
            count++
            score ++
            scorediv.innerHTML=score
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }
   
}
function correct004() {
    d=document.getElementById('disappear0'+count+'4')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if (a > 4) {
        count++
        score ++
        scorediv.innerHTML=score
        message001.innerHTML = "Congratulations. You found all of them.";
        message002.innerHTML = "<button class=blue001 onclick=nextLevel(count)>Next Level</button>";
        console.log(a);
    }else if(a>6){
        message001.innerHTML = "Congratulations. You won.";
    }
   
}
function correct005() {
    d=document.getElementById('disappear0'+count+'5')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if (a > 4) {
        count++
        score ++
        scorediv.innerHTML=score
        message001.innerHTML = "Congratulations. You found all of them.";
        message002.innerHTML = "<button class=blue001 onclick=nextLevel(count)>Next Level</button>";
        console.log(a);
    }else if(a>6){
        message001.innerHTML = "Congratulations. You won.";
    }
   
}
function correct006() {
    d=document.getElementById('disappear0'+count+'6')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if(a>6){
        message001.innerHTML = "Congratulations. You won.";
        scoreboard.finalscore=score
    }
   
}
function incorrect001() {
   
   
}
function hint() {
   
    if (correct.length ===0){
        const num = correctAll[Math.floor(Math.random() * correctAll.length)];
        window['correct00' + num]();
        
    }else{
        var difference = correctAll.filter(x => correct.indexOf(x) === -1);
        const rand = difference[Math.floor(Math.random() * difference.length)];
        window['correct00' + rand]();
    }
    hinted++
    if (hinted === 1){
        
        hintbtn.style.display="none"
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
     function time () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        
        if (--timer < 0) {
            timer = duration;
            
        }
        
        if(seconds == 00 && count <10){
            count++
            nextLevel(count)
        
        }
    }
    
   start= setInterval(time, 1000);
    
}
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  Minutes = 30 * 1,
           display = document.querySelector('#time');
           startTimer(Minutes, display)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    Minutes = 30 * 1,
           display = document.querySelector('#time');
           startTimer(Minutes, display)
  }}
  function getname(){
    var x = document.getElementById("name").value;
            scoreboard.name=x
            
           
           player.innerHTML = x;
           modal.style.display = "none";
           Minutes = 30 * 1,
           display = document.querySelector('#time');
           startTimer(Minutes, display)
}
localStorage.setItem("PlayerNames",scoreboard.name );