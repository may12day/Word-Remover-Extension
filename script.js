function replaceText(find){
    const regex = new RegExp(find, "gi");

    const contents = document.querySelectorAll('p,li,span,h1,h2,h3,h4,h5,h6');

    for(const snippet of contents){
        //console.log(snippet)
        snippet.textContent = snippet.textContent.replace(regex, '')


        //snippet.textContent = snippet.textContent.replace(regex, 'mayank');
    }
}


chrome.runtime.onMessage.addListener(function(message){
    if(message.action === 'REPLACE_TEXT'){
        replaceText(message.find);
    }
});