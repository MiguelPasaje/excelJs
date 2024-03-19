// app.js
const express = require('express');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Monta las rutas
app.use('/api', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
