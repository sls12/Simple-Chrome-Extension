// Script to find a given word in a web page

window.onload = function(){
  console.log('Window Load Function');
  document.getElementById('btn').onclick = searchText;
};

function searchText(){
  var search = document.getElementById('word').value;
  if(search){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
      chrome.tabs.executeScript(tabs[0].id,{file:search.js});
      chrome.tabs.sendMessage(tabs[0].id,{method:'search',searchText:search});
    });
  }
}
