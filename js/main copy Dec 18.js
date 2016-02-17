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


// birdPerson should fly or give close cordinates where Morty is
// squanchy will increase intox to 10

var rick = document.getElementById('rick');
var intox = document.getElementById('intox');
var intoxication = 5;
var portGunMeter = document.getElementById('portalGunMeter');
var portalGunParts = 4;
var lifeMeter = document.getElementById('lifeMeter');
var life = 4;
var mapElement = document.getElementById('mapOfPlay');
var lastFix = "booze";
var partsBehindHardwareIntel = false;
var partsAtSmokeShop = false;
var birdPersonIntelWholeFoods = false;
var birdPersonIntelWaterfront = false;
var squanchyVisits = 0;
var jerryVisits = 0;
var birdPersonVisits = 0;



function locationDiv(name, elem) {
	this.name = name;
	this.elem = elem;
	this.item = "";
	this.rickInRange = false;
}
var brodGran = new locationDiv("brodGran", document.getElementById('brodGran'));
var brodGlen = new locationDiv("brodGlen", document.getElementById('brodGlen'));
var wintGran = new locationDiv("wintGran", document.getElementById('wintGran'));
var wintGlen = new locationDiv("wintGlen", document.getElementById('wintGlen'));
var sherGran = new locationDiv("sherGran", document.getElementById('sherGran'));
var sherGlen = new locationDiv("sherGlen", document.getElementById('sherGlen'));
var sherThor = new locationDiv("sherThor", document.getElementById('sherThor'));
var wintThor = new locationDiv("wintThor", document.getElementById('wintThor'));
var brodThor = new locationDiv("brodThor", document.getElementById('brodThor'));


// create prototypes for booze and drugs and special effects Answer: not done, still thinking

var randomItem = function (div) {
	var rand = Math.random() * 11;
	if(rand <= 1) {
		var beerBottle = document.createElement("img");
		beerBottle.src = "../gamebook/assets/beerBottle.png";
		beerBottle.className = "fix";
		div.elem.appendChild(beerBottle);
		div.intoxIncrease = 1.5;
		div.lastFix = "booze";
	} else if (rand > 1 && rand <=2) {
		var beerMug = document.createElement("img");
		beerMug.src = "../gamebook/assets/beerMug.png";
		beerMug.className = "fix";
		div.elem.appendChild(beerMug);
		div.intoxIncrease = 1.7;
		div.lastFix = "booze";
	} else if (rand > 2 && rand <= 3) {
		var martini = document.createElement('img');
		martini.src = '../gamebook/assets/martini.png';
		martini.className = "fix";
		div.elem.appendChild(martini);
		div.intoxIncrease = 2.5;
		div.lastFix = "booze";
	} else if (rand > 3 && rand <= 4) {
		var whiskey = document.createElement('img');
		whiskey.src = '../gamebook/assets/whiskey.png';
		whiskey.className = "fix";
		div.elem.appendChild(whiskey);
		div.intoxIncrease = 3;
		div.lastFix = "booze";
	} else if (rand > 4 && rand <=5) {
		var bong = document.createElement('img');
		bong.src = '../gamebook/assets/bong.png';
		bong.className = "fix";
		div.elem.appendChild(bong);
		div.intoxIncrease = 1.8;
		div.lastFix = "drugs";
	} else if (rand > 5 && rand <= 5.4) {
// make flask a less common item due to it being valuable for intox increase, bong too	
		var flask = document.createElement('img');
		flask.src = '../gamebook/assets/flask.png';
		flask.className = "fix";
		div.elem.appendChild(flask);
		div.intoxIncrease = 3.5;
		div.lastFix = "booze";
	} else if (rand > 5.4 && rand <= 5.8) {
		var cocaine = document.createElement('img');
		cocaine.src = '../gamebook/assets/cocaine.png';
		cocaine.className = "fix";
		div.elem.appendChild(cocaine);
		div.intoxIncrease = 3;
		div.lastFix = "drugs";
	} else if (rand > 5.8 && rand <= 6) {
		var shroom = document.createElement('img');
		shroom.src = '../gamebook/assets/shroom.png';
		shroom.className = "fix";
		div.elem.appendChild(shroom);
		div.intoxIncrease = 5;
		div.lastFix = "drugs";
	} else if (rand > 6 && rand <= 6.2) {
		var portalGun = document.createElement('img');
		portalGun.src = '../gamebook/assets/portalGun.png';
		portalGun.className = "fix";
		div.elem.appendChild(portalGun);
		div.lastFix = "portalGun";
		div.intoxIncrease = 0;
		div.portalGunPartsFound = 1;
	} else if (rand > 6.2 && rand <= 7) {
		var jerry = document.createElement('img');
		jerry.src = '../gamebook/assets/jerry.png';
		jerry.className = "character";
		div.elem.appendChild(jerry);
		div.intoxIncrease = 0;
		div.lastFix = "jerry";
	} else if (rand > 7 && rand <= 9) {
		var birdPerson = document.createElement('img');
		birdPerson.src = '../gamebook/assets/birdPerson.png';
		birdPerson.className = "character";
		div.elem.appendChild(birdPerson);
		div.intoxIncrease = 0;
		div.lastFix = "birdPerson";
	} else if (rand > 9 && rand <+ 11) {
		if (squanchyVisits < 3) {
			var squanchy = document.createElement('img');
			squanchy.src = '../gamebook/assets/squanchy.png';
			squanchy.className = "character";
			div.elem.appendChild(squanchy);
			div.intoxIncrease = 5;
			div.lastFix = "squanchy";
		} else {randomItem(div)}
	}
};

