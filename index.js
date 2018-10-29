module.exports = (text, options = {}) => {
  if (!text) throw new Error("Text is required");
  let sample = text.replace(/\s+/g, "").replace(/(\s?-\s)/g, "");

  const found = sample.match(/(?=[^\u0000-\u007F]+)(?=[^’“”–©])/gim);

  if (!found) return true;

  const percent = found.length / sample.length;

  if (percent < 0.001) return true;

  return false;
};
