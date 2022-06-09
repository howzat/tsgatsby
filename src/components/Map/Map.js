import React, {useEffect, useRef} from "react"

export const MapComponent = (props) => {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center: props.center,
            zoom: props.zoom,
        });
    }, [props.center, props.zoom] );

    return <div ref={ref} id="map" className={'h-full'}/>;
}

export default MapComponent