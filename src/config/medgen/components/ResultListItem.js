import React from 'react'

class MedgenSearchResult extends React.Component {

	render() {
		return (
			<li onClick={this.props.onClick}>
				{this.props.result.title}
			</li>
		);
	}

}

export default MedgenSearchResult;
