import React from "react"
import LocationComponent from "../components/Location/Location";
import {graphql} from "gatsby";
import MainLayout from "../layout";

export const LocationTemplate = ({data}) => {
    return (
        <MainLayout>
            <div style={{
                backgroundImage: "url('https://source.unsplash.com/sp-p7uuT0tw')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <LocationComponent data={data.locationsJson}/>
            </div>
        </MainLayout>
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
