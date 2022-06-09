import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import MainLayout from "../layout";
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import MapComponent from "../components/Map/Map";

// markup
const IndexPage = () => {

    const data = useStaticQuery(graphql`
        query LocationsQuery {
            allLocationsJson{
                edges{
                    node{
                        pathName
                        text
                        location {
                            lat
                            lng
                        }
                    }
                }
            }
        }`)

    const apiKey = 'AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I' // @todo - random Google Maps API (used to demo capabilities - swap out when you can)

    const render = (status) => {
        if (status === Status.LOADING) return <p>Loading...</p>;
        if (status === Status.FAILURE) return <p>Error...</p>;
        return null;
    };

    const center = {lat: 50.86487099999999, lng: -0.09649499999999867}
    const zoom = 15

    return (
        <MainLayout>
            <div className={''}>
                {
                    data.allLocationsJson.edges.map(({node: location}) => (
                        <p key={location.pathName}>
                            <Link to={location.pathName}>
                                {location.text}
                            </Link>
                        </p>
                    ))
                }
            </div>
            <Wrapper apiKey={apiKey} render={render}>
                <MapComponent data={data.allLocationsJson.edges} center={center} zoom={zoom}/>
            </Wrapper>
            <div id="map" className={'h-screen'}/>

        </MainLayout>
    )
}

export default IndexPage

