function generator() {
    chrome.tabs.getSelected(null, function(tab) {
        var url = tab.url;
        var size = 300;
        var code = 'http://chart.apis.google.com/chart?chs=' + size + 'x' + size + '&cht=qr&chl=' + url;
        window.open(code);
    });
}

chrome.browserAction.onClicked.addListener(generator);

generator();
