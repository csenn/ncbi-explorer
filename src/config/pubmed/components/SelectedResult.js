import React from 'react'
import parser from '../utils/parser';

class PubmedSelectedResult extends React.Component {

	constructor() {
		super();
		this._getAbstract = this._getAbstract.bind(this);
	}

	_getAbstract() {
		var sections = parser.getAbstractSections(this.props.selectedResultDetails);
		if (!sections) return;
		return sections.map(section => {
			return (
				<div>
					<div>{section.label}</div>
					<div>{section.text}</div>
				</div>
			)
		});
	}

	render() {
		return (
			<div>
				<div>Abstract</div>
				{this._getAbstract()}
			</div>
		);
	}
}

export default PubmedSelectedResult;
