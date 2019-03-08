var tag = document.createElement('script');
        
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '430',
    width: '100%',
    playerVars: {
                autoplay: 1,
                loop: 1,
                controls: 0,
                showinfo: 0,
                autohide: 1,
                modestbranding: 1,
                vq: '720'},
    videoId: '4Ol3HHK2v5CARr2J',
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
    });
}

// 3. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
}

var done = false;
function onPlayerStateChange(event) {
    
}
function stopVideo() {
    player.stopVideo();
}

function getYoutube(name) {
    console.log(name)
    $.ajax({
      url: `${baseURL}/videos?search=${name}`,
      method: 'GET',
      data: {
        token: localStorage.getItem('token')
      }
    })
      .done((data) => {
        console.log(data.videoId)
        player.loadVideoById(data.videoId)
      })
      .fail(error => {
        console.log(error)
      })
  }