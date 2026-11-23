require('dotenv').config();
const express = require('express');
const speakersRoutes = require('./routes/speakers.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/speakers', speakersRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;