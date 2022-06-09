import React, {useEffect, useRef, useState} from "react"
// import MarkerClusterer from "@googlemaps/markerclusterer";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export const MapComponent = (props) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
        center: props.center ,
        zoom: props.zoom
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const clickFunction = (trg) => {
        return window.location = trg
    }

    const markers = props.data.map((location) => {
        const marker = new window.google.maps.Marker({
            position: location.node.location,
            label: location.node.text
        });
        // marker.addListener("click", clickFunction(location.node.path));
        window.google.maps.event.addListener(marker, 'click', function() {
            window.location.href = location.node.pathName;
            // alert(location.node.pathName);
        });
        return marker
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({map, markers});

    return null;

}
// export const MapComponent = (props) => {
//     const ref = useRef();
//     const [map, setMap] = useState();
//
//     useEffect(() => {
//         new window.google.maps.Map(ref.current, {
//             center: props.center,
//             zoom: props.zoom,
//         });
//     }, [props.center, props.zoom] );
//
//     useEffect(() => {
//         if (ref.current && !map) {
//             setMap(new window.google.maps.Map(ref.current, {}));
//         }
//     }, [ref, map]);
//     // Add marker
//     useEffect(() => {
//         if (map) {
//             map.setOptions({ center: props.center, zoom: props.zoom });
//         }
//         new window.google.maps.Marker({
//             position: props.center,
//             map
//         });
//     }, [map, props.center]);
//
//     return <div ref={ref} id="map" className={'h-full'}/>;
// }

export default MapComponent