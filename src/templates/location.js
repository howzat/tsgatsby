import React from "react"
import LocationComponent from "../components/Location/Location";
import {graphql} from "gatsby";

export const LocationTemplate = ({data}) => {
    return (
        <div style={{backgroundImage: "url('https://source.unsplash.com/sp-p7uuT0tw')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <LocationComponent data={data.locationsJson}/>
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
                image
                pathName
        }
    }`
