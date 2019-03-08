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

    

    $('#content').append(`<form id="register_form" onsubmit="register()">
    <div class="container">
      <h1>Register</h1>
      <hr>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="reg_email" required>
      <br>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="pwd" required>
      <br>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      <hr>
  
      <input type="submit" value="Submit"></input>
    </div>
    
    <div class="container signin">
      <p>Already have an account? <a id="sign_in">Sign in</a>.</p>
    </div>
    </form>`)

    $('#login').hide()
    $('#register_form').hide()

    $('#login_click').click(function() {
        $('#login').show()
        
    })

    $('#login').submit(function() {
        event.preventDefault()

    })

    $('#register_click').click(function() {
        $('#register_form').show()
        
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
    })
    .fail(err => {
        console.log(err)
    })
} 