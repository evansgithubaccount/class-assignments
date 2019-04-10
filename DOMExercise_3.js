document.querySelector('input.newToDo').value = ""

let list = document.querySelector('ul.list');

function addItem(){
	let newInput = document.querySelector("input.newToDo").value;
	newItem = document.createElement('li');
	newItem.innerHTML = newInput;
	list.appendChild(newItem);
	document.querySelector('input.newToDo').value = "";
}

document.querySelector('ul').addEventListener('click',function(arg){
		(arg.target).style.textDecoration = 'line-through';
		setTimeout(function(){(arg.target).parentNode.removeChild(arg.target)},1000)
	})