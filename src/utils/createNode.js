/**
 * Convert a html string to a node
 * 
 * @param {string} template Html string
 * @param {object} attrString Html attributes of the outermost container
 * @param {string} container Define what element the outermost container is
 */
export default function(template, attr={}, container="div") {
    var box = document.createElement(container);
    
    for(var name in attr) {
        box.setAttribute(name, attr[name]);
    }

    box.innerHTML = template;

    return box;
}