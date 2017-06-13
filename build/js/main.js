// POPUP
var formBtn = document.getElementsByClassName('forms')[0],
    popUp = document.getElementsByClassName('popup')[0],
    popUpContent = document.getElementsByClassName('popup-content')[0],
    gonfalonImg = document.getElementsByClassName('gonfalon-img')[0],
    shwendelImg = document.getElementsByClassName('shwendel-img')[0],
    gonfalon = document.getElementsByClassName('gonfalons')[0],
    shwendel = document.getElementsByClassName('shwendels')[0],
    flagContainer = document.getElementsByClassName('f-container');
       
formBtn.addEventListener('click', function(){
    popUp.classList.add('opened');
})
popUp.addEventListener('click', function() {
    popUp.classList.remove('opened');
})
gonfalonImg.addEventListener('click', function(){
    for(var i=0; i<flagContainer.length; i++) {
        flagContainer[i].style.display="none";
    }
    gonfalon.style.display = "block";
})

shwendelImg.addEventListener('click', function(){
    for(var i=0; i<flagContainer.length; i++) {
        flagContainer[i].style.display="none";
    }
    shwendel.style.display = "block";
})
//FLAGS CANVAS
var first = document.getElementById("rect-left"),
    second = document.getElementById("rect-right"),
    gonfalonLeft = document.getElementById("gonfalon-left"),
    gonfalonRight = document.getElementById("gonfalon-right"),
    shwendelLeft = document.getElementById("shwendel-left"),
    shwendelRight = document.getElementById("shwendel-right"),
    ctx1     = first.getContext('2d'),
    ctx2     = second.getContext('2d'),
    ctx3     = gonfalonLeft.getContext('2d'),
    ctx4     = gonfalonRight.getContext('2d'),
    ctx5     = shwendelLeft.getContext('2d'),
    ctx6     = shwendelRight.getContext('2d'),
    ctxArr = [ctx1,ctx2,ctx3,ctx4,ctx5,ctx6];

//Seted line dash and color stroke for all ctx

for(var i=0; i<6; i++) {
    ctxArr[i].setLineDash([2,1]);
    ctxArr[i].strokeStyle = '#c1c1c1';
}   

// Left and Right Rectangle
for(var i=0; i<2; i++) {
    ctxArr[i].fillStyle="#FFFFFF";
    ctxArr[i].fillRect(0, 44, 369, 247);
    ctxArr[i].strokeRect(0,44,369,247);
    ctxArr[i].strokeStyle = '#c1c1c1';
}

// Left line in Right Rectangle
ctx1.moveTo(40,44);
ctx1.lineTo(40,291);
ctx1.stroke();

// Right line in Right Rectangle
ctx2.moveTo(329,44);
ctx2.lineTo(329,291);
ctx2.stroke();

