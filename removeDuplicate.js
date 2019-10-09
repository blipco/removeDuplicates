const input = 'AbraCadABraAlakAzam';

const removeDuplicates = (input) => {
  input = input.split('');
  input = input.reduce((acc, value) => (!RegExp(`${value}`, 'i').test(acc)) ? acc += value : acc, '');
  console.log(input);
}
removeDuplicates(input)