function convertSize(x = Number) {
  // trunc it to only one digit
  if (x < 0) {
    x = x * -1;
  } else if (x === undefined) {
    x = 1024;
  }
  const toGigabyte = x / 1024;
  return `${toGigabyte.toFixed(1)}GB`;
}

module.exports = { convertSize };
