import React, { Component } from 'react'

import Iframe from "react-iframe"

class Map extends Component {
	render() {
		return (
			<Iframe
				url= {this.props.location}
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