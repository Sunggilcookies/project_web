
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

 //ready(익명함수(){}) ,click(익명함수(){})
 $(document).ready(function(){
    //클릭 이벤트 - on함수
    let sw=true;    //상태변수(전역변수)
    $(".btn").on('click',function(){

        if(sw){
            $("nav").hide();
            $(this).text("보임"); //이것을 숨김
            
            sw=false;
        }
        else{
            $("nav").show();
            $(this).text("보임"); //이것을 숨김
            sw=true;
        }

      
    });
});





