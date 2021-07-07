/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */

/**
 * @param str
 */
const imageValidation = (str) => {
  const pattern = new RegExp(
    // Protocol
    "^(https?:\\/\\/)?" +
      // Domain name
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      // OR ip (v4) address
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      // Port and path
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      // Query string
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    // Fragment locator
    "i"
  );

  if (pattern.test(str)) {
    return str;
  }

  return "https://imgur.com/dDT1obX";
};

export default imageValidation;
