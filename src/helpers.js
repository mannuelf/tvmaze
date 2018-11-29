export function removeHTMLTags(str) {
  const regex = /(<([^>]+)>)/ig;
  if (str === undefined || str === null || str === '') {
    return false;
  }
  str = str.toString();
  return str.replace(regex, '');
}
