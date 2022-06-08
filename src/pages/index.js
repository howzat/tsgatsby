import * as React from "react"
import MainLayout from "../layout";
import {graphql, useStaticQuery} from "gatsby";


// markup
const IndexPage = () => {

	const data = useStaticQuery(graphql`
	query LocationsQuery {
		allLocationsJson{
			edges{
				node{
					path
					text
				}
			}
		}
	}`)

	console.log({data})


	return (
			<MainLayout>
				{
					data.allLocationsJson.edges.map( location => (
							<p key={location.path}>{location.text}</p>
					))
				}
			</MainLayout>
	)
}

export default IndexPage
