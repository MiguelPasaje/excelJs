// app/services/reportService.js
const ExcelJS = require('exceljs');
const path = require('path');

async function generateReport(user) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Reporte de Usuario');

  // Estilos para el título y el banner
  const titleStyle = {
    font: { bold: true, size: 16 }
  };
  const bannerStyle = {
    font: { bold: true, size: 20 }
  };

  // Escribir el título y el banner
  worksheet.mergeCells('A1:E1');
  worksheet.getCell('A1').value = 'Mi Aplicación';
  worksheet.getCell('A1').style = bannerStyle;

  worksheet.mergeCells('A3:E3');
  worksheet.getCell('A3').value = 'Reporte de Usuario';
  worksheet.getCell('A3').style = titleStyle;

  // Escribir la fecha actual
  const currentDate = new Date().toLocaleDateString();
  worksheet.mergeCells('A5:E5');
  worksheet.getCell('A5').value = `Fecha: ${currentDate}`;

  // Escribir la información del usuario
  worksheet.addRow(['Nombre', 'Apellido', 'Email', 'Teléfono', 'Dirección']);
  worksheet.addRow([user.name, user.lastname, user.email, user.cell, user.address]);

  // Escribir el archivo
  const fileName = path.join(__dirname, '..', 'reports', `report_${user.name}.xlsx`);
  await workbook.xlsx.writeFile(fileName);

  return fileName;
}

module.exports = generateReport;
