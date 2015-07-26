import './resultListItem.scss'

import React from 'react'

class GeneResultListItem extends React.Component {

    constructor() {
        super();
        //this._getAuthors = this._getAuthors.bind(this);
    }

    _getAuthors() {
        // if (!this.props.result.authors) return;
        // var names = _.pluck(this.props.result.authors, 'name');
        // return  <span>{names.join(', ')}</span>
    }

    render() {
        var result = this.props.result;
        return (
            <li onClick={this.props.onClick}>
                <div className="title-text">
                    {result.name} - <span style={{fontSize:'15px'}}>{result.description}</span>
                </div>
                <div className="description-text">
                    {result.summary}
                </div>
                <div>
                    {result.organism && result.organism.scientificname}
                    <span style={{float:'right'}}>
                        {result.maplocation}
                    </span>
                </div>
            </li>
        );
    }

}

export default GeneResultListItem;
