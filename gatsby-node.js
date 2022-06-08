const path = require('path');
const data = require('./src/data/locations.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;

	// Your component that should be rendered for every item in JSON.
	const template = path.resolve(`./src/templates/location.js`);

	// Create pages for each JSON entry.
	data.forEach( location => {

		createPage({
			path: location.pathName,
			component: template,
			context: {
				pathName: location.pathName,
				text: location.text,
				description: location.description,
				latLng: location.latLng,
				image: location.image
			}
		});
	});
};