var xml2js = require('xml2js');

export default function(xml) {
    var jsonResult;
    xml2js.parseString(xml, { normalizeTags: true }, function(err, result) {
        jsonResult = result;
    });
    return jsonResult;
}