module.exports = (text, options = {}) => {
  if (!text) throw new Error("Text is required");
  let sample = text.replace(/\s+/g, "").replace(/(\s?-\s)/g, "");

  const found = sample.match(/(?=[^\u0000-\u007F]+)(?=[^’“”–©])/gim) || [];

  const sup = indocheck(sample);

  const percent = (found.length + sup) / sample.length;

  if (percent < 0.001) return true;

  return false;
};

function indocheck(sample) {
  const words = [
    "selamatpagi",
    "selamatsiang",
    "selamatmalam",
    "beberapa",
    "bersama",
    "dilakukan",
    "terimakasih",
    "permisimas",
    "permisiadek",
    "permisipak",
    "berbagi"
  ];
  return words.reduce((count, word) => {
    count += (sample.match(new RegExp(word, "gim")) || []).length;
    return count;
  }, 0);
}
