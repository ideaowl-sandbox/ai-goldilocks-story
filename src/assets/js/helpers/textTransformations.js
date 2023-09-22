export function replaceEveryNthSearchString(str, search, replace, nth) {
  let i = 0;
  return str.replace(new RegExp(search, 'g'), (match) => {
    i++;
    if (i % nth === 0) {
      return replace;
    }
    return match;
  });
}