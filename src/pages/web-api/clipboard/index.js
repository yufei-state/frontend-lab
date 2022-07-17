import popMessage from "../../../utils/popMessage.js";

const clipBoardDiv = document.querySelector('.clipboard_api');
const copy = document.querySelector('.icon-copy');
const pasteContainer = document.querySelector('.paste_container');

copy.addEventListener('click', async (event) => {
    event.preventDefault();
    let target = clipBoardDiv.innerHTML.replace(/<i.*>.*<\/i>/g, '').trim();

    try {
        await navigator.clipboard.writeText(target);
        await navigator.clipboard.readText().then((text) => {
            pasteContainer.innerHTML = text;
        })
    }
    catch(err) {
        throw new Error(err);
    }

    copy.classList = 'iconfont icon-complete';

    popMessage('success', '复制成功', () => {
        copy.classList = 'iconfont icon-copy';
    }, {duration: 2000, selfClose: true});
})
