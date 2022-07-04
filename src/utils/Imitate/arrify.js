// this file refer to the 3rd library --> https://github.com/sindresorhus/arrify

/**
 * Convert a value to an array
 * 
 * @param {*} value 
 */
export default function(value) {
    if(value === null || value === undefined) {
        return [];
    }

    if(Array.isArray(value)) {
        return value;
    }

    if(typeof value === 'string') {
        return [value];
    }

    if(typeof value[Symbol.iterator] === 'function') {
        return [...value];
    }

    return [value];
}
