// Canvas

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 600;
myCanvas.height = 300;
var cont = myCanvas.getContext("2d");

var classical = 26;
var alternative = 37;
var pop = 5;
var jazz = 32;
classical_o = classical / 100;
alternative_o = alternative / 100;
pop_o = pop / 100;
jazz_o = jazz / 100;
var angle1 = 2 * Math.PI * classical_o;
var angle2 = angle1 + 2 * Math.PI * alternative_o;
var angle3 = angle2 + 2 * Math.PI * pop_o;
var angle4 = 2 * Math.PI;

drawPieSlice(cont, 150, 120, 100, 0, angle1, "#FDE23E");
drawPieSlice(cont, 150, 120, 100, angle1, angle2, "#F16E23");
drawPieSlice(cont, 150, 120, 100, angle2, angle3, "#57D9FF");
drawPieSlice(cont, 150, 120, 100, angle3, angle4, "#937E88");

drawPieSlice(cont, 450, 120, 100, 0, angle1, "#FDE23E");
drawPieSlice(cont, 450, 120, 100, angle1, angle2, "#F16E23");
drawPieSlice(cont, 450, 120, 100, angle2, angle3, "#57D9FF");
drawPieSlice(cont, 450, 120, 100, angle3, angle4, "#937E88");
drawPieSlice(cont, 450, 120, 50, 0, angle4, "#fff");

cont.fillStyle = "#fff";
cont.font = "bold 15px arial";

var coorx = 150 + 50 * Math.cos(angle1 / 2);
var coory = 120 + 50 * Math.sin(angle1 / 2);
cont.fillText(classical + "%", coorx, coory);

coorx = 150 + 50 * Math.cos((angle2 + angle1) / 2);
coory = 120 + 50 * Math.sin((angle2 + angle1) / 2);
cont.fillText(alternative + "%", coorx, coory);

coorx = 150 + 50 * Math.cos((angle2 + angle3) / 2);
coory = 120 + 50 * Math.sin((angle2 + angle3) / 2);
cont.fillText(pop + "%", coorx, coory);

coorx = 150 + 50 * Math.cos((angle3 + angle4) / 2);
coory = 120 + 50 * Math.sin((angle3 + angle4) / 2);
cont.fillText(jazz + "%", coorx, coory);

var coorx = 450 + 77 * Math.cos(angle1 / 2);
var coory = 120 + 77 * Math.sin(angle1 / 2);
cont.fillText(classical + "%", coorx, coory);

coorx = 450 + 77 * Math.cos((angle2 + angle1) / 2);
coory = 120 + 77 * Math.sin((angle2 + angle1) / 2);
cont.fillText(alternative + "%", coorx, coory);

coorx = 450 + 77 * Math.cos((angle2 + angle3) / 2);
coory = 120 + 77 * Math.sin((angle2 + angle3) / 2);
cont.fillText(pop + "%", coorx, coory);

coorx = 450 + 77 * Math.cos((angle3 + angle4) / 2);
coory = 120 + 77 * Math.sin((angle3 + angle4) / 2);
cont.fillText(jazz + "%", coorx, coory);

cont.fillStyle = "#FDE23E";
cont.fillRect(240, 220, 15, 15);
cont.fillStyle = "#F16E23";
cont.fillRect(240, 235, 15, 15);
cont.fillStyle = "#57D9FF";
cont.fillRect(240, 250, 15, 15);
cont.fillStyle = "#937E88";
cont.fillRect(240, 265, 15, 15);

cont.fillStyle = "#000";
cont.font = "12px arial";
cont.fillText("Classical music", 260, 232);
cont.fillText("Alternative rock", 260, 247);
cont.fillText("Pop", 260, 262);
cont.fillText("Jazz", 260, 277);

// geolocation

var elem1 = document.getElementById('coords');

// web-storage

var clicks = 0;
clicks = localStorage.clickcount ? localStorage.clickcount : 0;
document.getElementById("count").innerHTML = clicks;

// functions

function drawPieSlice(ctx, centerx, centery, radius, start, end, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerx, centery);
	ctx.arc(centerx, centery, radius, start, end);
	ctx.closePath();
	ctx.fill();
}

function coordinates() {
	if (!(elem1.innerHTML)) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		elem1.innerHTML = "";
	}
}

function showPosition(position) {
	var str = "<p><span class='text-primary'>Latitude:</span>";
	str += "&nbsp;&nbsp;&nbsp;&nbsp;";
	str += position.coords.latitude.toFixed(2) + "</p>";
	str += "<p><span class='text-primary'>Longitude:</span>"
	str += "&nbsp;&nbsp;&nbsp;&nbsp;"
	str += position.coords.longitude.toFixed(2) + "</p>";
	elem1.innerHTML = str;
} 

function addclick() {
	if (localStorage.clickcount) {
		localStorage.clickcount++;
	} else {
		localStorage.clickcount = 1;
	}
	document.getElementById("count").innerHTML = localStorage.clickcount;
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}


