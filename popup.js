// Send a message to the content script to get the word count.
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: 'getWordCount' }, function (response) {
    if (response && response.wordCount) {
      document.getElementById('wordCount').textContent = response.wordCount + ' words';
    } else {
      document.getElementById('wordCount').textContent = 'Word count not available.';
    }
  });
});