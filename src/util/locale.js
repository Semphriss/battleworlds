
var locale = 'en_US';

var locale_table = {
  "Text here": {
    'fr_CA': "Texte ici"
  }
}

function _(text) {
  if (!locale_table[text])
    return text;

  if (!locale_table[text][locale])
    return text;

  return locale_table[text][locale];
}
