function waktuSholat(latitude, longitude) {
    fetch('http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=2')
        .then(response => response.json())
        .then(function(response) {
            let date = new Date();
            let today = date.getDate() - 1;
            console.log(response.data[today]);
        });
}


function successCallback(position) {
    waktuSholat(position.coords.latitude, position.coords.longitude);
}

function errorCallback() {
    alert('posisi tidak dapat diakses');
}



function userLocation() {
    if (!navigator.geolocation) {
        alert("browser anda tidak mendukung geolocation")
    } else {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }
}

function index() {
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Waktu Sholat';

    app.appendChild(h3);

    userLocation();
}
index();