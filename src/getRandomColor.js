export const getRandomColor = word => {
  if (!word) {
    return '#808080';
  }

  const userLetter = word.slice(0, 1).toLowerCase();
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const alphabetUkr = [
    'а',
    'б',
    'в',
    'г',
    'ґ',
    'д',
    'е',
    'є',
    'ж',
    'з',
    'и',
    'і',
    'ї',
    'й',
    'к',
    'л',
    'м',
    'н',
    'о',
    'п',
    'р',
    'с',
    'т',
    'у',
    'ф',
    'х',
    'ц',
    'ч',
    'ш',
    'щ',
    'ь',
    'ю',
    'я',
  ];
  const colors = [
    '#ff0000',
    '#ff4000',
    '#ff8000',
    '#ffcc00',
    '#dddd00',
    '#ccff00',
    '#80ff00',
    '#40ff00',
    '#00ff00',
    '#00ff40',
    '#00ff80',
    '#00ffcc',
    '#00dddd',
    '#00ccff',
    '#00aaff',
    '#0080ff',
    '#0040ff',
    '#0000ff',
    '#4000ff',
    '#8000ff',
    '#cc00ff',
    '#ff00ff',
    '#ff00cc',
    '#ff00aa',
    '#ff0080',
    '#ff0040',
    '#ff0000',
    '#ff4000',
    '#ff8000',
    '#ffcc00',
    '#dddd00',
    '#ccff00',
    '#80ff00',
  ];
  const userIndex = alphabet.findIndex(el => el === userLetter);
  const userIndexUkr = alphabetUkr.findIndex(el => el === userLetter);

  if (userIndex !== -1) {
    return colors[userIndex];
  }
  if (userIndexUkr !== -1) {
    return colors[userIndexUkr];
  }
  if (userIndex === -1 && userIndexUkr === -1) {
    return '#808080';
  }
};
