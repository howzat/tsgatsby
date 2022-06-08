import * as React from "react"
import MainLayout from "../layout";
import {graphql, Link, useStaticQuery} from "gatsby";


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

    console.log({data})


    return (
        <MainLayout>
            <div className={'bg-red-500 p-6'}>
                <p>Hello</p>
                {
                    data.allLocationsJson.edges.map(({node: location}) => (
                        <p>
                            <Link to={location.pathName}
                                  key={location.pathName}>
                                {location.text}
                            </Link>
                        </p>
                    ))
                }
            </div>
        </MainLayout>
    )
}

export default IndexPage

