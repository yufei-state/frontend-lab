import createNode from "./createNode.js"

var defaultConfig = {
    duration: 2000,
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
export default function(type="info", text=" ", callback, config = defaultConfig) {
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
        <i class="iconfont icon-${iconType}"></i>
        <p>${text}</p>
        <i class="iconfont icon-guanbi" style="display: ${config.selfClose ? 'block' : 'none'}"></i>
    `;
    var message = createNode(template, {class: `pop-up ${type}`});
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
        if(e.animationName === 'moveOut') {
            if (callback) callback();
            e.target.remove();
            e.target.removeEventListener('animationend', this);
        }
    })

    // message mouse move event

    return message;
}