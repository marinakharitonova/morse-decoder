const MORSE_TABLE = {
  '.-'   : 'a',
  '-...' : 'b',
  '-.-.' : 'c',
  '-..'  : 'd',
  '.'    : 'e',
  '..-.' : 'f',
  '--.'  : 'g',
  '....' : 'h',
  '..'   : 'i',
  '.---' : 'j',
  '-.-'  : 'k',
  '.-..' : 'l',
  '--'   : 'm',
  '-.'   : 'n',
  '---'  : 'o',
  '.--.' : 'p',
  '--.-' : 'q',
  '.-.'  : 'r',
  '...'  : 's',
  '-'    : 't',
  '..-'  : 'u',
  '...-' : 'v',
  '.--'  : 'w',
  '-..-' : 'x',
  '-.--' : 'y',
  '--..' : 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length / 10; i++) {
    let letter = expr.slice(i * 10, (i + 1) * 10)
    let morse = ''
    for (let j = 0; j < letter.length / 2; j++) {
      let code = letter.slice(j * 2, (j + 1) * 2)
      if (code === '11') {
        morse += '-'
      } else if (code === '10') {
        morse += '.'
      } else if (code === '**') {
        morse = code
      }
    }
    if (MORSE_TABLE[morse]) {
      result += MORSE_TABLE[morse]
    } else if (morse === '**') {
      result += ' '
    }
  }

  return result
}

module.exports = {
  decode
}