randomItem(brodGran);
randomItem(brodGlen);
randomItem(wintGlen);
randomItem(wintGran);
randomItem(sherGran);
randomItem(sherGlen);
randomItem(sherThor);
randomItem(wintThor);
randomItem(brodThor);

function character(name, function1, interact1, interact2, button, button2) {
	this.name = name;
	this.interact1 = interact1;
	this.interact2 = interact2;
	this.button = button;
	this.button2 = button2;
	this.function1 = function1;
	this.dialog = function(interactionOption) {
		var dialogWindow = document.createElement('div');
		var dialogText = document.createElement('p');
		$(dialogText).html(interactionOption);
		dialogWindow.appendChild(dialogText);
		$(dialogWindow).dialog({
			title: this.name,
			buttons: this.button
		});
	};
	this.dialog2 = function(interactionOption) {
		var dialogWindow = document.createElement('div');
		var dialogText = document.createElement('p');
		$(dialogText).html(interactionOption);
		dialogWindow.appendChild(dialogText);
		$(dialogWindow).dialog({
			title: this.name,
			buttons: this.button2
		});
	}
};

var jerryGame = function() {
	var ricksChoice = "";
	var rickScore = 0;
	var jerrysChoice = "";
	var jerryScore = 0;
	var scoreDisplay = function () {
		if (ricksChoice === jerrysChoice) {
			return "Its a tie, you both chose:  " + ricksChoice + "<br /><br /><strong>Rick:  </strong>" +rickScore + "<br /><strong>Jerry:  </strong>" +jerryScore + "<br /><br /><i>Best of 3, play again..."
		} else {
			return "Rick chose:  " + ricksChoice + "<br />Jerry chose: " + jerrysChoice + "<br /><br /><strong>Rick:  </strong>" +rickScore + "<br /><strong>Jerry:  </strong>" +jerryScore + "<br /><br /><i>Best of 3, play again...";
		}
	};
	
	var compare = function (rick, jerry) {
		var jerryRandom = Math.random();
		if (jerryRandom < 0.34) {
			jerrysChoice = "Rock";
		} else if (jerryRandom <= 0.67) {
			jerrysChoice = "Paper";
		} else {jerrysChoice = "Scissors"};
		
		if (jerrysChoice === ricksChoice) {
			console.log("Pluto's a planet.");
		} else if (ricksChoice === "Rock") {
			if (jerrysChoice === "Scissors") {
				rickScore++;
			} else {jerryScore++;}
		} else if (ricksChoice === "Paper") {
			if (jerrysChoice === "Rock") {
				rickScore++;
			} else {jerryScore++;}
		} else if (ricksChoice === "Scissors") {
			if (jerrysChoice === "Paper") {
				rickScore++;
			} else {jerryScore++;}
		};
		
	};
	
	var winnerDeterminator = function () {
		var gameOver = false;
		if (rickScore === 3 || jerryScore === 3) {
			if (jerryScore === 3) {
				alert("Jerry Wins !!!\n\n\nJerry: Haha, I win. Who is the smart one now? \n\n\nRick: Ugh, again you kill my buzz.");
				intoxication -= 2;
				$(intox).attr('value', intoxication);
			} else if (rickScore === 3) {
				alert("~~ Rick Wins ~~\n\n\nRick: Look Jerry, you are better off without that iPad, help me find more portal gun parts, and I will at least take you to Jerry Daycare.");
				portalGunParts++;
				$(portGunMeter).attr('value', portalGunParts);
			}
		} else if (gameOver === false) {
			dialogGame();
		}
	};

	
	var dialogGame = function () {
		var gameOver = false;
		var dialogMessage = document.createElement('div');
		dialogMessage.id = "dialogMessage";
		var dialogText = document.createElement('p');
		$(dialogText).html(scoreDisplay());
		dialogMessage.appendChild(dialogText);
		$(dialogMessage).dialog({
			title: "Rock, Paper, Scissors",
			buttons: {
				"Rock": function () {
					ricksChoice = "Rock";
					$(this).dialog('close');
					compare(ricksChoice, jerrysChoice);
					winnerDeterminator();
				
				},
				"Paper": function () {
					ricksChoice = "Paper";
					$(this).dialog('close');
					compare(ricksChoice, jerrysChoice);
					winnerDeterminator();

				},
				"Scissors": function () {
					ricksChoice = "Scissors";
					$(this).dialog('close');
					compare(ricksChoice, jerrysChoice);
					winnerDeterminator();
				}
			}
		});
	};
	dialogGame();
};

