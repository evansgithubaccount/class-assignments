$(document).ready(function() {   //makes sure that the js will only run after the html has loaded
$('input.newToDo').val("");   //clears the input box when the page reloads (goes to <input> element and sets its value to empty quotations, which clears the value)

let list = $('ul.list');   //sets the variable 'list' to the <ul> element with the class of 'list'

$('button.newToDo').on('click', function(){   //when the user clicks on a <button> element with the class 'newToDo', this function will run
    if($('input.newToDo').val() != ""){   //only run if the text box isn't empty
    let newText = $('input.newToDo').val();   //gets the value of the text in the input box and assigns it to the variable 'newText'
	let newItem = $('<li>').text(newText);   //creates a new <li> element and changes its text to 'newText' (the text that was in the input box).
	list.append(newItem)   //adds the new <li> element (newItem) onto the list
    $('input.newToDo').val("");   //clears the input box
    }
})

$('ul').on('click',function(event){   //when the user clicks on any part of the list, this function will run
		$(event.target).css('text-decoration', 'line-through');   //event.target references the elemtent inside of the list that triggered the event. We then change its css to give it a strikethru
		setTimeout(function(){$(event.target).remove()},1000)   //the element that triggered event is removed after 1000ms
    })


//the below code isn't necessary to complete the assignment, but it allows the user to press the enter key to submit text to the list

$('input.newToDo').keyup(function(event){   //when the user presses a key on the keyboard, run this function
    if(event.which === 13){   //only run if the key that was pressed was the 'Enter' key (which has a value of 13 in JS) and the text box isn't empty.
    let newText = $('input.newToDo').val();   //gets the value of the text in the input box and assigns it to the variable 'newText'
	let newItem = $('<li>').text(newText);   //creates a new <li> element and changes its text to 'newText' (the text that was in the input box).
	list.append(newItem)   //adds the new <li> element (newItem) onto the list
    $('input.newToDo').val("");   //clears the input box
    }
})
})