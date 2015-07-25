import axios from 'axios'
import QueryStore from '../stores/QueryStore';
import dbs from '../config/dbs';

export default function(id) {

    var dbName = QueryStore.getState().query.db.name;

    var options = {
        params: {
            db: dbName,
            id: id,
            retmax: 15,
            retmode: 'xml',
            restart: 15,
            sort: 'relevance'
        }
    };

    var efetch = dbs[dbName].efetch;

    if (efetch) {
        if (efetch.skip) return Promise.resolve();
        if (efetch.transformer) {
            options.transformResponse = [ efetch.transformer ];
        }
    }

    return axios.get('http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi', options);

};

