const reFilter = (req, res, next) => {
  console.log("welcome");
  next();
};

module.exports = reFilter;
