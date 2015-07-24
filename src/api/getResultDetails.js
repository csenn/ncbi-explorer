import axios from 'axios'
import QueryStore from '../stores/QueryStore';
import dbs from '../config/dbs';

export default function(id) {

    var dbName  = QueryStore.getState().query.db.name;

    return axios.get('http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi', {
        params: {
            db: dbName,
            id: id,
            retmax: 15,
            retmode: 'xml',
            restart: 15,
            sort: 'relevance'
        },
        transformResponse: [
            dbs.pubmed.parsers.efetch
        ]
    });

};

