var x=document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
    x.innerHTML="Geolocation is not supported by this browser.";}
}

function showPosition(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    latlon=new google.maps.LatLng(lat, lon)
    mapholder=document.getElementById('mapholder')
    mapholder.style.height='350px';
    mapholder.style.width='100%';

    console.log("lokasi ==>", latlon.lat)
    var myOptions= {
        center: latlon,
        zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
  
    console.log("hasil cari lokasi ===>", myOptions.center)
    var map = new google.maps.Map(document.getElementById("mapholder"),myOptions);
    var marker = new google.maps.Marker({
        position:latlon,
        map:map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/info.png'
    });


    var infoMyPoint = new google.maps.InfoWindow({
        content: 'My Current Location'
    })
    console.log("hasil beri informasi", infoMyPoint)
    marker.addListener('click', function() {
        infoMyPoint.open(map, marker)
    })

    var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location : myOptions.center,
                radius : 1000,
                type : [ 'bar' ]
            }, callback);
    console.log("hasil service ===>", service)

    function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
        var place = results[i];
        //createMarker(results[i]);
        addMarkerWithTimeout(results[i], i*400)
    }
    }
    }

    var markers =[]
    function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position.geometry.location,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'http://maps.google.com/mapfiles/ms/icons/bar.png'
          }));
        }, timeout);

        console.log(markers)
        // google.maps.event.addListener(marker, 'click', function() {
        //         infowindow.setContent(place.name);
        //         infowindow.open(map, this);
        // });
    }    
}



function showError(error) {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="An unknown error occurred."
      break;
    }
}