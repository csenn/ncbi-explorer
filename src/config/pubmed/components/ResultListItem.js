import './resultListItem.scss'

import React from 'react'

class MedgenSearchResult extends React.Component {

    constructor() {
        super();
        this._getAuthors = this._getAuthors.bind(this);
    }

    _getAuthors() {
        if (!this.props.result.authors) return;
        var names = _.pluck(this.props.result.authors, 'name');
        return  <span>{names.join(', ')}</span>
    }

    render() {
        return (
            <li onClick={this.props.onClick}>
                {this.props.result.title}
                <div className="authors">
                    {this._getAuthors()}
                </div>
            </li>
        );
    }

}

export default MedgenSearchResult;
