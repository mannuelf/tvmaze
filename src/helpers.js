export function removeHTMLTags(str) {
  const regex = /(<([^>]+)>)/ig;
  if (str === undefined || str === null || str === '') {
    return false;
  }
  str = str.toString();
  return str.replace(regex, '');
}

export function hyphenateQueryForApiCall(str) {
  str = str.replace(/\s+/g, '-').toLowerCase();
  console.log(str);
  return str;
}
