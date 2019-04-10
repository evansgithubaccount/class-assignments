
var list = document.getElementById('list')

list.children[1].innerHTML = 'Fair Trade Coffee'

list.children[3].remove

const whiz = document.createElement('li')
whiz.innerHTML = 'Cheese Whiz'
list.appendChild(whiz)

list.innerHTML = ""
const array = ['protein powder', 'muscle milk', 'power bars']
function add(){
	for(let i=0;i<array.length;i++){
		let addition = document.createElement('li');
		addition.innerHTML = array[i];
		list.appendChild(addition);
	}
}add();

list.children[1].setAttribute('class','important')