// 3 Circles for Left Rectangle
ctx1.beginPath();
ctx1.arc(20,77,12,0,2*Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(20,164,12,0,2*Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(20,257,12,0,2*Math.PI);
ctx1.stroke();

// 3 Circles for Right Rectangle
ctx2.beginPath();
ctx2.arc(349,77,12,0,2*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(349,164,12,0,2*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(349,257,12,0,2*Math.PI);
ctx2.stroke();

//Waves on Left Rectangle
ctx1.lineWidth=5;
ctx1.strokeStyle = '#7b7c7f'
ctx1.setLineDash([]);
//top
var step = 10,
    topRectLeft11 = 40,
    topRectLeft12 = 45;
for(var i=0; i< 33; i++) {
    ctx1.beginPath();
    ctx1.moveTo(topRectLeft11,44);
    ctx1.lineTo(topRectLeft12,37);
    ctx1.lineTo(topRectLeft11,30);
    ctx1.lineTo(topRectLeft12,22);
    ctx1.lineTo(topRectLeft11,15);
    ctx1.lineTo(topRectLeft12,7);
    ctx1.lineTo(topRectLeft11,0);
    ctx1.stroke();
    topRectLeft11 += step;
    topRectLeft12 += step;
}
//bot
var botRectLeft11 = 40,
    botRectLeft12 = 45;
for(var i=0; i< 33; i++) {
    ctx1.beginPath();
    ctx1.moveTo(botRectLeft11,290);
    ctx1.lineTo(botRectLeft12,297);
    ctx1.lineTo(botRectLeft11,304);
    ctx1.lineTo(botRectLeft12,312);
    ctx1.lineTo(botRectLeft11,319);
    ctx1.lineTo(botRectLeft12,327);
    ctx1.lineTo(botRectLeft11,333);
    ctx1.stroke();
    botRectLeft11 += step;
    botRectLeft12 += step;
}

//Waves on Right Rectangle
ctx2.lineWidth=5;
ctx2.strokeStyle = '#7b7c7f'
ctx2.setLineDash([]);
var topRectRight11 = 5,
    topRectRight12 = 10;
for(var i=0; i< 33; i++) {
    ctx2.beginPath();
    ctx2.moveTo(topRectRight11,44);
    ctx2.lineTo(topRectRight12,37);
    ctx2.lineTo(topRectRight11,30);
    ctx2.lineTo(topRectRight12,22);
    ctx2.lineTo(topRectRight11,15);
    ctx2.lineTo(topRectRight12,7);
    ctx2.lineTo(topRectRight11,0);
    ctx2.stroke();
    topRectRight11 += step; //var step line 77
    topRectRight12 += step; //var step line 77
}
//bot
var botRectRight11 = 5,
    botRectRight12 = 10;
for(var i=0; i< 33; i++) {
    ctx2.beginPath();
    ctx1.moveTo(botRectRight11,290);
    ctx2.lineTo(botRectRight12,297);
    ctx2.lineTo(botRectRight11,304);
    ctx2.lineTo(botRectRight12,312);
    ctx2.lineTo(botRectRight11,319);
    ctx2.lineTo(botRectRight12,327);
    ctx2.lineTo(botRectRight11,333);
    ctx2.stroke();
    botRectRight11 += step; //var step line 77
    botRectRight12 += step; //var step line 77
}

// GONFALON
ctx3.moveTo(210,0);
ctx3.lineTo(0,0);
ctx3.lineTo(0,215);
ctx3.lineTo(210,215);
ctx3.lineTo(160,185);
ctx3.lineTo(140,190);
ctx3.lineTo(155,170);
ctx3.lineTo(135,165);
ctx3.lineTo(155,145);
ctx3.lineTo(140,134);
ctx3.lineTo(236,110);
ctx3.lineTo(140,90);
ctx3.lineTo(160,80);
ctx3.lineTo(130,70);
ctx3.lineTo(150,50);
ctx3.lineTo(130,35);
ctx3.lineTo(160,40);
ctx3.lineTo(210,0);
ctx3.fillStyle = '#fff';
ctx3.fill();
ctx3.stroke();

ctx4.moveTo(26,0);
ctx4.lineTo(236,0);
ctx4.lineTo(236,215);
ctx4.lineTo(26,215);
ctx4.lineTo(76,185);
ctx4.lineTo(96,190);
ctx4.lineTo(81,170);
ctx4.lineTo(101,165);
ctx4.lineTo(81,145);
ctx4.lineTo(96,134);
ctx4.lineTo(0,110);
ctx4.lineTo(93,90);
ctx4.lineTo(73,80);
ctx4.lineTo(103,70);
ctx4.lineTo(83,50);
ctx4.lineTo(103,35);
ctx4.lineTo(73,40);
ctx4.lineTo(26,0);
ctx4.fillStyle = '#fff';
ctx4.fill();
ctx4.stroke();

//SHWENDEL LEFT
ctx5.moveTo(462,0);
ctx5.lineTo(0,0);
ctx5.lineTo(0,251);
ctx5.lineTo(231,251);
ctx5.lineTo(231,31);
ctx5.lineTo(431,31);
ctx5.lineTo(462,0);
ctx5.lineTo(0,0);
ctx5.fillStyle = '#fff';
ctx5.fill();
ctx5.stroke();

//SHWENDEL RIGHT
ctx6.beginPath();
ctx6.moveTo(462,0);
ctx6.lineTo(462,251);
ctx6.lineTo(231,251);
ctx6.lineTo(231,31);
ctx6.lineTo(31,31);
ctx6.lineTo(0,0);
ctx6.lineTo(462,0);
ctx6.closePath();
ctx6.fillStyle = '#fff';
ctx6.fill();
ctx6.stroke();