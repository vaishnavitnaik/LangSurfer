document.getElementById('translate').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: translatePage
    });
  });
  
  function translatePage() {
    const translations = {
      "hello": "hallo",
      "world": "welt",
      "friend": "freund",
      "goodbye": "auf wiedersehen"
    };
  
    function translateText(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue;
        for (let [english, german] of Object.entries(translations)) {
          let regex = new RegExp(`\\b${english}\\b`, 'gi');
          text = text.replace(regex, german);
        }
        node.nodeValue = text;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
          translateText(child);
        }
      }
    }
  
    translateText(document.body);
  }
  