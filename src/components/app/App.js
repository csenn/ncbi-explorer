
import './app.scss'

import React from 'react';
import Mui from 'material-ui'
import Search from '../search/Search';

let ThemeManager = new Mui.Styles.ThemeManager();

class App extends React.Component {

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}

	render() {
		return <Search/>;
	}
}

App.childContextTypes = {
	muiTheme: React.PropTypes.object
};


export default App;


/*
	Notes

	MEDGEN
	http://www.ncbi.nlm.nih.gov/portal/utils/autocomp.fcgi?dict=medgen_disease_name&q=abd

	PUBMED
	http://www.ncbi.nlm.nih.gov/portal/utils/autocomp.fcgi?dict=pm_related_queries_2&q=cancer


	//Dictionaries -> There must be more
	medgen_disease_name
	pm_related_queries_2
	mesh_suggestions

*/