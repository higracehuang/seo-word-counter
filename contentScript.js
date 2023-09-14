// Function to count words in a string.
function countWords(text) {
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getWordCount') {
    const article = document.querySelector('article');
    if (article) {
      const articleText = article.textContent;
      const wordCount = countWords(articleText);
      sendResponse({ wordCount });
    } else {
      sendResponse({ wordCount: 0 });
    }
  }
});