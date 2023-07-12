/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];

    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else {
      let top = stack.pop();

      if (
        (bracket === ')' && top !== '(') ||
        (bracket === '}' && top !== '{') ||
        (bracket === ']' && top !== '[')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};