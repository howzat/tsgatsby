import React from "react"
import LocationComponent from "../components/Location/Location";
import {graphql} from "gatsby";

export const LocationTemplate = (props) => {
	return (
			<div style={{backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')"}}><LocationComponent data={props.data}/></div>
	)
}

export default LocationTemplate

// export const pageQuery = graphql`
// 	query LocationByPath($path: String!) {
// 		allLocationsData($path: {eq: $path}) {
// 			text
// 			description
// 			latLng
// 		}
// 	}`
