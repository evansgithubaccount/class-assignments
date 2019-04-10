var header = document.getElementsByTagName("header")
var section = document.querySelectorAll("section")


var current = document.querySelector('section.current')
console.log(current);
var afterCurrent = current.nextElementSibling
console.log(afterCurrent);
var beforeHTwo = current.previousElementSibling
console.log(beforeHTwo);
var what = document.querySelector('h2.highlight').parentNode.parentNode
console.log(what);
var who = (Array.from(document.querySelectorAll('section > h2'))).map(function(flomo){return flomo.parentNode})
console.log(who);