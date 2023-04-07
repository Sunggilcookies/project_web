//디지털 시계 
setInterval(setWatch, 1000);

function setWatch(){
    const date = new Date();
    let now = date.toLocaleTimeString()
    let demo = document.getElementById("demo")
    demo.innerHTML=now;
    demo.style.color="blue";
}

/* 배경 이미지 change */
let picture =["./images/1.jpg","./images/2.jpg","./images/3.jpg"];

let img = document.getElementById("pic");
let imgIdx=0;

function showPicture(){
    
    
    img.src=picture[imgIdx];
    imgIdx++

    if(imgIdx==picture.length){
    imgIdx=0;
    }
    
    setTimeout(showPicture,1000); //콜백함수
}

showPicture();