var jerry = new character(
	"Jerry",
	function() {intoxication -= 2; $(intox).attr('value', intoxication); alert("Rick: Damn you Jerry. You are always a buzz kill.");},
	"<strong>Rick:</strong> Jerry, what are you doing here? N-nn-nevermind that, I need parts from your stupid iPad to fix my portal gun.<br /><strong>Jerry:</strong> No Rick, The Rick from my dimmension left me here for god knows how long. I need to entertain myself until he gets back.<br /><strong>Rick:</strong>Who cares about your dumb fucking balloon popping game?<br /><strong>Jerry:</strong>Look here Rick-#-what-ever. If you can beat me in Rock, Paper, Scissors I'll give you my iPad.",
	"<strong>Jerry:</strong>Want to play Rock, Paper, Scissors and if you win I will help look for spare parts for your portal gun.",
	{"Rock, Paper, Scissors": function () {
		jerryVisits++;
		$(this).dialog('close');
		jerryGame();
	},
	 "Fuck off Jerry": function () {
		 $(this).dialog('close');
		 jerryVisits++;
		 jerry.function1();
	 }
	}
);

// ----------------------------- Birdperson ------------------
var birdPerson = new character(
	"Birdperson",
	function() {life = 4; $(lifeMeter).attr('value', life);},
	"<strong>Birdperson:</strong> The Beacon was activated. Who is in danger?<br /><strong>Rick:</strong> B-b-birdperson old friend. I need to find Morty and fix my portal gun.<br /><strong>Birdperson:</strong> Rick, I have important galactic business to fly to, but I can help you regain your health or fly up real quick to see if I spot any uncertain adolescent. What do you prefer?<br /><strong>Rick:</strong> buurr-r-p",
	"<strong>Rick:</strong> Wubba lubba dub dub.<br /><strong>Birdperson:</strong> You appear to be dying. I will make efforts to prevent this, but can promise nothing. I can also help you find Morty again, but then I won't be able to help you regain your life.",
	{"Health": function() {
		birdPerson.function1();
		$(this).dialog('close');
		birdPersonVisits++;
	},
	 "Morty": function() {
		 $(this).dialog('close');
		 alert("Birdperson: I saw an anxious looking youth wearing a yellow shirt in the parking lot of Whole Foods. Press 'M' to shout his name when you are there.");
		 birdPersonVisits++;
		 birdPersonIntelWholeFoods = true;
	 }
	},
	{"Health": function() {
		birdPerson.function1();
		$(this).dialog('close');
		birdPersonVisits++;
	},
	 "Morty": function() {
		 $(this).dialog('close');
		 alert("Birdperson: I noticed a scrawny kid that may be Morty skipping rocks by The Waterfront Cafe. Press 'M' to shout his name when you are there.");
		 birdPersonVisits++;
		 birdPersonIntelWaterfront = true;
	 }
	}
);

var mortyAtWholeFoods = function () {
	$(document).keydown(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '77' && birdPersonIntelWholeFoods) {
			alert("Random Guy: Aye buddy, quite shouting. There is no Morty here, but I did see a kid that looked like he was crying going east on Glenlake.");
			birdPersonIntelWholeFoods = false;
		}
	})
};

var mortyAtWaterfront = function () {
	$(document).keydown(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '77' && birdPersonIntelWaterfront) {
			alert("Old Lady: Excuse me sir, but if you are looking for a boy named Morty he left about 20 minutes ago. He seemed upset about something, but he did help me feed the ducks. I am sorry I don't remember where he went.");
			birdPersonIntelWaterfront = false;
		}
	})
};

