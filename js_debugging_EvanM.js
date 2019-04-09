var woolOwners = [
	{
		"master": 1
	},
	{
		"dame": 1
	},
	littleBoy = {
	  location: "down the lane",
	  name: "littleboy"
	}
  ];

  var totalBags = 0;
  
  var haveYouAnyWool = function() {
	for (var i = 0; i < woolOwners.length; i++) {
	totalBags = totalBags + i;
	}
	return (i);
};

  var bags = haveYouAnyWool();  
  
  function baabaaBlackSheep() {
	  console.log("BaaBaa BlackSheep have you any wool?");
	  if (bags > 0) {
		  console.log("yes sir, yes sir " + totalBags + " bags full");
	}
  }
  
  function oneForMy() {
	  for (var i = 0; i < 2; i++) {
		  people = Object.keys(woolOwners[i]);
		  var person = people.toString();
		  console.log("one for my " + person);
	  }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  var littleBoy = woolOwners[2];
  var boy = littleBoy.name;
  
  var whereHeLives = littleBoy.location;
  console.log("one for the " + boy + " that lives " + whereHeLives);