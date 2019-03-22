const ko = require("knockout");

module.exports = async () => {
  ko.options.deferUpdates = false;
};
