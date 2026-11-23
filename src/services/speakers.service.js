const ApiError = require('../utils/ApiError');

function listSpeakers() {
  throw new ApiError(501, 'Endpoint GET /api/v1/speakers no implementado', 'NOT_IMPLEMENTED');
}

function getSpeakerById() {
  throw new ApiError(501, 'Endpoint GET /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

function createSpeaker() {
  throw new ApiError(501, 'Endpoint POST /api/v1/speakers no implementado', 'NOT_IMPLEMENTED');
}

function replaceSpeaker() {
  throw new ApiError(501, 'Endpoint PUT /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

function deleteSpeaker() {
  throw new ApiError(501, 'Endpoint DELETE /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

module.exports = {
  listSpeakers,
  getSpeakerById,
  createSpeaker,
  replaceSpeaker,
  deleteSpeaker
};