var map;
var lat = 36.3212565;
var lng = 59.5404382;
var flag = true;

function myMap() {
    // Map Option
    var option_map = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 15
    };
    // Create Map 
    map = new google.maps.Map(document.getElementById("map"), option_map);

    function addMarker(lat, lng) {
        var option_marker = {
            position: new google.maps.LatLng(lat, lng),
            draggable: true,
        };
        var marker = new google.maps.Marker(option_marker);
        marker.setMap(map);
        return marker;
    }

    function distance(lat1,lat2,lng1,lng2){
        return Math.sqrt((lat2-lat1)**2 + (lng2-lng1)**2);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            map.setCenter(new google.maps.LatLng(lat, lng));
            marker_start = addMarker(lat, lng);

            google.maps.event.addListener(marker_start, 'click', function(){
                var message = document.getElementById("alert");
                var start_lat = marker_start.getPosition().lat();
                var start_lng = marker_start.getPosition().lng();
                message.innerHTML = "لطفا آدرس مقصد را وارد فرمایید."

                if (flag===true){
                    map.setCenter(new google.maps.LatLng(lat, lng));
                    marker_end = addMarker(lat, lng);
                    flag = false;

                    google.maps.event.addListener(marker_end, 'click', function(){
                        var end_lat = marker_end.getPosition().lat();
                        var end_lng = marker_end.getPosition().lng();
                        var price = distance(start_lat,end_lat,start_lng,end_lng) * 500;
                        message.innerHTML = "درخواست سفر شما ثبت شد. هزینه سفر شما " + Math.round(price) + " هزار تومان می باشد.";
                    });
                }
            });
        });

    }
    else {
        alert("Geolocation is not supported by this browser!");
    }

}