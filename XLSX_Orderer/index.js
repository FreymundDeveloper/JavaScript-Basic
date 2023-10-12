const axios = require('axios');
const ExcelJS = require('exceljs');

async function createXLSX() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Countries List');

        const titleRow = worksheet.addRow(['Countries List']);
        titleRow.font = { bold: true, color: { argb: '4F4F4F' }, size: 16 };
        titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
        
        const headerRow = worksheet.addRow(['Name', 'Capital', 'Area', 'Currencies']);
        headerRow.eachCell((cell) => { cell.font = {bold: true, color: { argb: '808080' } }; });

        data.forEach((country) => {
            const currencyKeys = country.currencies ? Object.keys(country.currencies) : null;

            worksheet.addRow([
                country.name.official || '-',
                (country.capital == undefined) ? '-' : country.capital[0],
                country.area || '-',
                (currencyKeys == null || currencyKeys.length == 0) ? '-' : currencyKeys[0],
            ]);
        });

        worksheet.mergeCells('A1:D1');
        worksheet.getColumn(3).numFmt = '#,##0';

        worksheet.columns.forEach((column) => {
            column.width = 15;
        });

        await workbook.xlsx.writeFile('data/countries.xlsx');
        console.log('File created.');
    }
    catch(error) {
        console.log('Error:', error);
    }
}

createXLSX();