import React, {useEffect, useRef, useState} from "react"

export const MapComponent = (props, {children}) => {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center: props.center,
            zoom: props.zoom,
        });
    }, [props.center, props.zoom]);

    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    return (
        <>
            <div ref={ref} id="map" className={'h-full'}/>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return React.cloneElement(child, {map});
                }
            })}
        </>
    )
}

export default MapComponent