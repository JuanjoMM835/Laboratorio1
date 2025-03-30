const express = require('express');
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    try {
        res.status(200).json({ 
            message: 'Backend 2',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno' });
    }
});


const server = app.listen(3002, () => {
    console.log('Backend 2 en puerto 3002');
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Servidor terminado');
    });
});