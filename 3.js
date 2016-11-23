# Test-3
Test #3
<script>

var buttonBool = false;
var imgObj = null;  
var pos = 0
var posDirection = 1;
var animate;

var debugtext = document.getElementById("debug");

function GoGoGo(){
    imgObj = document.getElementById('robot');
    imgObj.style.position= 'absolute'; 
    imgObj.style.top = Math.round((document.height/2))+'px';
    imgObj.style.left = '50px';
    moveRight();
} 

function Stop(){
    imgObj = document.getElementById('robot');
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = pos+'px';
} 


function moveRight(){

    left = parseInt(imgObj.style.left, 10);
    imgObj.style.left = (posDirection*(pos+=5)) + 'px';
    
    if(!buttonBool)
    {
        clearTimeout(animate);
        Stop();
        return;
    }

    //CHECK FOR WALL
    debug.innerHTML = imgObj.style.left+" "+(window.innerWidth+(imgObj.width));
    if(parseInt(imgObj.style.left,10) > Math.round(window.innerWidth+(imgObj.width/2))) 
    {
        pos=imgObj.width*-1
        imgObj.style.left = pos+'px';
    }
    animate = setTimeout(function(){moveRight();},20);          
}

function flipButton()
{
    bObj = document.getElementById('button');
    if(buttonBool)
        bObj.value="START";
    else
        bObj.value="STOP";
    buttonBool=!buttonBool;
}

var startStopButton = document.getElementById('button');

startStopButton.onmousedown = function() {   
        flipButton();
        if(buttonBool)
        {
            posDirection = 1;
            GoGoGo();   
        }
        else
        {
            posDirection = 0;
            Stop();
        }
};

    </script>
