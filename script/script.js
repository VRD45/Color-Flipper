let randomColor;
function changeColor(){
    let container = document.getElementById("container");
    let colors = document.getElementById("colors");
    randomColor = getRandom();
    colors.innerHTML = randomColor;
    container.style.background = randomColor;
}

function getRandom(){
    let colorList = ['Red',"Grey","Green","Blue","White","Yellow"];
    let listIndex = Math.floor(Math.random()*colorList.length);
    // console.log(randomColor,colorList[listIndex]==randomColor);
    if(colorList[listIndex]==randomColor){
        getRandom();
    }
    return colorList[listIndex];
}

function changeHex(){
    let container = document.getElementById("container");
    let colors = document.getElementById("colors");
    let hex =[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    let randomHex = "#";
    for(i=0;i<6;i++){
        randomHex += hex[Math.floor(Math.random()*hex.length)];
    }
    console.log(randomHex);
    colors.innerHTML = randomHex;
    container.style.background = randomHex;
}

function simpleHex(){
    let choice = document.getElementById("choice");
    let btn =document.querySelector('.btn');
    choice.classList.toggle('hex');
    if(choice.classList=='hex'){
        changeHex();
        btn.setAttribute('onclick','changeHex()');
    }else{
        changeColor();
        btn.setAttribute('onclick','changeColor()');
    }
}