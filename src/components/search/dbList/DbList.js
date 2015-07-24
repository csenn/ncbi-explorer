import React from 'react';
import _ from 'lodash';
import Mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import dbs from '../../../config/dbs'
import SearchQueryActions from '../../../actions/QueryActions';
import SearchQueryStore from '../../../stores/QueryStore';


@connectToStores
class DbList extends React.Component{

    constructor() {
        super();
        this._getMenuItems = this._getMenuItems.bind(this);
        this._clickMenuItem = this._clickMenuItem.bind(this);
    }

    static getStores() {
        return [SearchQueryStore];
    }

    static getPropsFromStores() {
        return  SearchQueryStore.getState();
    }

    _getMenuItems() {
        var items = [];
        Object.keys(dbs).forEach(key => {
            var db = dbs[key];
            items.push(
                <div
                    className="db-item"
                    key={key}
                    onClick={_.partial(this._clickMenuItem, db)}>
                    {db.displayName}
                </div>
            );
        });
        return items;
    }

    _clickMenuItem(db) {
        SearchQueryActions.updateQueryDb(db);
        this.props.toggleDbListOpen();
    }

    render() {
        return (
            <div className="db-list">
                <div className="title">
                    Databases
                    <i className="material-icons close-icon" onClick={this.props.toggleDbListOpen}>close</i>
                </div>
                {this._getMenuItems()}
            </div>
        );
    }
}

export default DbList;