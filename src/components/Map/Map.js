import React, {useEffect, useRef, useState} from "react"
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export const MapComponent = (props) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
        center: props.center,
        zoom: props.zoom
    });

    // Add some markers to the map.
    const markers = props.data.map((location) => {
        const marker = new window.google.maps.Marker({
            position: location.node.location,
            label: location.node.text
        });
        window.google.maps.event.addListener(marker, 'click', function () {
            window.location.href = location.node.pathName;
        });
        return marker
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({map, markers});

    return null;

}

export default MapComponent