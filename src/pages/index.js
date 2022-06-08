import * as React from "react"
import MainLayout from "../layout";
import LocationComponent from "../components/Location/Location";
import locations from "../data/locations";
import {Link} from "gatsby";


// markup
const IndexPage = () => {
	return (
			<MainLayout>
				{
					locations.map(location => (
							// T1, T2, T3
							<p><Link to={location.path}>{location.text}</Link></p>
							// <LocationComponent key={location.latLng} />
							// <li key={location.latLng}>
							// 	<span>
							// 		<a href={`${location.latLng}`}>
							// 		</a>
							// 		<p>{location.description}</p>
							// 	</span>
							// </li>
					))
				}
			</MainLayout>
	)
}

export default IndexPage
