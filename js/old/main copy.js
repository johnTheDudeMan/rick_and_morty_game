/*
function newGame() {
	var userName = prompt("What name do you want to go by in this game?");
	if (userName == "") {
		alert("Don't be a dick, just enter any name or text.");
		userName;
	} else {
		alert("Hi " +userName +", this game will be nice and easy. The objective of this game is to: \n\n1) Help Rick fix his portal gun. \n2) Make sure Rick keeps a buzz and does not sober up. \n3) Find Morty before using the portal gun to go back to Earth C-137.");
	}
	
}

newGame();


*/

var brodGran = {elem: document.getElementById('brodGran'), item: "", rickInRange: false};
var brodGlen = {elem: document.getElementById('brodGlen'), item: "", rickInRange: false};
var wintGran = {elem: document.getElementById('wintGran'), item: "", rickInRange: false};
var wintGlen = {elem: document.getElementById('wintGlen'), item: "", rickInRange: false};


var randomItem = function (div) {
	var rand = Math.random() * 4;
	if(rand <= 1) {
		var beerBottle = document.createElement("img");
		beerBottle.src = "../gamebook/assets/beerBottle.png";
		div.item = "beerBottle";
		div.elem.appendChild(beerBottle);
	} else if (rand > 1 && rand <=2) {
		var beerMug = document.createElement("img");
		beerMug.src = "../gamebook/assets/beerMug.png";
		div.elem.appendChild(beerMug);
	} else if (rand > 2 && rand <= 3) {
		var martini = document.createElement('img');
		martini.src = '../gamebook/assets/martini.png';
		div.elem.appendChild(martini);
	} else if (rand > 3 && rand <= 4) {
		var whiskey = document.createElement('img');
		whiskey.src = '../gamebook/assets/whiskey.png';
		div.elem.appendChild(whiskey);
	}
};

randomItem(brodGran);
randomItem(brodGlen);
randomItem(wintGlen);
randomItem(wintGran);


var rick = document.getElementById('rick');

/*var flask = document.getElementById('flask');
// var beerBottle = document.getElementById('beerBottle');
var beerMug = document.getElementById('beerMug');
var bong = document.getElementById('bong');
var martini = document.getElementById('martini');
var whiskey = document.getElementById('whiskey');
var cocaine = document.getElementById('cocaine');
var portalGun = document.getElementById('portalGun');
*/

var intox = document.getElementById('intox');
var intoxication = 5;
var lastFix = "booze";

var inRangeOfRick = function(item) {
	var rickBound = rick.getBoundingClientRect();
	var itemBound = item.elem.getBoundingClientRect();
//	console.log(Math.abs(rickBound.top - itemBound.top) +"  top");
//	console.log(Math.abs(rickBound.left - itemBound.left) +"  left");
//	console.log("keypress");
	if (Math.abs(rickBound.top - itemBound.top < 35) && Math.abs(rickBound.left - itemBound.left < 35)) {
		item.rickInRange = true;
	};
};



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

console.log(inRangeCheck(rick, brodGran.elem));

var randomLocation = function(obj) {
	var xCordinate = Math.random() * 863;
	var yCordinate = Math.random() * 778;
	obj.style.top = yCordinate+'px';
	obj.style.left = xCordinate+'px';
	$(obj).delay(2400).show('slow');
};


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
		inRangeOfRick(brodGran);
		if (brodGran.rickInRange) {
			brodGran.elem.removeChild("img");
		};
		inRangeOfRick(brodGlen);
		inRangeOfRick(wintGran);
		inRangeOfRick(wintGlen);
		console.log(inRangeCheck(rick, brodGran.elem));
		console.log(inRangeCheck(rick, brodGlen.elem));

/*		
		if(inRangeCheck(rick, beerBottle) < 30) {
			$(beerBottle).hide();
			intoxication += 1;
			$(intox).attr('value', intoxication);
			randomLocation(beerBottle);
		} else if(inRangeCheck(rick, beerMug) < 50) {
			$(beerMug).hide();
			intoxication += 1;
			$(intox).attr('value', intoxication);
			randomLocation(beerMug);
		} else if(inRangeCheck(rick, flask) < 50) {
			$(flask).hide();
			intoxication += 2.5;
			$(intox).attr('value', intoxication);
			randomLocation(flask);
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
*/		
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

// just for testing :: remove later
var mapElement = document.getElementById('mapOfPlay');
console.log(mapElement.getBoundingClientRect());



//function to check if Rick is within range of items
//todo::: confirm taking drugs as they will have special affects


//todo: find why elements are hiding when rick is not close by. 
// todo::: write a portal gun functiont too
// create a guy that plays Rock Paper Scisorss, and if Rick wins you get either drugs or portal gun part