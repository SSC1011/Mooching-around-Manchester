/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

map = L.map("map").setView([53.4798,-2.22398], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//add markers
//let marker = L.marker([53.47, -2.22]).addTo(map);


// //const circle = L.circle([53.4, -2.2], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);


//spinningfields
const markerSOne = L.marker([53.479, -2.251]).addTo(map); //Opera House
markerSOne.bindPopup("<h3>Spinningfields - The Opera House.</h3>").openPopup();
const markerSTwo = L.marker([53.478, -2.251]).addTo(map); //The Blues Kitchen
markerSTwo.bindPopup("<h3>Spinningfields - The Blues Kitchen.</h3>").openPopup();
//Deansgate
let markerDOne = L.marker([53.479, -2.249]).addTo(map); //One Eight Six
markerDOne.bindPopup("<h3>Deansgate - One Eight Six.</h3>").openPopup();
let markerDTwo = L.marker([53.475, -2.246]).addTo(map); //The Bridgewater Hall 
markerDTwo.bindPopup("<h3>Deansgate - The Bridgewater Hall.</h3>").openPopup();
//Northern Quarter
let markerNQOne = L.marker([53.484, -2.235]).addTo(map); //Matt and Phred's
markerNQOne.bindPopup("<h3>Northern Quarter - Matt and Phred's.</h3>").openPopup();
let markerNQTwo = L.marker([53.483, -2.236]).addTo(map); //Day and Night Cafe
markerNQTwo.bindPopup("<h3>Northern Quarter - Day and Night Cafe.</h3>").openPopup();
//Piccadilly Gardens
let markerPGOne = L.marker([53.483, -2.235]).addTo(map); //Soup
markerPGOne.bindPopup("<h3>Piccadilly Gardens - Soup.</h3>").openPopup();
let markerPGTwo = L.marker([53.486, -2.235]).addTo(map); //The Royal Exchange Theatre
markerPGTwo.bindPopup("<h3>Piccadilly Gardens - The Royal Exchange Theatre.</h3>").openPopup();
//China Town
let markerCTOne = L.marker([53.478, -2.2480]).addTo(map); //Albert Hall
markerCTOne.bindPopup("<h3>China Town - Albert Hall.</h3>").openPopup();
let markerCTTwo = L.marker([53.485, -2.234]).addTo(map); //Band on the Wall
markerCTTwo.bindPopup("<h3>China Town - Band on the Wall</h3>").openPopup();

const popup = L.popup();

function onMouseOver(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You hoovered your mouse over " + e.latlng.toString())
        .openOn(map);
}

map.on('mouseOver', onMouseOver);