console.log('Script-loaded');
// window.addEventListener("keypress",function(){
    
//     console.log(event.key);


   
    // if(event.key == 'd' && (z.x + z.width)<=window.innerWidth){

    // 	box.style.left = (z.x + 20);

    // }

    // if(event.key == 's' && (z.y + z.height)<=window.innerHeight){

    // 	box.style.top = (z.y + 20);

    // }
    // if(event.key == 'w' && (z.y>0)){

    // 	box.style.top = (z.y - 20);

    // }
    // if(event.key == 'a' && (z.x >0)){

    // 	box.style.left = (z.x - 20);

    // }
//     var movement;

//     function yes(){

//     var box = document.querySelector("#box");

//     function randomGenerator(lower,upper){

//     	return Math.floor((Math.random() *(upper-lower))+lower); 
//     }

   
//     box.addEventListener('mouseover',function(){
//     	 clearInterval(movement)
//     	let boxX = box.getBoundingClientRect().x;
//     	let boxY = box.getBoundingClientRect().y;

//     	let newY = randomGenerator(0,window.innerHeight);
//     	let newX = randomGenerator(0,window.innerWidth);


//     	movX = 1;
//     	movY = 1;
//     	if(newX < boxX )
//     	{
//     		movX = -1;
//     	}
//     	if(newY < boxY)
//     	{
//     		movY = -1;
//     	}

//     	 movement =setInterval(function(){


//     		boxX += movX;
//     		boxY += movY;

//     		box.style.left = boxX;
//     		box.style.top = boxY;


//     	},10);

//     });
// }

// yes();

var c=0;
var d=0;
function insert(a){
	var p = document.querySelector("#text-style");
	if(c==1 || d==1){
		p.value ='';
		c=0;
		d=0;
	}
	

	p.value += a;


}
function act(){
	var p = document.querySelector("#text-style");
var b = eval(p.value);
	p.value =b;

	c=1;

}

var k = window.addEventListener("keypress",function(){


	console.log(event.key);

	var p = document.querySelector("#text-style");

	if(event.key != '='){
		if(d==1 || c==1){
			p.value ='';
			d=0;
			c=0;
		}
	p.value += event.key ;
	}
	
	if(event.key== '=')
	{
		console.log(p.value);
	var b = eval(p.value);
	p.value =b;
	d=1;
	}
});


























































































	