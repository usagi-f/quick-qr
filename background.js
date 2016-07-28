var url = document.location.href;
var size = 300;

function generator() {
    var code = 'http://chart.apis.google.com/chart?chs=' + size + 'x' + size + '&cht=qr&chl=' + url;
    window.open(code);
}

chrome.browserAction.onClicked.addListener(generator);
generator();
