import './selectedResult.scss'

import React from 'react'
import parser from '../utils/parser'

class Panel extends React.Component {
    render() {
        return (
            <div style={{marginTop: '20px'}}>
                <div>{this.props.title}</div>
                {this.props.children}
            </div>
        );
    }
}



class MedgenSelectedResult extends React.Component {

    _getNames(result) {
        const names = parser.getNames(result);
        return names.map(name => {
            return <span>{name.name}; </span>
        })
    }

    _getGenes(result) {
        const genes = parser.getGenes(result);
        return genes.map(gene => {
            return <span>{gene.name} ({gene.cytogenicLocation}); </span>
        })
    }

    _getDefinitions(result) {
        const defs = parser.getDefinitions(result)
        return defs.map(def => {
            return <div>{def.text}</div>
        });
    }

    _getModesOfInheritance(result) {
        const modes = parser.getModesOfInheritance(result)
        return modes.map(mode => {
            return (
                <div>
                    <div>{mode.name}</div>
                    {mode.definition}
                </div>
            );
        });
    }

    _getClinicalFeatures(result) {
        const features = parser.getModesOfInheritance(result)
        return features.map(feature => {
            return (
                <div>
                    <div>{feature.name}</div>
                    {feature.definition}
                </div>
            );
        });
    }


	render() {

        var summary = this.props.selectedResultSummary;
        var result = summary
            && summary.conceptmetaJson
            && summary.conceptmetaJson.result;

        if (!result) return <div></div>;

        //console.log(JSON.stringify(summary));
        //console.log(summary);

		return (
			<div>

                <Panel title="Synonymns">
                    {this._getNames(result)}
                </Panel>

                <Panel title="Genes">
                    {this._getGenes(result)}
                </Panel>

                <Panel title="Defintions">
                    {this._getDefinitions(result)}
                </Panel>

                <Panel title="Modes of Inheritance">
                    {this._getModesOfInheritance(result)}
                </Panel>

                <Panel title="Clinical Features">
                    {this._getModesOfInheritance(result)}
                </Panel>


			</div>
		);
	}

}

export default MedgenSelectedResult;
