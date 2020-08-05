//Create variables here
var dog,Food;
var database;
var gameState=0;
var form,game,player;
var playerCount;

function preload()
{
  //load images here
  /*
var  DogImg=loadImage("images/dogImg.png");
var  DogHappy=loadImage("images/dogImg1.png");
var milkImg=loadImage("images/Milk.png");
*/
}

function setup() {
  createCanvas(800, 750);
  
 dog=createSprite(400,350,50,50);
 dog.shapeColor = "brown";
 //dog.addImage(DogImg);

milk1=createSprite(50,500,50,50);
milk2=createSprite(150,500,50,50);
milk3=createSprite(250,500,50,50);
milk4=createSprite(350,500,50,50);
milk5=createSprite(450,500,50,50);
milk6=createSprite(550,500,50,50);
milk7=createSprite(650,500,50,50);
milk8=createSprite(750,500,50,50);
milk9=createSprite(50,600,50,50);
milk10=createSprite(150,600,50,50);
milk11=createSprite(250,600,50,50);
milk12=createSprite(350,600,50,50);
milk13=createSprite(450,600,50,50);
milk14=createSprite(550,600,50,50);
milk15=createSprite(650,600,50,50);
milk16=createSprite(750,600,50,50);
milk17=createSprite(250,700,50,50);
milk18=createSprite(350,700,50,50);
milk19=createSprite(450,700,50,50);
milk20=createSprite(550,700,50,50);


  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock,writeStock);
  fedTime=database.ref("LastFed");
  fedTime.on("value",readTime,writeTime);


  game=new Game();
  game.getState();
  game.start();

}


function draw() { 
     if(gameState==0){
       background(146, 93, 211);
     }
  
      if(gameState==1){     
      background(5,170,170);
      textSize(30);
      fill("white");
      text("Food remaining : "+Food,280,250);
      text("Last fed at : "+fedTime,280,300);   
      dog.addImage(DogImg);

      milk1.addImage(milkImg);
      milk2.addImage(milkImg);
      milk3.addImage(milkImg);
      milk4.addImage(milkImg);
      milk5.addImage(milkImg);
      milk6.addImage(milkImg);
      milk7.addImage(milkImg);
      milk8.addImage(milkImg);
      milk9.addImage(milkImg);
      milk10.addImage(milkImg);
      milk11.addImage(milkImg);
      milk12.addImage(milkImg);
      milk13.addImage(milkImg);
      milk14.addImage(milkImg);
      milk15.addImage(milkImg);
      milk16.addImage(milkImg);
      milk17.addImage(milkImg);
      milk18.addImage(milkImg);
      milk19.addImage(milkImg);
      milk20.addImage(milkImg);


      if(keyWentDown(UP_ARROW)){
      writeStock(Food);
      fedTime=hour()+" : "+minute();
      // dog.addImage(dogHappy);

    if(Food==19){
    milk20.destroy();
    }
    if(Food==18){
      milk19.destroy();
    }
    if(Food==17){
        milk18.destroy();
    }
    if(Food==16){
      milk17.destroy();
    }
    if(Food==15){
    milk16.destroy();
    }
    if(Food==14){
    milk15.destroy();
    }
    if(Food==13){
    milk14.destroy();
    }
    if(Food==12){
    milk13.destroy();
    }
    if(Food==11){
    milk12.destroy();
    }
    if(Food==10){
    milk11.destroy();
    }
    if(Food==9){
    milk10.destroy();
    }
    if(Food==8){
    milk9.destroy();
    }
    if(Food==7){
    milk8.destroy();
    }
    if(Food==6){
    milk7.destroy();
    }
    if(Food==5){
      milk6.destroy();
    }
    if(Food==4){
    milk5.destroy();
    }
    if(Food==3){
    milk4.destroy();
    }
    if(Food==2){
      milk3.destroy();
    }
    if(Food==1){
    milk2.destroy();
    }
    if(Food==0){
      milk1.destroy();
    }

    if(hour()-1+""+minute()==fedTime){
  // dog.addImage(dogImg.png);
    }

      }

      drawSprites();
      



      //add styles here
    }//if gameState=1 close


}

//database functions

function readStock(data){
//get the number of milk bottles in stock
Food=data.val();
}

function writeStock(x){
  //update the foodstock
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      Food:x
    })
}

function readTime(data){
  fedTime=data.val();
}

function writeTime(fedTime){
database.ref('/').update({
  lastFed:fedTime
})
}






























/*
<script src="images/dogImg.png"></script>
<script src="images/dogImg1.png"></script>
<script src="images/Milk.png"></script>
<script src="Dog (1).png"></script>
*/