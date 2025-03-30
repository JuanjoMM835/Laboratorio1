const express = require('express');
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    try {
        res.status(200).json({ 
            message: 'Respuesta desde Backend 1',
            port: 3001,
            timestamp: new Date().toISOString(),
            status: 'Activo'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno en Backend 1' });
    }
});


const server = app.listen(3001, () => {
    console.log('Backend 1 ejecutándose en http://localhost:3001');
});


process.on('SIGTERM', () => {
    server.close(() => {
        console.log(' Servidor Backend 1 terminado');
    });
});