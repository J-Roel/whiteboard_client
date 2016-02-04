
var svg = document.getElementById('draw-area'); //Get svg element


function svgCreateCircle(event){

	var x = event.offsetX;
	var y = event.offsetY;

	var svgNS = "http://www.w3.org/2000/svg";
	var myCircle = document.createElementNS(svgNS,"circle");
	myCircle.setAttributeNS(null,"id","mycircle");
	myCircle.setAttributeNS(null,"cx",x);
	myCircle.setAttributeNS(null,"cy",y);
	myCircle.setAttributeNS(null,"r",50);
	myCircle.setAttributeNS(null,"fill","black");
	myCircle.setAttributeNS(null,"stroke","none");

	svg.appendChild(myCircle);

}

$('#draw-area').on('click', svgCreateCircle);