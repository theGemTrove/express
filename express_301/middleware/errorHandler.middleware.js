const errorHandler = (err, req, res) => {
  const ErrorResponse = require('../class/ErrorResponse');
  let	error = { ...err };

  error.message = err.message;

  // Mongoose Errors
  if (err.name === 'CastError') {
    const message = `Resource Not Found With Id: ${err.value}`;
    error = new ErrorResponse(message, 404); // printErrorStack
  }

  // Mongo Driver Errors
  if (err.code === 11000) {
    const message = 'Name already exists, please use a different one. - Duplicate Value';
    error = new ErrorResponse(message, 403);
  }

  // Validation Errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
}
module.exports = errorHandler;