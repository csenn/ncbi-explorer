import axios from 'axios'
import QueryStore from '../stores/QueryStore'
import dbs from '../config/dbs';


/*
    Takes 2 requests
        First esearch -> get ids
        Then esummary -> get all of the records corresponding to the ids
        TODO: Make look better
*/

export default function() {

    var queryState = QueryStore.getState();

    var dbName = queryState.query.db && queryState.query.db.name;
    if (!dbName || !queryState.query.text) return;

    return new Promise(function(resolve, reject) {

        axios.get('http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi', {
            params: {
                db: dbName,
                term: queryState.query.text,
                retmax: 15,
                retmode: 'json',
                restart: 15,
                sort: 'relevance'
            }
        }).then(function(response) {

            /* Turn into a string of params */
            var idArray = response.data.esearchresult.idlist;
            var ids = idArray.join(',');

            var options = {
                params: {
                    db: dbName,
                    retmode: 'json',
                    id: ids
                }
            };

            var esummary = dbs[dbName].esummary;
            if (esummary && esummary.transformer) {
                options.transformResponse = [ esummary.transformer ];
            }

            axios.get('http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi', options)
                .then(function(response) {
                    resolve(response.data.result);
                }).catch(reject);
        }).catch(reject);

    });
}

