import './button.scss'
import React from 'react'

class Button extends React.Component {
	render() {
		return (
			<button className="grey-btn" onClick={this.props.onClick} style={this.props.style}>
				{this.props.text}
			</button>
		);
	}
}

export default Button;