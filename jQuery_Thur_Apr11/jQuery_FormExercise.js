$(document).ready(function() {
    $('#submit').on('click', function(){   //when the user clicks on an element with the id 'submit', this function will run
        const name = $('#name');   //set variable 'name' equal to the element with the id 'name'
        const email = $('#email');   //set variable 'email' equal to the element with the id 'email'
        const phone = $('#phone');   //set variable 'phone' equal to the element with the id 'phone'
        const required = [name, email, phone];   //create an array made up of the three elements that we just defined. Note that these are the whole elements, not just the text that was entered into the element
        for(let i=0;i<required.length;i++){   //iterate through the 'required' array
            if(required[i].val() === ""){   //if the value of the element is "" (aka, if there is no text in the element), do the following
                $('#message').text('Please Fill Out Required Fields').addClass('warning');   //add the text 'Please fill out required fields' to the element with the id 'message', then give it a class of 'warning'
                required[i].prev().addClass('warning');   //go to the specified element in the array, then go up to the previous element in the html, which in this case is the input's <label>, and give it a class of 'warning'
             }
             else{required[i].prev().removeClass('warning')}   //if the element isn't empty (aka, text has been entered), remove the class of warning from the elements <label>
        }
        if(!$('#form label').hasClass('warning')){   //if none of the <label> elements inside of the form have the class 'warning', do the following
            $('#form').remove();   //remove the form
            $('h2').text('Thanks for the feedback!');   //change the text in the <h2> element to 'Thanks for the feedback'
        }
    })
})