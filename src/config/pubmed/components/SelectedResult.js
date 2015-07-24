import './selectedResult.scss'

import React from 'react'
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
                    <div>{section.text}</div>
                </div>
            )
        });
    }

    _getAuthors() {
        var authors = parser.getAuthors(this.props.selectedResultDetails);
        if (!authors) return '';
        debugger;
        return authors.map(author => {
            return <Author author={author}/>
        });
    }

    render() {
        return (
            <div>
                <div className="authors">
                    {this._getAuthors()}
                </div>
                <div style={{fontSize: '18px', marginTop: '20px'}}>ABSTRACT</div>
                {this._getAbstract()}
            </div>
        );
    }
}

export default PubmedSelectedResult;
