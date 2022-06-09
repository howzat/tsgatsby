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
                    }
                }
            }
        }`)

    const apiKey = 'AIzaSyBCQuT-8U2-wMIB5shc1aK2kc9knsfLdGg' // @todo - Watson\'s Google Maps API (used to demo capabilities - swap out when you can)

    // const render = (status) => {
    //     switch (status) {
    //         case Status.LOADING:
    //             return 'Spinner'
    //         case Status.FAILURE:
    //             return 'Error'
    //         case Status.SUCCESS:
    //             return <MapComponent data={data.allLocationsJson.edges}/>
    //     }
    // };

    const center = {lat: 50.86487099999999, lng: -0.09649499999999867}
    const zoom = 16

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
            <Wrapper apiKey={apiKey}>
                <div className={'h-screen'}>
                    <MapComponent data={data.allLocationsJson.edges} center={center} zoom={zoom}/>
                </div>
            </Wrapper>
        </MainLayout>
    )
}

export default IndexPage

