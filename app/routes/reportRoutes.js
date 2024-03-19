// app/routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const generateReport = require('../services/reportServices');
const User = require('../models/user');

router.get('/report', async (req, res) => {
  const user = new User('Nombre', 'Apellido', 'usuario@example.com', '1234567890', 'Dirección de ejemplo');
  try {
    const reportFileName = await generateReport(user);
    console.log({reportFileName});
    res.download(reportFileName, (err) => {
      if (err) {
        res.status(500).send('Error al descargar el archivo');
      }
    });
  } catch (error) {
    res.status(500).send('Error al generar el reporte');
  }
});

module.exports = router;
