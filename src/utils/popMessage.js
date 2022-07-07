import createNode from "./createNode.js"

var defaultConfig = {
    duration: 2500,
    selfClose: false
}

/**
 * According to the input, generating corresponding pop message
 * 
 * @param {string} type Message type, support: success、warn、info、error
 * @param {*} text Message content
 * @param {function} callback Callback
 * @param {object} config Define pop window's behavior, like: exist time、whether need manual close、...
 */
export default function(type="info", text=" ", config = defaultConfig, callback) {
    // judge message type
    let iconType;
    switch(type) {
        case 'success':
            iconType = 'right';
            break;
        case 'warn':
            iconType = 'warn';
            break;
        case 'error':
            iconType = 'false';
            break;
        default:
            iconType = 'info';
    }
    
    // add message to the body
    var template = `
        <i class="iconfont m-t-2 m-r-10 f18 icon-${iconType}"></i>
        <p>${text}</p>
        <i class="iconfont icon-close mouse-point" style="display: ${config.selfClose ? 'block' : 'none'}"></i>
    `;
    var message = createNode(template, {class: `pop-up border-1-s p-15 show ${type}`});
    document.body.appendChild(message);

    // after duration, message window start move out
    var timer = setTimeout(() => {
        message.classList.add('hide');
    }, config.duration);

    // click close button, move out message right now
    message.lastElementChild.onclick = () => {
        clearTimeout(timer);
        message.classList.add('hide');
    }

    // message animation event 
    message.addEventListener('animationend', (e) => {
        if(e.animationName === 'pop-hide') {
            if (callback) callback();
            e.target.remove();
        }
    })

    // message mouse move event
    message.addEventListener('mouseenter', (e) => {
        clearTimeout(timer);
    })
    message.addEventListener('mouseleave', (e) => {
        timer = setTimeout(() => {
            message.classList.add('hide');
        }, config.duration);
    })

    return message;
}