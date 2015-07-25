
export default function(escapedHTML) {
    if (!escapedHTML) return '';
    return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/(\r\n|\n|\r)/gm,"");
}