import React from "react"
import LocationComponent from "../components/Location/Location";

export const LocationTemplate = (props) => {
	return (
			<div style={{backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')"}}><LocationComponent data={props.data}/></div>
	)
}

export default LocationTemplate

