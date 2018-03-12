function Data() {

    let cityname = document.getElementById('cityname').value;
    console.log(cityname);

    let result = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=7edca5e94374bbf688174e890e849976&units=metric'

    const req = new XMLHttpRequest();

    req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
            console.log(req); 
            justcelsius(this.responseText);
            } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };

    req.open('GET', result, true);
    req.send(null);

    function justcelsius(place){
        place = JSON.parse(place);
        console.log(place);
        // then, put data in the html

        document.getElementById("temp").innerText = place.main.temp;

        document.getElementById("hum").innerText = place.main.humidity; 
        
    }
}