// ----------------------------- Squanchy ---------------------
var squanchy = new character(
	"Squanchy", 
	function() {intoxication = 10; $(intox).attr("value", intoxication);},
	"<strong>Rick:</strong> Hi Squanchy, good to see you again. I lost Morty, and need to find him quick. I also broke my portal gun and need to fix it to get back to C-137.<br /><strong>Squanchy:</strong> I haven't seen Morty, but I can help you get Squanched, or tell you where I may have seen some parts for your portal gun.<br /><strong>Rick:</strong> Why can't we squanch both?<br /><strong>Squanchy:</strong>Last I recall, you said your bff is that Bird Person. You are lucky I am helping you out now, man. I got squanchin to do.<br /><strong>Rick:</strong> F-ff-fine.",
	"<strong>Rick:</strong> Hey Squanchy, I d-d-didn't find Morty yet ~bluuuurp. Y-y-you're a good friend Squanch, but I need some more help.<br /><strong>Squanchy:</strong> Squanch or intel?<br /><strong>Rick:</strong> I o-o-owe you one Squanch.", 
	{"Squanch": function() {
		squanchy.function1();
		$(this).dialog('close');
		squanchyVisits++;
	},
	 "intel": function() {
		 $(this).dialog('close');
		 alert("Squanchy: I saw some useful parts in the alley behind the hardware store. Just press 'P' when you are back there to retrieve the parts.");
		 partsBehindHardwareIntel = true;
		 squanchyVisits++;
	 }
	},
	{"Squanch": function() {
		squanchy.function1();
		$(this).dialog('close');
		squanchyVisits++;
	},
	 "intel": function() {
		 $(this).dialog('close');
		 alert("Squanchy: The All in One Smoke Shop has these new e-ciggeretes that might have the same parts as your portal gun. Just press 'P' when you are in there.");
		 squanchyVisits++;
		 partsAtSmokeShop = true;
	 }
	}
);

// function first checks to see if Rick is in range and then what the last fix was before increasing intoxication in a specific way. 
var inRangeOfRick = function(item) {
	var rickTop = rick.offsetTop;
	var rickLeft = rick.offsetLeft;
	var itemTop = item.elem.offsetTop;
	var itemLeft = item.elem.offsetLeft;
	if(item.elem.childElementCount > 0 && (Math.abs(rickTop - itemTop) < 35) && (Math.abs(rickLeft - itemLeft) < 35)) {
		item.elem.removeChild(item.elem.childNodes[0]);
		if(item.lastFix === "drugs" && lastFix === "booze") {
			intoxication *= 1.75;
		} else if(item.lastFix === "portalGun") {
			portalGunParts += item.portalGunPartsFound;
// --------------- CHARACTER Initializer -----------------------			
		} else if(item.lastFix === "squanchy") {
			if (squanchyVisits < 1) {
				squanchy.dialog(squanchy.interact1);
			} else { squanchy.dialog2(squanchy.interact2);}
		} else if (item.lastFix === "birdPerson") {
			if (birdPersonVisits < 1) {
				birdPerson.dialog(birdPerson.interact1);
			} else {birdPerson.dialog2(birdPerson.interact2);}
		} else if (item.lastFix === "jerry") {
			if (jerryVisits < 1) {
				jerry.dialog(jerry.interact1);
			} else {jerry.dialog(jerry.interact2);}
// ------------------------------------------------------------			
		} else {intoxication += item.intoxIncrease};
		lastFix = item.lastFix;
		item.rickInRange = true;
	} else {item.rickInRange = false};
	if(item.elem.childElementCount < 1 && (Math.abs(rickTop - itemTop) > 40) && (Math.abs(rickLeft - itemLeft) > 40)) {
		randomItem(item);
	};
	if(partsBehindHardwareIntel) {
		if(rickTop > 339 && rickTop < 401 && rickLeft > 50 && rickLeft < 110) {
			$(document).keydown(function(event) {
				var keycode = (event.keyCode ? event.keyCode : event.which);
				if(keycode == '80' && partsBehindHardwareIntel) {
					alert("You found a part that you can use to repair part of your portal gun!");
					portalGunParts++;
					partsBehindHardwareIntel = false;
					$(portGunMeter).attr('value', portalGunParts);
				}
			})
		}
	}
	if(partsAtSmokeShop) {
		if(rickTop > 69 && rickTop < 131 && rickLeft > 379 && rickLeft < 441) {
			$(document).keydown(function(event) {
				var keycode = (event.keyCode ? event.keyCode : event.which);
				if(keycode == '80' && partsAtSmokeShop) {
					alert("Cashier: You must be Rick. A shaggy looking fox with crusty elbows and foam from the mouth wanted me to give you this.\n\nMessage: Next time you go halfsies on a BFF bracelet, you better mean it.\nDon't ask me for anymore help, and have fun with your bird bitch.");
					partsAtSmokeShop = false;
					squanchyVisits += 2;
				}
			})
		}
	}
	if (birdPersonIntelWholeFoods) {
		if (rickTop > 400 && rickTop < 520 && rickLeft > 140 && rickLeft < 261) {
			mortyAtWholeFoods();
		}
	}
	if (birdPersonIntelWaterfront) {
		if (rickTop > 0 && rickTop < 80 && rickLeft > 649 && rickLeft < 741) {
			mortyAtWaterfront();
		}
	}
};


