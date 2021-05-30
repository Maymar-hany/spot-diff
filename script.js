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
var playerName="";
var time =0;
var timer= 0;
            var sec = 0;
            var minutes =0;
            var seconds = 0;
var start=0
var won = document.getElementById('level-up')
var audio = document.getElementById('buzzer')
function pad ( val ) { return val > 9 ? val : "0" + val; }


function nextLevel(){
    
    a=1;
    hinted =0;
    correct = [];
    hintbtn.style.display="block"
    level.innerHTML=count
    ten001.innerHTML="/10"
   var board= document.getElementById('board001')
  board.innerHTML=`  <button class="hide001" onclick="incorrect001()">
  <img id="puzzleImg" src="images/image${count}.jpg" height="300px" />  
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
       score002.innerHTML="/4"
       var block = document.createElement('div')
       block.innerHTML=`<div id="disappear0${count}4">
       <button class="button0${count}4" onclick="correct004()"></button>
   </div>`
   block.classList.add('block0'+count+'4')
       board.appendChild(block)
        Minutes = 40 * 1,
       display = document.querySelector('#time');
   
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
    audio.play();
    if(count >=4 && count <10){
        if (a > 4) {
            won.play()
            count++
            score ++
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }else if(count ===10) {
        if (a > 6) {
            won.play()
            score ++
            scoreboard.finalscore=score
            finalmodal.style.display='block'
            Minutes = minutes.concat(':')
            time = Minutes.concat(seconds)
            
            clearInterval(timer)
            sendScore()
           
            
        }
       
    }
    else{
        if (a > 3) {
            won.play()
            count++
            score ++
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
    audio.play();
    if(count >=4 && count <10){
        if (a > 4) {
            won.play()
            count++
            score ++
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }else if(count ===10) {
        if (a > 6) {
            won.play() 
            score ++
            scoreboard.finalscore=score
            finalmodal.style.display='block'
            Minutes = minutes.concat(':')
            time = Minutes.concat(seconds)
            clearInterval(timer)
            sendScore()
            
        }
       
    }
    else{
        if (a > 3) {
            won.play()
            count++
            score ++
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }
}

function correct003() {
    audio.play();
    correct.push(3)
    d=document.getElementById('disappear0'+count+'3')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    if(count >=4 && count <10){
        if (a > 4) {
            won.play()
            count++
            score ++
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }else if(count ===10) {
        if (a > 6) {
            won.play()
            score ++
            scoreboard.finalscore=score
            finalmodal.style.display='block'   
            Minutes = minutes.concat(':')
            time = Minutes.concat(seconds)
            console.log(time);
            clearInterval(timer)
            sendScore()
         
        }
       
    }
    else{
        if (a > 3) {
            won.play()
            count++
            score ++
            message001.innerHTML = "Congratulations. You found all of them.";
            message002.innerHTML = "<button class=blue001 onclick=nextLevel()>Next Level</button>";
            
        }
    }
   
}
function correct004() {
    audio.play();
    d=document.getElementById('disappear0'+count+'4')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    
    if (a > 4 && count !=10) {
        won.play()
        count++
        score ++
        message001.innerHTML = "Congratulations. You found all of them.";
        message002.innerHTML = "<button class=blue001 onclick=nextLevel(count)>Next Level</button>";
        
    }else if(a>6){
        won.play()
        score ++
        scoreboard.finalscore=score
        finalmodal.style.display='block'
        Minutes = minutes.concat(':')
        time = Minutes.concat(seconds)
        console.log(time);
        clearInterval(timer)
        sendScore()
        
    }
   
}
function correct005() {
    audio.play();
    d=document.getElementById('disappear0'+count+'5')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    
   
     if(a>6){
        won.play()
        score ++
        scoreboard.finalscore=score
        finalmodal.style.display='block'
        Minutes = minutes.concat(':')
        time = Minutes.concat(seconds)
        console.log(time);
        clearInterval(timer)
        sendScore()
        
    }
   
}
function correct006() {
    audio.play();
    d=document.getElementById('disappear0'+count+'6')
    d.innerHTML = "<div id=mark001><strong>&#9711</strong></div>";
    score001.innerHTML = a++;
    
    if(a>6){
        won.play()
        score ++
        scoreboard.finalscore=score
        finalmodal.style.display='block'
        scoreboard.finalscore=score
        Minutes = minutes.concat(':')
        time = Minutes.concat(seconds)
        clearInterval(timer)
        sendScore()
        
        
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

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closefinal = document.getElementsByClassName("closefinal")[0];
closefinal.onclick=function(){
    finalmodal.style.display="none"
    
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  playeName='Guest'
  timer=setInterval( function(){
    seconds=pad(++sec%60);
    minutes=pad(parseInt(sec/60,10))
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("minutes").innerHTML= minutes;
}, 1000);

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    playerName='Guest'
    finalmodal.style.display="none"
    timer=setInterval( function(){
        seconds=pad(++sec%60);
        minutes=pad(parseInt(sec/60,10))
        document.getElementById("seconds").innerHTML=seconds;
        document.getElementById("minutes").innerHTML= minutes;
    }, 1000);
  }}
  function getname(){
    var x = document.getElementById("name").value;
            playerName=x
           player.innerHTML = x;
           modal.style.display = "none";
           timer=setInterval( function(){
            seconds=pad(++sec%60);
            minutes=pad(parseInt(sec/60,10))
            document.getElementById("seconds").innerHTML=seconds;
            document.getElementById("minutes").innerHTML= minutes;
        }, 1000);
      
    }


function sendScore(){
    fetch('https://janssen-oncology.cat-sw.com/api/score/save', {
        method: 'POST',
        body:JSON.stringify({
            name: playerName,
            time: time
            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        if (response.ok) {
            
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        getScore()
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
    
}
function getScore(){
    fetch('https://janssen-oncology.cat-sw.com/api/scores', {
        method: 'GET'
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(data => {
        data.data.forEach(element => {
            position++
        final.innerHTML +=
        `<table ">
      
        
        <tr>
        
        <td id="pos">${position}</td>
        <td>${element.name}</td>
        <td>${element.time}</td>
      </tr>
        
      </table>`
       })
        if(position==1){
            pos.innerHTML=`<img src="images/trophy.png">`
        }
        finalmodal.style.display="block"
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}
var position = 0
