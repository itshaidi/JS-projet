var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;
var map;
//mapArray : 決定地圖中每個格子元素
//ctx: HTML5 Canvas用
//currentImgMainX, currentImgMainY:決定主角的所在座標
//imgMountain, imgMain, imgEnemy:障礙物,主角,敵人的圖片物件

//當網頁元件載入完成後要做的事情

$(document).ready(function reloadMap() {

    function reloadMap()
    {};
    /*$("#buttonnn").click(function reloadMap()
    {});*/
    
    //遊戲地形設定
    //0:可走,1:障礙,2:終點,3:敵人
    //選擇第幾張地圖
    var map0 = [0,3,1,0,3,1,1,1,0,0,
                0,0,1,3,0,0,0,0,0,1,
                1,0,0,0,0,1,1,1,1,3,
                3,0,1,0,0,1,0,0,0,0,
                1,0,1,3,0,0,1,0,1,1,
                0,0,0,0,3,0,0,1,1,1,
                0,3,1,0,1,0,1,0,1,3,
                1,1,1,0,0,0,3,1,1,1,
                0,0,1,1,1,0,0,0,1,3,
                3,1,1,0,1,0,0,0,0,2
               ];
    var map1 = [0,3,1,0,1,1,1,3,0,0,
                0,0,1,3,0,0,0,0,0,3,
                1,0,0,0,0,1,1,1,1,3,
                1,0,1,1,3,1,0,0,0,0,
                1,0,1,0,0,0,1,0,1,3,
                0,0,0,0,0,0,0,0,1,1,
                0,3,1,0,1,0,1,0,0,0,
                1,1,1,0,1,0,0,1,1,0,
                0,0,1,1,1,3,1,0,0,0,
                3,1,1,0,1,0,3,1,1,2
               ];
    var map2 = [0,3,1,0,1,1,3,1,0,0,
                0,0,1,3,0,0,0,0,0,3,
                1,0,0,0,3,0,1,1,0,3,
                3,0,1,0,1,0,0,1,0,0,
                1,0,1,0,0,0,1,0,0,3,
                0,0,3,1,1,1,1,1,0,1,
                0,0,1,0,0,0,0,0,0,1,
                1,1,1,1,0,0,3,1,1,0,
                0,0,3,1,0,0,0,0,0,1,
                0,1,1,3,1,0,1,0,0,2
               ];
    var map3 = [0,3,1,0,1,1,3,1,0,0,
                0,0,1,3,0,0,1,0,0,3,
                1,0,0,0,0,1,1,1,1,3,
                3,1,1,1,0,1,0,0,0,0,
                1,0,1,0,0,0,1,0,1,3,
                3,0,0,0,1,3,0,1,1,1,
                0,1,0,1,1,1,1,0,0,1,
                1,1,0,0,0,0,1,1,1,0,
                0,1,1,1,1,0,0,0,0,1,
                3,1,1,0,1,0,3,1,0,2
               ];
    var map4 = [0,3,1,0,1,1,3,1,0,0,
                0,0,1,3,3,1,0,0,0,3,
                1,0,0,0,1,1,0,1,1,3,
                1,0,0,1,0,0,0,0,0,0,
                3,0,0,0,0,0,1,0,0,3,
                0,0,0,1,0,1,1,1,0,1,
                0,3,1,0,3,0,1,0,0,1,
                1,1,1,0,0,0,3,1,0,0,
                0,0,1,1,3,0,0,0,0,3,
                0,1,1,0,1,0,3,1,0,2
               ];
    var map5 = [0,3,1,0,1,1,3,1,0,0,
                0,0,0,0,0,0,1,0,0,3,
                1,1,0,0,0,0,0,1,1,3,
                3,0,1,1,1,1,0,0,0,0,
                1,0,0,1,3,1,1,0,1,3,
                0,0,0,0,0,0,0,0,1,1,
                1,3,1,0,1,0,1,0,0,1,
                1,1,1,0,0,0,3,1,1,0,
                0,0,1,1,1,0,0,0,0,1,
                0,1,1,0,1,0,1,3,0,2
               ];
    var map6 = [0,3,1,0,1,1,3,1,0,0,
                0,0,1,3,0,0,1,1,0,3,
                1,0,0,0,0,1,3,1,1,3,
                3,0,1,0,0,1,0,0,0,0,
                1,0,1,0,3,1,1,0,1,3,
                0,1,0,0,0,0,0,0,1,1,
                0,3,0,1,1,1,1,0,0,1,
                1,1,0,0,0,0,3,1,1,0,
                0,0,0,1,1,0,0,0,0,3,
                0,1,1,0,1,0,3,1,0,2
               ];
    var map7 = [0,0,0,0,1,1,3,1,0,0,
                0,0,1,0,0,0,0,0,0,3,
                1,1,0,0,0,1,0,1,1,3,
                3,1,1,0,0,1,0,0,0,0,
                1,0,1,0,0,0,1,3,0,3,
                0,0,0,1,0,0,0,1,0,1,
                0,3,1,0,1,0,1,0,0,1,
                1,1,1,0,0,0,3,1,0,0,
                0,0,1,1,1,0,0,0,0,3,
                0,1,1,0,1,0,3,1,0,2
               ];
    var map8 = [0,1,1,0,1,1,3,1,0,0,
                0,0,1,3,1,0,1,0,0,3,
                1,0,0,0,0,1,1,1,1,3,
                3,0,1,0,0,1,0,0,0,0,
                1,0,1,0,1,0,1,0,1,3,
                0,0,0,1,0,0,0,1,1,1,
                0,0,0,0,1,0,1,0,0,1,
                1,1,1,0,0,0,3,1,1,0,
                0,0,3,1,1,0,0,0,0,3,
                0,1,1,0,1,0,3,1,0,2
               ];
    var map9 = [0,3,1,0,1,1,3,1,0,0,
                0,0,1,3,0,0,1,0,0,3,
                1,0,0,0,0,1,1,1,1,3,
                3,0,1,0,0,1,0,0,0,0,
                1,0,1,0,0,0,1,0,1,3,
                0,0,0,1,0,0,0,1,1,1,
                0,3,1,0,1,0,1,0,0,1,
                1,1,1,0,0,0,3,1,1,0,
                0,0,1,1,1,0,0,0,0,3,
                0,1,1,0,1,0,3,1,0,2
               ];
    
    map = [map0, map1, map2, map3, map4, map5, map6, map7, map8, map9];
    
    mapArray = map[Math.floor(Math.random()*map.length)];
    
    ctx = $("#myCanvas")[0].getContext("2d");

    //擺上主角- 使用預設位置
    imgMain = new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,60,60);
    };
    
    //擺上障礙物與敵人
    imgMountain = new Image(); //障礙物圖片物件
    imgMountain.src = "RPG/images/material.png";
    imgEnemy = new Image(); //敵人圖片物件
    imgEnemy.src = "RPG/images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
        for(var x in mapArray)
        {
            if(mapArray[x]==1) //擺上障礙物
            {
              ctx.drawImage(imgMountain,32,65,32,32,x%10*60,Math.floor(x/10)*60,60,60);
            }else if (mapArray[x]==3) //擺上敵人
            {
              ctx.drawImage(imgEnemy,7,40,104,135,x%10*60,Math.floor(x/10)*60,60,60);
            }
        }
    };};
    
});
//當有人按下按鍵後要做的事情
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    //targetImgMainX, targetMainY:主角即將要移動過去的目標位置
    //targetBlock:主角即將要移動過去的那編號
    //cutImagePositionX:依據主角朝向甚麼方向而決定的圖片
    event.preventDefault();
    //避免點擊鍵盤出現瀏覽器其他行為, 如捲動,放大,換頁...
    //依據使用者點擊按鍵, 計算出目標位置以及設定新的圖片
    switch(event.which){
        case 37://往左走
            targetImgMainX = currentImgMainX-60;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case 38://往上走
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-60;
            cutImagePositionX = 358;
            break;
        case 39://往右走
            targetImgMainX = currentImgMainX+60;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case 40://往下走
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+60;
            cutImagePositionX = 0;
            break;
        default://當有人按了這四個按鍵以外的狀況
            return;
    }
    
    if(targetImgMainX<=540 && targetImgMainX>=0 &&
               targetImgMainY<=540 && targetImgMainY>=0)//沒有超出邊界
    {
        targetBlock=targetImgMainX/60+targetImgMainY/60*10;
    }else
    {
        targetBlock=-1;//-1代表異常, 不移動
    }
    
    ctx.clearRect(currentImgMainX,currentImgMainY,60,60);//清除主角原本所在位置
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
    {
        //目標位置異常,遇到障礙物,遇剽敵人都不能走,在原地(但稍後會依移動方向轉頭)
    }
    else
    {
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,60,60);
    
    switch(mapArray[targetBlock])
            {
                case undefined://walls
                    $("#talkBox").text("mur");
                break;
                case 1://obsticles
                    $("#talkBox").text("montagne");
                break;
                case 2://le but
                    $("#talkBox").text("Félicitations!");
                break;
                case 3://有人
                    $("#talkBox").text("Je vais te tuer!");
                break;
            }
         });
    