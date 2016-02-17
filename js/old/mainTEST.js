var world = document.getElementById('mapOfPlay');

function createItem(name, className) {
	document.getElementById(name).style.height = "30px";
	document.getElementById(name).style.width = "30px";
	document.getElementById(name).style.position = "absolute";
	document.getElementById(name).style.backgroundImage = "url(assets/" + name + ".png)";
	document.getElementById(name).style.backgroundRepeat = "no-repeat";
	document.getElementById(name).style.backgroundSize = "contain";
	document.getElementById(name).style.backgroundPosition = "center";
	document.getElementById(name).className = className;
};


var boozeItem = $("<div>", {class: "booze", height: "30px", width: "30px", position: "absolute", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "ceneter"});
// maybe something that inherits
// maybe a for statement to parse through the object at i and inster attribute properties

var rick = document.getElementById('rick');
var flask = document.getElementById('flask');

var beerBottle = document.createElement("div");
beerBottle.id = "beerBottle";
world.appendChild(beerBottle);
createItem("beerBottle", "booze");


var beerMug = document.getElementById('beerMug');
var bong = document.getElementById('bong');
var martini = document.getElementById('martini');
var whiskey = document.getElementById('whiskey');
var cocaine = document.getElementById('cocaine');
var portalGun = document.getElementById('portalGun');
var intox = document.getElementById('intox');
var intoxication = 5;
var lastFix = "booze";

var randomLocation = function(obj) {
	var xCordinate = Math.random() * 863;
	var yCordinate = Math.random() * 778;
	obj.style.top = yCordinate+'px';
	obj.style.left = xCordinate+'px';
	$(obj).delay(2400).show('slow');
};

console.log(flask.getBoundingClientRect() +" 47");

var inRangeCheck = function(elementA, elementB) {
	var getPositionAtCenter = function(element) {
		var data = element.getBoundingClientRect();
		return {
			x: data.left + data.width /2,
			y: data.top + data.height /2
		};
	};
	var distanceBetweenElements = function(a, b) {
		var aPosition = getPositionAtCenter(a);
		var bPosition = getPositionAtCenter(b);
		return Math.sqrt(Math.pow(aPosition.x - bPosition.x, 2) + Math.sqrt(aPosition.y - bPosition.y, 2));
	};
	var distance = distanceBetweenElements(elementA, elementB);
	return distance;
};

console.log(flask.getBoundingClientRect() +" 64");


$(document).ready(function () {
	$(document).keydown(function(key) {
		switch (parseInt(key.which, 10)) {
			case 37:
				$('#rick').animate({left: '-=30px'}, 'fast');
				intoxication -= 0.2;
				$("#intox").attr("value", intoxication);
				break;
			case 38:
				$('#rick').animate({top: '-=30px'}, 'fast');
				intoxication -= 0.2;
				$("#intox").attr("value", intoxication);
				break;
			case 39:
				$('#rick').animate({left: '+=30px'}, 'fast');
				intoxication -= 0.2;
				$("#intox").attr("value", intoxication);
				break;
			case 40:
				$('#rick').animate({top: '+=30px'}, 'fast');
				intoxication -= 0.2;
				$("#intox").attr("value", intoxication);
				break;
		};
		
		if(inRangeCheck(rick, beerBottle) < 50) {
			$(beerBottle).hide();
			intoxication += 1;
			$(intox).attr('value', intoxication);
			randomLocation(beerBottle);
		} else if(inRangeCheck(rick, flask) < 50) {
			$(flask).hide();
			intoxication += 2.5;
			$(intox).attr('value', intoxication);
			randomLocation(flask);
			console.log(flask.getBoundingClientRect());	
/*		} else if(inRangeCheck(rick, beerMug) < 50) {
			$(beerMug).hide();
			intoxication += 1;
			$(intox).attr('value', intoxication);
			randomLocation(beerMug);
		} else if(inRangeCheck(rick, martini) < 50) {
			$(martini).hide();
			intoxication += 2;
			$(intox).attr('value', intoxication);
			randomLocation(martini);
		} else if(inRangeCheck(rick, whiskey) < 50) {
			$(whiskey).hide();
			intoxication += 2.5;
			$(intox).attr('value', intoxication);
			randomLocation(whiskey);
		} else if(inRangeCheck(rick, bong) < 50) {
			$(bong).hide();
			if(lastFix === "booze") {
				intoxication *= 1.75;
			} else {intoxication += 1.3}
			lastFix = "drugs";
// todo: if last fix was booze and intox is over 70% you will get spinnies and lose
			$(intox).attr('value', intoxication);
			randomLocation(bong);
		} else if(inRangeCheck(rick, cocaine) < 50) {
// todo: if taking cocaine, comedown will be fast after x seconds
			$(cocaine).hide();
			intoxication += 3;
			$(intox).attr('value', intoxication);
			randomLocation(cocaine);
*/		};
	});
});


function findPos(obj) {
	var curtop = 0;
	var curleft = 0;
	if(obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
		return [curleft, curtop];
		}
};



console.log(inRangeCheck(rick, flask));

//todo: re-write function so that objects appear near rick x distance away

/*
randomLocation(flask);
randomLocation(beerBottle);
randomLocation(beerMug);
randomLocation(martini);
randomLocation(whiskey);
randomLocation(bong);
randomLocation(cocaine);
randomLocation(portalGun);
*/
randomLocation(beerBottle);

// just for testing :: remove later
var mapElement = document.getElementById('mapOfPlay');
console.log(mapElement.getBoundingClientRect() +" 172");



//function to check if Rick is within range of items
//todo::: confirm taking drugs as they will have special affects


//todo: find why elements are hiding when rick is not close by. 
// todo::: write a portal gun functiont too
// create a guy that plays Rock Paper Scisorss, and if Rick wins you get either drugs or portal gun part
// todo:::::: rewerite objects to be created and removedinstead of moved