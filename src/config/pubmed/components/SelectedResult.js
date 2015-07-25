import './selectedResult.scss'

import React from 'react'
import _ from 'lodash'
import parser from '../utils/parser';
import Author from '../../common/components/Author'

class PubmedSelectedResult extends React.Component {

    constructor() {
        super();
        this._getAbstract = this._getAbstract.bind(this);
        this._getAuthors = this._getAuthors.bind(this);
    }

    _getAbstract() {
        var sections = parser.getAbstractSections(this.props.selectedResultDetails);
        if (!sections) return '';
        return sections.map(section => {
            return (
                <div style={{marginTop: '10px'}}>
                    <div>{section.label}</div>
                    <div style={{fontSize:'15px'}}>{section.text}</div>
                </div>
            )
        });
    }

    _getAuthors() {
        var authors = parser.getAuthors(this.props.selectedResultDetails);
        if (!authors) return '';
        return authors.map(author => {
            return <span><Author author={author}/>, </span>
        });
    }

    render() {
        if (_.isEmpty(this.props.selectedResultDetails)) return <span>Loading</span>;
        return (
            <div>
                <div className="authors">
                    {this._getAuthors()}
                </div>
                <div style={{fontSize: '22px', marginTop: '40px'}}>ABSTRACT</div>
                {this._getAbstract()}
            </div>
        );
    }
}

export default PubmedSelectedResult;
