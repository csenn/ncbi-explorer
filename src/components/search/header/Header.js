import React from 'react';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import SearchQueryActions from '../../../actions/QueryActions';
import ResultListActions from '../../../actions/ResultListActions'
import QueryStore from '../../../stores/QueryStore';
//import ResultListStore from '../../../stores/ResultListStore';
import Button from '../../common/button/Button'

@connectToStores
class SearchHeader extends React.Component {

    static getStores() {
        return [QueryStore];
    }

    static getPropsFromStores() {
        return QueryStore.getState()
    }

    constructor() {
        super();
        this._textChange = this._textChange.bind(this);
    }

    /* http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js */
    componentWillMount() {
        this._updateQueryText = _.debounce(this._updateQueryText, 300);
    }

    _updateQueryText(text) {
        SearchQueryActions.updateQueryText(text)
        ResultListActions.fetch();
        // setTimeout(() => {
        //     ResultListStore.performSearch();
        // })
    }

    _textChange(e) {
        this._updateQueryText(e.target.value);
    }

    render() {
        var dbName = this.props.query.db && this.props.query.db.displayName;
        var searchText = 'Search ' + dbName;
        return (
            <div className="header">
                <div className="left">
                    <div className="db-name" onClick={this.props.toggleDbListOpen}>
                        <i className="material-icons menu-icon">menu</i>
                        <span className="db-label">
                            {dbName}
                        </span>
                    </div>
                </div>
                <div className="right">
                    <i className="material-icons md-24 search-icon">search</i>
                    <input
                        className="search-input"
                        placeholder={searchText}
                        onChange={this._textChange}/>
                    <span className="advanced-query" onClick={this.props.toggleAdvancedQuery}>
                        Advanced Query Builder
                        <i className="material-icons arrow-icon">keyboard_arrow_down</i>
                    </span>
                </div>

            </div>
        );
    }

}

export default SearchHeader;