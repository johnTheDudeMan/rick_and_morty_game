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
var intoxication = 5;
$(document).ready(function () {
	$(document).keydown(function (key) {
		switch (parseInt(key.which, 10)) {
			case 37:
				$('#rick').animate({left: "-=30px"}, 'fast');
				intoxication -= 0.2;
				$(document.getElementById("intox")).attr("value", intoxication);
				break;
			case 38:
				$('#rick').animate({top: "-=30px"}, 'fast');
				intoxication -= 0.2;
				$(document.getElementById("intox")).attr("value", intoxication);
				break;
			case 39:
				$('#rick').animate({left: "+=30px"}, 'fast');
				$(document.getElementById("intox")).attr("value", intoxication);
				intoxication -= 0.2;
				break;
			case 40:
				$('#rick').animate({top: "+=30px"}, 'fast');
				$(document.getElementById("intox")).attr("value", intoxication);
				intoxication -= 0.2;
				break;
		}
	});
});
var rickElement = document.getElementById("rick");
var flaskElement = document.getElementById("flask");
var boozeClass = document.getElementsByClassName("booze");
var beerElement = document.getElementById("beerBottle");
var bongElement = document.getElementById("bong");
function findPos(obj) {
	var curleft = curtop = 0;
	if(obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
		return [curleft,curtop];
	}
};
// This function finds the distance between Rick and objects
var inRangeCheck = function(elementA, elementB) {
	var getPositionAtCenter = function(element) {
		var data = element.getBoundingClientRect();
		return {
			x: data.left + data.width /2,
			y: data.top + data.height / 2
		};
	};
	var distanceBetweenElements = function(a, b) {
		var aPosition = getPositionAtCenter(a);
		var bPosition = getPositionAtCenter(b);
		
		return Math.sqrt(
			Math.pow(aPosition.x - bPosition.x, 2) +
			Math.pow(aPosition.y - bPosition.y, 2)
		);
	};
	var distance = distanceBetweenElements(elementA, elementB);
	return distance;
};
// function to reapear objects at random locations after they have been collected by Rick
// bottom: 747.4375   right: 818  top: 59.4375  left: 8
// todo: find a better way to contain random position within map
var randomLocation = function (obj) {
	var xCordinate = Math.random() * 863;
	var yCordinate = Math.random() * 778;
	obj.style.top = yCordinate+'px';
	obj.style.left = xCordinate+'px';
	$(obj).delay(2400).show("slow");
};
randomLocation(flaskElement);
randomLocation(bongElement);
randomLocation(beerElement);
var mapElement = document.getElementById("mapOfPlay");
console.log(mapElement.getBoundingClientRect());
var lastFix = "booze";
//function to check if Rick is within range of objects
//todo: confirm when taking drugs as they will have special affects
$(document).keydown(function() {
	if(inRangeCheck(rickElement, beerElement) < 50) {
		$(beerElement).hide();
		intoxication += 1;
		$(document.getElementById("intox")).attr("value", intoxication);
		randomLocation(beerElement);
	} else if(inRangeCheck(rickElement, flaskElement) < 50) {
		$(flaskElement).hide();
		intoxication += 2;
		$(document.getElementById("intox")).attr("value", intoxication);
		randomLocation(flaskElement);
	} else if(inRangeCheck(rickElement, bongElement) < 50) {
		$(bongElement).hide();
		if(lastFix === "booze") {
			intoxication *= 1.75;
		} else {intoxication += 1};
		lastFix = "drugs"
		// todo: bong rips should double intoxicity if last intake was booze
		// todo: if intoxicity is above 70% then game over due to getting spinnies
		$(document.getElementById("intox")).attr("value", intoxication);
		randomLocation(bongElement);
	};
});
\\todo: create a guy that plays Rock Paper Scissors, and if rick wins he scores a portal gun drugs or what ever he wants