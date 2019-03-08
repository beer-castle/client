function getBeerOfTheDay () {
  $.ajax({
    url: `${baseURL}/beers/onday`,
    method: 'GET',
    data: {
      token: localStorage.getItem('token')
    }
  })
    .done(data => {
      console.log(data.name)
      getBeerPicture(data.name)
      getYoutube(`Beer ${data.name}`)
    })
    .fail(error => {
      console.log(error)
    })
}

function random () {
  return Math.floor(Math.random()*20);
}

function getBeerPicture(name) {
  $.ajax({
    url: `${baseURL}/pictures?search=${name}`,
    method: 'GET',
    data: {
      token: localStorage.getItem('token')
    }
  })
    .done((data) => {
      console.log(data.data[random()].assets.preview.url)
      // return data.data[random()].assets.preview.url
    })
    .fail(error => {
      console.log(error)
    })
}

$(document).ready(function () {
  getBeerOfTheDay()
  let youtubePlayer = `<div id="player"></div>`
  $('#content').append(youtubePlayer);
  if(localStorage.getItem('token')){
    $('#content').show()
    $('#register_form').hide()
    $('#login').hide()
    $('#sign_out').show()
    $('#login_click').hide()
    $('#register_click').hide()
    $('#google_signin').hide()
  }
  else {
    $('#content').hide()
    $('#register_form').show()
    $('#login').show()
    $('#sign_out').hide()
    $('#login_click').show()
    $('#register_click').show()
    $('#google_signin').show()
  }
})