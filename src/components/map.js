import React, { Component } from 'react'

import Iframe from "react-iframe"

class Map extends Component {
	render() {
		return (
			<Iframe
				url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194665.11702719072!2d-111.91840885223054!3d40.32809211241413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d975494ad288d%3A0xe55b532ce8a0eee4!2sSensuous+Sandwich!5e0!3m2!1sen!2sus!4v1539376979408"
				width="450px"
				height="450px"
				id="myId"
				className="myClassname"
				display="initial"
				position="relative"
				allowFullScreen
			/>
		)
	}
}

export default Map;