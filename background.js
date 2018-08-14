chrome.browserAction.onClicked.addListener(function(tab) {
    var newURL = "https://www.baidu.com";
    chrome.tabs.create({ });
});