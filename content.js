const translations = {
    "hello": "hallo",
    "world": "welt",
    "friend": "freund",
    "goodbye": "auf wiedersehen",
    "cat": "Katze",
    "dog": "Hund",
    "house": "Haus",
    "car": "Auto",
    "tree": "Baum",
    "sun": "Sonne",
    "moon": "Mond",
    "water": "Wasser",
    "fire": "Feuer",
    "air": "Luft",
    "earth": "Erde",
    "book": "Buch",
    "pen": "Stift",
    "computer": "Computer",
    "keyboard": "Tastatur",
    "mouse": "Maus",
    "screen": "Bildschirm",
    "table": "Tisch",
    "chair": "Stuhl",
    "window": "Fenster",
    "door": "Tür",
    "school": "Schule",
    "student": "Schüler",
    "teacher": "Lehrer",
    "hospital": "Krankenhaus",
    "doctor": "Arzt",
    "nurse": "Krankenschwester",
    "bank": "Bank",
    "money": "Geld",
    "work": "Arbeit",
    "job": "Job",
    "language": "Sprache",
    "learning": "lernen",
    "study": "studieren",
    "exercise": "Übung",
    "food": "Essen",
    "breakfast": "Frühstück",
    "lunch": "Mittagessen",
    "dinner": "Abendessen"
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
  
  translatePage();

