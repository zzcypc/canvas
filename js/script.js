//Draw a line
/*状态设置
 * convas的绘制是基于状态的
*/
var tangram=[
{p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:"#caff67"},
{p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:"#67becf"},
{p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:"#ef3d61"},
{p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:"#f9f51a"},
{p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:"#a594c0"},
{p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:"#fa8ecc"},
{p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:"#f6ca29"}
];

window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.height=800;
	canvas.width=800;
	if(canvas.getContext('2d')){
		var context=canvas.getContext('2d');
	}else{
		alert("当前浏览器不支持canvas，请更换浏览器后再试~");
	}
	var length=tangram.length;
	for(var i=0;i<length;i++)
	{
		draw(tangram[i],context);
	}
};
function draw(piece,cxt){
	cxt.beginPath();
	cxt.moveTo(piece.p[0].x,piece.p[0].y)
	var pointNum=piece.p.length;
	for(var i=1;i<pointNum;i++)
	{
		cxt.lineTo(piece.p[i].x,piece.p[i].y);
	}
	cxt.closePath();
	cxt.fillStyle=piece.color;
	//绘制
	//context.stroke();
	cxt.fill();
}



//context.beginPath();
//context.moveTo(200,100);
//context.lineTo(700,600);
//context.closePath();
//context.strokeStyle="deepskyblue";
//context.stroke();