$(document).ready(function() {
    // $('#content').append(` `)

    getBeerList()
    
    // $('#content').append(``)

    $('#login').hide()
    $('#register_form').hide()

    $('#login_click').click(function() {
        $('#login').show()
        $('#register_form').hide()
        $('#google_signin').show()
    })

    $('#login').submit(function() {
        event.preventDefault()

    })

    $('#register_click').click(function() {
        $('#register_form').show()
        $('#login').hide()
    })

    $('#register_form').submit(function() {
        event.preventDefault()

    })

    $('#sign_in').click(function() {
        $('#register_form').hide()
        $('#login').show()
    })


})

function register() {
    console.log($('#email').val())
    console.log($('#pw').val())
    $.ajax({
        url: 'http://localhost:3000/users/register',
        method: 'POST',
        data: {
            email: $('#reg_email').val(),
            password: $('#pwd').val()
        }
    })
    .done(data => {
        $('#register_form').hide()
        $('#login').show()
    })
    .fail(err => {
        console.log(err)
    }) 
}

function login() {
    // console.log($('#email').val())
    // console.log($('#pw').val())
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
        isLogin(true)
    })
    .fail(err => {
        console.log(err)
    })
} 