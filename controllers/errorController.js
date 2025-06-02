const httpStatusCodes = require("http-status-codes");

exports.pageNotFoundErrror = (req, res) => {
  res.status(httpStatusCodes.StatusCodes.NOT_FOUND);
  res.render("error");
};
exports.internalServerError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR);
  res.render("error");
  res.send(
    `${httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR} - Something went wrong!`
  );
};
