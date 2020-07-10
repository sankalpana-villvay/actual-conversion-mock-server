module.exports = function () {
  let faker = require("faker");
  let _ = require("lodash");
  let format = require("date-fns/format");

  return {
    activity: _.times(100, function (n) {
      let type = _.sample(["blog", "event", "press", "other"]);

      return {
        id: n + 1,
        title: faker.random.words(1),
        type: type,
        classes: type,
        startDate: faker.date.between("2020-05-01", "2020-10-31"),
        endDate: null,
        notes: faker.random.words(10),
      };
    }),
  };
};
