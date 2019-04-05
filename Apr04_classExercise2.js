var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var Mike = players.find(function(player){
    return player.firstName == 'Mike';
})

var RBs = players.filter(function(player){
    return player.position == 'RB';
})

var lastname = players.map(function(player){
    return player.lastName
})

var fiveTDs = RBs.filter(function(player){
    return (player.touchdowns > 5);
})
var getNames = fiveTDs.map(function(player){
    return [player.firstName,player.lastName].join(' ');
})

var totalTDs = RBs.reduce(function(sum,current){
    return sum + current.touchdowns;
},0)


console.log(Mike)
console.log(RBs)
console.log(lastname)
console.log(totalTDs)
console.log(getNames)
