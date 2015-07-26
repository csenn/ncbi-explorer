import './resultListItem.scss'

import React from 'react'

class GeneResultListItem extends React.Component {

    constructor() {
        super();
        //this._getAuthors = this._getAuthors.bind(this);
    }

    _getLocation(result) {
        if(!result.maplocation) return '';
        return <span> - {result.maplocation}</span>;
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
                <div style={{marginTop:'5px', fontSize: '13px'}}>
                    {result.organism && result.organism.scientificname}
                    {this._getLocation(result)}
                </div>
            </li>
        );
    }

}

export default GeneResultListItem;
