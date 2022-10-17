function successCallback(position) {
    console.log(position);
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