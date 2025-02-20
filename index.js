const passwordLength = 12;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;    

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

  let allowedChars = '';
  let password     = '';

  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  console.log(allowedChars);

  return '';
}

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);