import React from "react"
import "../assets/css/main.css"

import SiteNavigation from "../components/Nav/Nav"

const MainLayout = (props) => {
	return (
			<>
				<SiteNavigation/>
				{props.children}
			</>
	)
}
