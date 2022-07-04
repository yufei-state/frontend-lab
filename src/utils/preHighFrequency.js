/**
 * Prevent high frequency continuous events from triggering normally
 * 
 * @param {function} fn Events that need to be protected against high frequency continuous triggering
 * @param {number} timeStamp If the event is triggered again before the set time arrives, the delay will be restarted.
 * @param {boolean} immediate Whether the first trigger needs to be executed immediately
 */
export function debounce(fn, timeStamp=500, immediate=true) {
    let result, timer = null;
    
    function debounced() {
        // handle this event bind issue
        var context = this;
        var arg = arguments;

        if(timer) clearTimeout(timer);

        // handle the first trigger issue
        if(immediate) {
            var callNow = !timer;

            timer = setTimeout(() => {
                timer = null;
                immediate = true;
            }, timeStamp);

            if(callNow) {
                result = fn.apply(context, arg);
            }

            immediate = false;
        }else {
            timer = setTimeout(() => {
                result = fn.apply(context, arg);
                timer = null;
                immediate = true;
            }, timeStamp)
        }

        return result;
    }
    
    debounced.cancel = () => {
        // cancel the debounced
        clearTimeout(timer);
        timer = null;
    }

    return debounced;
}

/**
 * Prevent high frequency continuous events from triggering normally
 * 
 * @param {function} fn Events that need to be protected against high frequency continuous triggering
 * @param {number} timeStamp The minimum time required for the next trigger
 * @param {boolean} immediate Whether the first trigger needs to be executed immediately
 */
export function throttle(fn, timeStamp=500, immediate=true) {
    let result, canDo = true;
    
    return function() {
        // handle this event bind issue
        var context = this;
        var arg = arguments;

        if(!canDo) return;
        canDo = false;

        // handle the first trigger issue
        if(immediate) {
            result = fn.apply(context, arg);

            setTimeout(() => {
                immediate = true;
                canDo = true;
            },timeStamp)
               
            immediate = false;
        }else {
            setTimeout(() => {
                result = fn.apply(context, arg);
                canDo = true;
            }, timeStamp)
        }
        
        return result;
    }
}

export default {
    debounce: debounce,
    throttle: throttle
}