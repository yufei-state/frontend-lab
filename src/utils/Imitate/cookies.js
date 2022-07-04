// this file refer to the 3rd library --> https://github.com/js-cookie/js-cookie

// helper function for generating final config
function assign(target) {
    for(var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        
        for(var item in source) {
            target[item] = source[item];
        }
    }
    return target;
}

// input default new cookie config, return a object including handling cookie methods
function init(defaultConfig) {
    /**
     * Get a cookie according to the key (only current page)
     * 
     * @param {*} key Optional param
     * @returns Value of the corresponding cookie, if no key, will return all of document.cookie
     */
    function get(key) {
        if(typeof document == 'undefined' || (!key && arguments.length)) return;

        let jar = {};
        let cookies = document.cookie ? document.cookie.split("; ") : []; 
        
        for(var i = 0; i < cookies.length; i++) {
            var item = cookies[i].split("=");
            var name = item[0];
            var value = item.slice(1).join("=");  // compatible values with "="
            
            try {
                name = decodeURIComponent(name);
                jar[name] = decodeURIComponent(value);

                if(key === name) break;
            }
            catch(e) {
                throw new Error(e);
            }
        }

        return key ? jar[key] : jar
    }

    /**
     * Set a cookie according to the key
     * 
     * @param {*} key Key need to add
     * @param {*} value Corresponding to the key
     * @param {obj} config Optional param, if no config,will use defaultConfig
     * @returns 
     */
    function set(key, value, config) {
        if(document === 'undefined') return;

        config = assign({}, defaultConfig, config);
        if(typeof config.expires === 'number') {
            config.expires = new Date(Date.now() + config.expires * 864e5);     // convert ms to d, 864e5 means every day has 86400000 millisecond
        }
        if(config.expires) {
            config.expires = config.expires.toUTCString();
        }

        let finalConfig = '';
        for(var configName in config) {
            if(!config[configName]) continue;

            finalConfig += '; ' + configName;
            
            if(config[configName] === true) continue;

            // Considers RFC 6265 section 5.2
            finalConfig += '=' + config[configName].split(';')[0];
        }

        return (document.cookie = decodeURIComponent(key) + '=' + decodeURIComponent(value) + finalConfig);
    }

    /**
     * Remove a cookie according to the key, if no cookie, will remove all of document.cookie (only current page)
     * 
     * @param {*} key Optional param
     */
    function remove(key, config) {
        if(typeof document == 'undefined' || (!key && arguments.length)) return;

        if(key) {
            key = decodeURIComponent(key);
            set(key, '', assign({}, config, {expires: -1}));
        }else {
            var cookies = get();
            for(var item in cookies) {
                set(item, '', assign({}, {path: '', expires: -1}));
            }
        }
    
    }

    return Object.create({
        get: get,
        set: set,
        remove: remove,
        reConfig: function(config) {
            config = assign({}, this.defaultConfig, config);
            return init(config);
        }
    }, {
        defaultConfig: {value: Object.freeze(defaultConfig)}
    })
}

export default init({path: '/'});