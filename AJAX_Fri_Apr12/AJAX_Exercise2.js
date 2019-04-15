$(document).ready(function() {
let list = $('#outputList');
let pageTitle = $('#pageTitle');
let textBox = $('#textBox');

function findUser(username){
    return new Promise(function(resolve, reject){
        $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
            if(users.length)
            resolve(users[0]);
            else
            reject('User with name ' + username + ' not found');
        })
    })
}

function getUserPosts(user){
    return new Promise(function(resolve, reject){
        $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, function(posts){
            resolve(posts)
        })
    })
}

function getUserAlbums(user){
    return new Promise(function(resolve, reject){
        $.get('http://jsonplaceholder.typicode.com/albums?userId=' + user.id, function(albums){
            resolve(albums)
        })
    })
}

function showName(user){
    pageTitle.append('<b>Name: ' + user.name + '</b><br><br>')
}

function showPostTitles(posts){
    return new Promise(function(resolve, reject){
        posts.forEach(function(post){
            const li = $('<li>');
            li.text('Post: ' + post.title)
            li.addClass('post')
            list.append(li)
        })
    })
}

function showPostBody(posts){
    return new Promise(function(resolve, reject){
        posts.forEach(function(post){
            textBox.append('Body: ' + post.body + '<br>')
        })
    })
}

function showPostComments(post){
    return new Promise(function(resolve, reject){
        textBox.append('Comments:')
        $.get('http://jsonplaceholder.typicode.com/comments?postId=' + post.id, function(comments){
            comments.forEach(function(comment){
                const li = $('<li>');
                li.text(comment.body)
                list.append(li)
        })
    })
})}

function showAlbums(albums){
    return new Promise(function(resolve, reject){
        albums.forEach(function(album){
            const li = $('<li>');
            li.text('Album: ' + album.title)
            li.addClass('album')
            list.append(li)
        })
    })
}

function showUserItems(name){
    $('#outputList').val("");
    $('#textBox').val("");
    findUser(name)
        .catch(nameNotFound)
        .then(showName)
    findUser(name)
        .then(getUserPosts)
        .then(showPostTitles);
    findUser(name)
        .then(getUserAlbums)
        .then(showAlbums)
}

function nameNotFound(name){
    $('#outputList').val("");
    $('#textBox').val("");
    pageTitle.append(name)
}

$('button').on('click', function(){
    let userInput = $('input.loginInput').val();
    showUserItems(userInput);
    $('input.loginInput').val("");
})


$('#outputList').on('click', function(event){
    $('#outputList').val("");
    $('#textBox').val("");
    if((event.target).className == 'post'){
        let post = event.target;
        textBox.append('<b> Post Title: ' + post.title + '<br>');
        textBox.append('Body:' + post.body);
        textBox.append('<b>Comments:<br>')
        $.get('http://jsonplaceholder.typicode.com/comments?postId=' + post.id, function(comments){
            comments.forEach(function(comment){
                const li = $('<li>');
                li.text(comment.body)
                list.append(li)
            })
        })
    }
    else if((event.target).className == 'album'){
        let album = event.target;
        textBox.append('<b>')
    }
})

})