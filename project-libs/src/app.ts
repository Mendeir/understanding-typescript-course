import axios from "axios";
import * as L from "leaflet";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const mapDiv = document.getElementById("map")!;

mapDiv.innerHTML = "";

const map = L.map(mapDiv).setView([51.505, -0.09], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

let marker: L.Marker;

function searchAddressHandler(event: Event) {
    event?.preventDefault();
    const enteredAddress = addressInput.value;

    axios
        .get(
            `https://nominatim.openstreetmap.org/search?q=${encodeURI(enteredAddress)}&format=json`,
        )
        .then((response) => {
            const data = response.data[0];
            const lat = parseFloat(data.lat);
            const long = parseFloat(data.lon);

            // Create new coordinates object
            const coordinates = { lat, long };

            // Center the map on the location
            map.setView([coordinates.lat, coordinates.long], 16);

            // If we already have a marker, remove it
            if (marker) {
                map.removeLayer(marker);
            }

            // Add a new marker
            marker = L.marker([coordinates.lat, coordinates.long])
                .addTo(map)
                .bindPopup(data.display_name)
                .openPopup();
        })
        .catch((error) => {
            console.log(error);
            alert("Could not find the address. Please try again!");
        });
}

form?.addEventListener("submit", searchAddressHandler);

