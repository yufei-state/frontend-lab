/**
 * Generate random data
 * 
 * @param {*} min Minimum value or length
 * @param {*} max Maximum value or length
 * @param {string} type Desired data type, support: string、number
 * @param {number} decimal If type is number, could specify how many decimal places to keep
 */
export default function(min=0, max=100, type="number", decimal=0) {
    if(typeof arguments[2] !== 'string') {
        decimal = arguments[2];
        type = "number";
    }
    
    function numRandom(min, max, decimal) {
        if(decimal) {
            var result = (min + Math.random() * (max - min)).toFixed(decimal);
            return result.charAt(result.length - 1) === '0' ? result : Number(result);
        }
        return Math.round(min + Math.random() * (max - min));
    }
    
    function strRandom() {
        let string = '',
            long = numRandom(min, max),
            list = [
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+',
                '<', '>', '?', ',', '.', '/', '|', '`', '"', "'", ';', ':',
                '、',' ', '[', ']', '{', '}'
            ];
        
        for(var i = 0; i < long; i++) {
            var oLong = numRandom(0, list.length - 1);
            string += list[oLong];
        }
        return string
    }

    switch(type) {
        case "number":
            return numRandom(min, max, decimal);
        case "string":
            return strRandom();
        default:
            throw new Error("please input a valid data type");
    }
}
