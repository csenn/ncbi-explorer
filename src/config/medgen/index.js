import _ from 'lodash'
import ResultListItem from './components/ResultListItem'
import SelectedResult from './components/SelectedResult'
import xmlToJson from '../../utils/xmlToJson';
import unescapeHTML from '../../utils/unescapeHTML'

var medgen = {

	name: 'medgen',

	displayName: 'Med Gen',

	components: {
		ResultListItem: ResultListItem,
        SelectedResult: SelectedResult
	},

    esummary: {
        transformer: function(data) {
            var json = JSON.parse(data);
            var result = json.result;

            /* Sometimes returns an esummaryresult */
            if (!result) return json;

            Object.keys(result).forEach(key => {
                /* Wrap XML in single root */
                var str = '<result>' + unescapeHTML(result[key].conceptmeta) + '</result>';
                result[key].conceptmetaJson = xmlToJson(str);
            });

            return {
                header: result.header,
                result: result
            };
        }
    },

    efetch: { skip: true }

};


export default medgen;








/*

{
            "uid": "25355167",
            "pubdate": "2015 Mar 1",
            "epubdate": "2014 Oct 29",
            "source": "Cancer",
            "authors": [
                {
                    "name": "Bhatia S",
                    "authtype": "Author",
                    "clusterid": ""
                }
            ],
            "lastauthor": "Bhatia S",
            "title": "Genetic variation as a modifier of association between therapeutic exposure and subsequent malignant neoplasms in cancer survivors.",
            "sorttitle": "genetic variation as a modifier of association between therapeutic exposure and subsequent malignant neoplasms in cancer survivors ",
            "volume": "121",
            "issue": "5",
            "pages": "648-63",
            "lang": [
                "eng"
            ],
            "nlmuniqueid": "0374236",
            "issn": "0008-543X",
            "essn": "1097-0142",
            "pubtype": [
                "Journal Article",
                "Review"
            ],
            "recordstatus": "PubMed - indexed for MEDLINE",
            "pubstatus": "256",
            "articleids": [
                {
                    "idtype": "pubmed",
                    "idtypen": 1,
                    "value": "25355167"
                },

                {
                    "idtype": "pmcid",
                    "idtypen": 5,
                    "value": "pmc-id: PMC4339370;manuscript-id: NIHMS639294;embargo-date:2016/03/01;"
                }
            ],
            "history": [
                {
                    "pubstatus": "received",
                    "date": "2014/07/25 00:00"
                }
            ],
            "references": [
            ],
            "attributes": [
                "Has Abstract"
            ],
            "pmcrefcount": 0,
            "fulljournalname": "Cancer",
            "elocationid": "doi: 10.1002/cncr.29096",
            "viewcount": 223,
            "doctype": "citation",
            "srccontriblist": [
            ],
            "booktitle": "",
            "medium": "",
            "edition": "",
            "publisherlocation": "",
            "publishername": "",
            "srcdate": "",
            "reportnumber": "",
            "availablefromurl": "",
            "locationlabel": "",
            "doccontriblist": [
            ],
            "docdate": "",
            "bookname": "",
            "chapter": "",
            "sortpubdate": "2015/03/01 00:00",
            "sortfirstauthor": "Bhatia S",
            "vernaculartitle": ""
        },
*/