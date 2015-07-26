import _ from 'lodash'

/*
    This function allows you to move through
    a json object that was created from an XML
    object in a more convenient way. Check out
    the tests and mock for more info
*/

export default function(start, properties) {

    /* Make sure inputs are decent  */
    var firstProp = properties[0];

    if(!firstProp || !start[firstProp]) {
        return null;
    }

    /* Set inital value */
    var val = start[firstProp];

    function tryValue(item, prop) {
        if (_.isArray(item[prop])) {
            if (item[prop].length > 1) {
                throw new Error('This utility should never reach an array of length more then 1');
            }
            return _.first(item[prop])
        }
        return item[prop];
    }

    function iterate(element, index) {

        if (index === (properties.length-1)) {
            val =  element[properties[index]] || null;
            return;
        }

        val = tryValue(element, properties[index]);
        if (!val) return;

        index += 1;
        iterate(val, index)
    }

    iterate(start, 0);

    return val ? val : null;
}

