import React, {useEffect, useRef, useState} from "react"

export const MapComponent = (props) => {
    const ref = useRef();
    const [map, setMap] = useState();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center: props.center,
            zoom: props.zoom,
        });
    }, [props.center, props.zoom] );

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);
    // Add marker
    useEffect(() => {
        if (map) {
            map.setOptions({ center: props.center, zoom: 13 });
        }
        new window.google.maps.Marker({
            position: props.center,
            map
        });
    }, [map, props.center]);

    return <div ref={ref} id="map" className={'h-full'}/>;
}

export default MapComponent