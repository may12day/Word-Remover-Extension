const replacelyForm = document.getElementById("replacely-form");
const searchText = document.getElementById("search");

replacelyForm.onsubmit = function(e){
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "REPLACE_TEXT", find: searchText.value});
				window.close();
    });
}