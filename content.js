// Define the words to be translated and their German equivalents
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
  
  function translatePage() {
    translateText(document.body);
  }
  
  // Run the translation when the content script is loaded
  translatePage();
  