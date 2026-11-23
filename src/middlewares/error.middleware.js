const ApiError = require('../utils/ApiError');

function errorMiddleware(err, req, res, next) {
  const status = err instanceof ApiError || err.status ? (err.status || 400) : 500;
  res.status(status).json({
    error: {
      status,
      code: err.code || (status === 500 ? 'INTERNAL_SERVER_ERROR' : 'API_ERROR'),
      message: err.message || 'Error interno del servidor',
      timestamp: new Date().toISOString()
    }
  });
}

module.exports = errorMiddleware;