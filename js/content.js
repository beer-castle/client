function isLogin(input) {
  if(input == true) {
    $('#content').show()
    $('#register_form').hide()
    $('#login').hide()
    $('#sign_out').show()
    $('#login_click').hide()
    $('#register_click').hide()
    $('#google_signin').hide()
    $('#body-before-signin').show()
    $('#container-multimedia').hide()
  } else {
    $('#content').hide()
    $('#register_form').hide()
    $('#login').hide()
    $('#sign_out').hide()
    $('#login_click').show()
    $('#register_click').show()
    $('#google_signin').hide()
    $('#body-before-signin').hide()
  }
}

function getBeerOfTheDay () {
  $.ajax({
    url: `${baseURL}/beers/onday`,
    method: 'GET',
    data: {
      token: localStorage.getItem('token')
    }
  })
    .done(data => {
      $('#beerRow').hide()
      $('#beerDay').empty()
      $('#beerDay').show()
      $('#container-multimedia').show()
      $.ajax({
        url: `${baseURL}/pictures?search=${'beer'}`,
        method: 'GET',
        data: {
          token: localStorage.getItem('token')
        }
      })
        .done((picture) => {
          let picFound = picture.data[random()].assets.preview.url
          console.log(picFound)

          console.log(data)
      let beerInformation = `<div class="col-md-6">
      <img style="height:430px; width:100%" src="${picFound}">
      </div>
      <div class="col-md-6">
      <h5>Name:</h5> ${data.name} <br>
      <h5>Description:</h5> ${data.style.description} <br>
      <h5>Category:</h5> ${data.style.name}
      </div>`
      getYoutube(`Beer ${data.name}`)
      $('#beerDay').append(beerInformation)
        })
        .fail(error => {
          console.log(error)
        })
      
    })
    .fail(error => {
      console.log(error)
    })
}

function getBeerList () {
  $.ajax({
    url: `${baseURL}/beers/list`,
    method: 'GET',
    data: {
      token: localStorage.getItem('token')
    }
  })
    .done(data => {
      console.log(data)
      getBeerPicture(data, data)
      
    })
    .fail(error => {
      console.log(error)
    })
}

function random () {
  return Math.floor(Math.random()*20);
}

function getBeerPicture(name, beers) {
  $.ajax({
    url: `${baseURL}/pictures?search=${'beer'}`,
    method: 'GET',
    data: {
      token: localStorage.getItem('token')
    }
  })
    .done((data) => {
      console.log(data.data[random()].assets.preview.url)
      // return data.data[random()].assets.preview.url
      let beerlist =''
      for(let i=0; i<beers.length; i++) {
        beerlist += `<div class="col-md-3"> 
        <img style="height:180px; width: 250px" src="${data.data[random()].assets.preview.url}">
        ${beers[i].name} </div>`
        
      }
      $('#beerRow').append(beerlist)
    })
    .fail(error => {
      console.log(error)
    })
}

$(document).ready(function () {
  // let youtubePlayer = ``
  // $('#content').append(youtubePlayer);
  if(localStorage.getItem('token')){
    isLogin(true)
    
  }
  else {
    isLogin(false)
  }
})

function showContent() {
  event.preventDefault()
  if(localStorage.getItem('token')){
    $('#content').show()
    $('#register_form').hide()
    $('#login').hide()
    $('#sign_out').show()
    $('#login_click').hide()
    $('#register_click').hide()
    $('#google_signin').hide()
    $('#body-before-signin').show()
    $('#container-multimedia').hide()
    $('#beerRow').show()
    $('#beerDay').empty()
    $('#beerDay').hide()
  }
}