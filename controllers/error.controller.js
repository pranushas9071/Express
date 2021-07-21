class ApiError {
  notFound(req, res, next) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  }
  errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500 || err.status).send("Message : " + err);
  }
}

export const apiError = new ApiError();