var teleport = function () {
	var teleportTo = function (left, top) {
		rick.style.left = left + 'px';
		rick.style.top = top + 'px';
	};
	
	if (portalGunParts === 4) {
		$(document).keydown(function(event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '84') {
				var dialogDiv = document.createElement('div');
				var dialogP = document.createElement('p');
				dialogP.style.cssFloat = 'left';
				var dialogImg = document.createElement('img');
				dialogImg.src = "../gamebook/assets/teleportSet.png";
				$(dialogP).html("Teleport to: ");
				dialogDiv.appendChild(dialogP);
				dialogDiv.appendChild(dialogImg);
				$(dialogDiv).dialog({
					title: "Portal Gun",
					buttons: {
						'Broadway & Granville': function() {
							$(this).dialog('close');
							teleportTo(170, 70);
						},
						'Broadway & Glenlake': function() {
							$(this).dialog('close');
							teleportTo(170, 400);
						},
						'Broadway & Thornday': function() {
							$(this).dialog('close');
							teleportTo(170, 670);
						},
						'Sheridan & Granville': function() {
							$(this).dialog('close');
							teleportTo(620, 70);
						},
						'Sheridan & Glenlake': function() {
							$(this).dialog('close');
							teleportTo(620, 370);
						},
						'Sheridan & Thorndal': function() {
							$(this).dialog('close');
							teleportTo(680, 670);
						}
					}
				});
			
			}
		})
	}
};

teleport();

$(document).ready(function () {
	$(document).keydown(function(key) {
		inRangeOfRick(brodGran);
		inRangeOfRick(brodGlen);
		inRangeOfRick(wintGlen);
		inRangeOfRick(wintGran);
		inRangeOfRick(sherGran);
		inRangeOfRick(sherGlen);
		inRangeOfRick(sherThor);
		inRangeOfRick(wintThor);
		inRangeOfRick(brodThor);		
		
		switch (parseInt(key.which, 10)) {
			case 37:
				$('#rick').animate({left: '-=30px'}, 'fast');
				intoxication -= 0.2;
				$(intox).attr("value", intoxication);
				break;
			case 38:
				$('#rick').animate({top: '-=30px'}, 'fast');
				intoxication -= 0.2;
				$(intox).attr("value", intoxication);
				break;
			case 39:
				$('#rick').animate({left: '+=30px'}, 'fast');
				intoxication -= 0.2;
				$(intox).attr("value", intoxication);
				break;
			case 40:
				$('#rick').animate({top: '+=30px'}, 'fast');
				intoxication -= 0.2;
				$(intox).attr("value", intoxication);
				break;
		};
		$(portGunMeter).attr('value', portalGunParts);
		if (intoxication > 10) {
			intoxication = 10;
		} else if (intoxication < 0) {
			life--;
			intoxication = 2.2;
//			alert("Wubba lubba dub dub!!\n\nRick is sober and realized what great pain he is in. His life decreased so he can continue.\n\nRick needs more booze to keep his pain at bay or he dies.");
			$(lifeMeter).attr('value', life);
		}
	});
});

//todo::: confirm taking drugs as they will have special affects


//todo: find why elements are hiding when rick is not close by. Answer) getBoundingClienRect was not working correctly. I used offset instead and it works better with scrolling 
// todo::: write a portal gun functiont too
// create a guy that plays Rock Paper Scisorss, and if Rick wins you get either drugs or portal gun part
// maybe mushrooms will make map rotate each move to enhance fuckedupness

//todo: create counter for how many times visited a character.
//Jerry: will help find a portal gun part and will give it to rick next time he sees him.

//todo: once portal gun is fixed, you can use it to travel between divs. 