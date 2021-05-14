//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time = 0
function draw(){
  time++
  ctx.clearRect(0, 0, 400, 400)
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
  
  //白
  //白
  //白
  ctx.beginPath();
  ctx.arc(200, 200, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke(); 
  
  ctx.beginPath();
  ctx.arc(200, 150, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke(); 
  
  ctx.beginPath();
  ctx.arc(150, 200, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke(); 
  
  ctx.beginPath();
  ctx.arc(250, 150, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke(); 
  
  ctx.beginPath();
  ctx.arc(150, 300, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke(); 
  
  ctx.beginPath();
  ctx.arc(100, 250, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(400, 50, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(200, 50, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(350, 50, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(200, 100, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(250, 50, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(300, 200, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(350, 300, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(300, 250, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(150, 150, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(50, 300, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(150, 50, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(100, 50, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(100, 300, 25, 0, 360)
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(150, 0, 25, 0, 360)
  ctx.fillStyle = "#FBE251"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(0+mouse.x, 0+mouse.y, 25, 0, 360)
  ctx.strokeStyle = "rgba(0,0,0,20)"
  ctx.strokeStyle = "black"
  ctx.stroke();
  
  //黑
  //黑
  //黑
  ctx.beginPath();
  ctx.arc(250, 200, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill(); 
  
  ctx.beginPath();
  ctx.arc(200, 250, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill(); 
  
  ctx.beginPath();
  ctx.arc(250, 100, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill(); 
  
  ctx.beginPath();
  ctx.arc(300, 150, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill(); 
  
  ctx.beginPath();
  ctx.arc(150, 250, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill(); 
  
  ctx.beginPath();
  ctx.arc(350, 100, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill(); 
  
  ctx.beginPath();
  ctx.arc(350, 200, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(350, 150, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(300, 100, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(200-(time%3), 0-(time%3), 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(300, 50, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(350, 250, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(250, 250, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(100-(time%3) , 200-(time%3) , 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(100, 150, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(0, 350, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(100-(time%3), 0-(time%3), 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(50, 50, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(200-(time%3), 300-(time%3), 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
  
  //外星人
  let gox = time%425-25
  ctx.beginPath();
  ctx.arc(gox, 350, 25, 0, 360)
  ctx.fillStyle = "black"
  ctx.fill();
} 
//draw()

//設定連續繪製
setInterval(draw,10) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})