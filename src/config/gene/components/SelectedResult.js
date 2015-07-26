import './selectedResult.scss'

import React from 'react'
import _ from 'lodash'
import parser from '../utils/parser';
//import Author from '../../common/components/Author'


class Panel extends React.Component {
    render() {
        return (
            <div style={{marginTop: '20px', fontSize:'15px', lineHeight:'1.4em'}}>
                <div  style={{fontSize:'17px', fontWeight:'200'}}>{this.props.title}</div>
                {this.props.children}
            </div>
        );
    }
}


class GeneSelectedResult extends React.Component {

    constructor() {
        super();
        //this._getAbstract = this._getAbstract.bind(this);
        //this._getAuthors = this._getAuthors.bind(this);
    }

    _getSummary(summary) {
        console.log(summary);

        var genomicinfo = _.head(summary.genomicinfo)
        return (
            <div>
                <Panel title="Official Symbol">
                    {summary.nomenclaturesymbol}
                </Panel>

                <Panel title="Organism">
                    {summary.organism.scientificname} ({summary.organism.commonname})
                </Panel>

                <Panel title="Chromosome">
                    {genomicinfo.chrloc}
                </Panel>

                <Panel title="Start">
                    {genomicinfo.chrstart}
                </Panel>

                <Panel title="Stop">
                    {genomicinfo.chrstop}
                </Panel>

                <Panel title="Exxon Count">
                    {genomicinfo.exoncount}
                </Panel>


                <Panel title="Aliases">
                    {summary.otheraliases}
                </Panel>

                <Panel title="Summary">
                    {summary.summary}
                </Panel>

            </div>
        )
    }

    render() {
        var summary = this.props.selectedResultSummary;
        if (!summary || _.isEmpty(summary)) return <span>Loading</span>;
        return (
            <div>
                {this._getSummary(summary)}
            </div>
        );
    }
}

export default GeneSelectedResult;
