import React from "react"
import LocationComponent from "../components/Location/Location";
import {graphql} from "gatsby";

export const LocationTemplate = (props) => {
    return (
        <div style={{backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')"}}>
            <LocationComponent data={pageQuery}/>
            {/*<LocationComponent data={{name: 'Location 1'}}/>*/}
        </div>
    )
}

export default LocationTemplate

export const pageQuery = graphql`
    query LocationQueryByPathName($pathName: String!) {
            locationsJson(pathName: {eq : $pathName}) {
                id
                text
                description
                latLng
                pathName
        }
    }`
