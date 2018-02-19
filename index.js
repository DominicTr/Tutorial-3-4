var disp = document.getElementById("display");
var bgInp = document.getElementById("bgText");
var menu = document.getElementById("menu");

var ir = document.getElementById("red");
var ig = document.getElementById("blue");
var ib = document.getElementById("green");

var rr = document.getElementById("rred");
var rg = document.getElementById("rblue");
var rb = document.getElementById("rgreen");

var colorInp = document.getElementById("colorInp");

var curElement = disp;

menu.addEventListener("click", function(){
	console.log(curElement);
	curElement = menu;
	
});
disp.addEventListener("click", function(){
	curElement = disp;
})
document.getElementById("change").addEventListener("click", function(){
	console.log(bgInp.value)
	
	curElement.style.backgroundColor = bgInp.value;
	bgInp.value = "";
});

bgInp.addEventListener("click", function(){
	curElement = bgInp;
})

ir.addEventListener("change", function(){
	curElement.style.backgroundColor = "rgb(" +rr.value+", "+rg.value+", "+rb.value+")";
	rr.value=ir.value;
});
ig.addEventListener("change", function(){
	curElement.style.backgroundColor = "rgb(" +rr.value+", "+rg.value+", "+rb.value+")";
	rg.value=ig.value;
});
ib.addEventListener("change", function(){
	curElement.style.backgroundColor = "rgb(" +rr.value+", "+rg.value+", "+rb.value+")";
	rb.value=ib.value;
});

rr.addEventListener("change", function(){
	curElement.style.backgroundColor = "rgb(" +rr.value+", "+rg.value+", "+rb.value+")";
	ir.value = rr.value;
});
rg.addEventListener("change", function(){
	curElement.style.backgroundColor = "rgb(" +rr.value+", "+rg.value+", "+rb.value+")";
	ig.value = rg.value;
});
rb.addEventListener("change", function(){
	curElement.style.backgroundColor = "rgb(" +rr.value+", "+rg.value+", "+rb.value+")";
	ib.value = rb.value;
});

colorInp.addEventListener("change", function(){
	curElement.style.backgroundColor = colorInp.value;
});