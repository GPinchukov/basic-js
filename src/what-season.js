const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const y = ['winter', 'spring', 'summer', 'autumn'];

  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('getMonth')) {
    throw new Error();
  }

  return y[Math.floor(((date.getMonth() + 1) % 12) / 3)];
};