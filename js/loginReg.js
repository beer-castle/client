$(document).ready(function() {
    $('#content').append(`<form id="login" onsubmit="login()">
    Email:<br>
    <input type="text" name="email" id="email">
    <br>
    Password:<br>
    <input type="password" name="pwd" id="pw">
    <br><br>
    <input type="submit" value="Submit">
    </form> `)

    $('#login').submit(function() {
        event.preventDefault()

    })
})

function login() {
    console.log($('#email').val())
    console.log($('#pw').val())
    $.ajax({
        url: 'http://localhost:3000/users/login',
        method: 'POST',
        data: {
            email: $('#email').val(),
            password: $('#pw').val(),
            loginVia: 'website'
        }
    })
    .done(data => {
        localStorage.setItem('token', data.token)
    })
    .fail(err => {
        console.log(err)
    })
} 