$(document).ready(function() {   //makes sure that we wait for the page to load, before trying to change the html
    let list = $('ul.outputText');   //sets the variable 'list' to the list in the html with the class 'outputText'
    
    $('#allPosts').on('click',function(){   //when the element with the id 'allPosts' is clicked this function will run
        list.text("")   //clear the list
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){   //the referenced url is a page with a bunch of posts (which are all objects). the function takes in the argument 'posts', which has the computer make a list of all of the post objects on the page
            posts.forEach(function(post){   //the forEach function will run the below function for each post. We use an argument 'post' because we are now looking at each post individually.
                const li = $('<li>');   //create an <li> element and assign it to the variable 'li'
                li.text('Post' + post.id + ': ' + post.body)   //inside of the <li> element, put the text 'Post', then the id-property of the post object, then the string ':', and finally the body-property of the post object
                list.append(li);   //put the complete <li> element onto the list
            })
        })
    })

    $('#postsTen').on('click', function(){   //when the element with the id 'postsTen' is clicked this function will run
        list.text("");   //clear the list
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){   //we reference the same posts page that we did in the first function
           posts.forEach(function(post){   //run the function for each post object on the page
               if(post.id == 10){   //if the id-property of the post object is 10, do the following
               const li = $('<li>');   //create an <li> element, and assign it to the variable 'li'
               li.text('Post 10: ' + post.body)   //add the body-property of the post object to the <li> element that we created
               list.append(li)   //add the <li> element to the list
           }})
        })
    })

    $('#comments12').on('click', function(){   //when the element with the id 'postsTen' is clicked this function will run
        list.text(""); 
        $.get('http://jsonplaceholder.typicode.com/comments', function(comments){   //this time we are looking for comments, so we reference the comments page of the website.
            comments.forEach(function(comment){   //just like the posts, the comments are all objects. We want to look through all of the comments, so we use a forEach loop again.
                if(comment.postId === 12){   //if the postId-property of the comment object is 12
                    const li = $('<li>');   //create an <li> element
                    li.text('Post 12 Comments: ' + comment.body)   //add the body-property of the comment to the <li> element
                    list.append(li);   //add the <li> element to the list
                }
            })
        })
    })

    $('#userTwoPosts').on('click', function(){   //when the element with the id 'userTwoPosts' is clicked this function will run
        list.text("");
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){   //we go back to the /posts page of the website
            posts.forEach(function(post){
                if(post.userId === 2){   //if the userId-property of the post object is equal to 2, do the following
                    const li = $('<li>');   //create an <li> element
                    li.text('Post from User 2: ' + post.body);   //add the body-property of the post to the <li> element
                    list.append(li);   //add the <li> element to the list
                }
            })
        })
    })

    $('#newPostID').on('click', function(){   //when the element with the id 'newPostID' is clicked this function will run
        list.text("");   //clear the list
        $.post('http://jsonplaceholder.typicode.com/posts',   //now we use the $.post jQuery function, because we want to create a new post object. SYNTAX: $.post('url', data that we want to add, function that says what we want to do after we add the data)
        {
            title: 'what',   //we want to add a new post object with title and body properties. The server will create an id for us
            body: 'que'
        },
        function(post){
            const li = $('<li>');   //create an <li> element
            li.text('New Post ID: ' + post.id)   //put the id-property of the post in the new <li> element
            list.append(li);   //add the <li> element to the list
        })
    })

    $('#replace12').on('click', function(){
        list.text("");   //clear the list
        $.ajax({   //jQuery doesn't have a $.put function, so we use the $.ajax function which is a catch all for any ajax method
            url: 'http://jsonplaceholder.typicode.com/posts/12',   //the url of the object that we want to change
            method: 'PUT',   //the ajax method that we want to use. Since we are only changing/replacing an object and not creating an entirely new object, we use PUT instead of PUSH
            dataType: 'json',   //the server will return a json object
            data: {id: 101},   //the data references the object that we are changing, in this case it is the post that we just created, which has an id of 101
            complete: function(data){   //taking in 'data' as an argument means that we are taking in the data that server returns to us in response to our PUT
                console.log(data)   //console log the data object.
                const li = $('<li>');   //create an <li> element
                li.text('Response JSON: ' + (data.responseJSON).toSource())   //inside of the 'data' object that the server sent to us, there is a property called 'responseJSON' (open InspectElement in your browser and go to console). The .toSource() is needed because trying to print an object/property in html will result in [object Object],  the .toSource() gives us the text inside of the object.
                list.append(li);   //add the <li> element to the list
            }
        })
    })

    $('#update12Title').on('click', function(){
        list.text("");
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/posts/12',   //the url of the thing that we want to update
            method: 'PUT',   //we use PUT because we are only updating a post, not creating a new post.
            dataType:'json',   //the server will send back data as a json
            data: {title: 'new title'},   //what we want to change about the post
            complete: function(data){   //same as the 'complete:' from the previous function
                console.log(data);
                const li = $('<li>');
                li.text('Response JSON: ' + (data.responseJSON).toSource())
                list.append(li);
            }
        })
    })

    $('#delete12').on('click', function(){
        list.text("");
        $.ajax({
            method: 'DELETE',   //we wanna delete something
            url: 'http://jsonplaceholder.typicode.com/posts/12',   //this is the thing that we wanna delete
            complete: function(data){
                console.log(data);
                const li = $('<li>Post 12 Deleted</li>')   //send the text 'Post 12 Deleted' to the list
                list.append(li);
            }
        })
    })

    $('#postList').on('click', function(){
        list.text("")
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){   //this part is pretty much the same as the code from the first problem
            posts.forEach(function(post){
                const li = $('<li>');
                li.text('Post' + post.id + ': ' + post.body)
                list.append(li);
                li.addClass((post.id).toString())   //add a class to the <li> element that is equal to the id-property of the post, turned into a string.
            })
        })
        $('ul').on('click',function(event){   //similar to the code from the ToDo list assignment. when we click on any part of the list, the below code will run
            $('li').css('display', 'none');   //hide all of the posts. We change the css of every currently existing <li> element to display: none. Note that this doesn't delete the elements, it just makes them invisible to the computer. (so idk if this is the most memory efficient way to do this, but whtvr)
            let chosenPost = event.target;   //set the variable 'post' to event.target, aka the list item that we clicked.
            $.get('http://jsonplaceholder.typicode.com/comments', function(comments){   //get the comments from the url again
            comments.forEach(function(comment){   //run the code for each comment
                if(chosenPost.className == (comment.postId).toString()){   //if the className of 'chosenPost' (the list item that we clicked on) is equal to the postId-property of the comment, do the following
                    console.log('it works');   //hooray
                    const li = $('<li>');  //create a new <li> element
                    li.text('Post' + chosenPost.id + ' comments: ' + comment.body);   //add the body-property of the comment  to the <li> element
                    list.append(li);   //add it to the list
                }
            })
        })
        })
    })
})


//jimmy, pls halp us.