const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

// Uso de la carpeta static
app.use(express.static(path.resolve(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
   return res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.listen(port, () => {
   console.log(`servidor corriendo en el puerto http://localhost:${port}`);
});
