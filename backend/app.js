import express from 'express';

const app = express();
const PORT = 3000;

app.use('/', (req, res) => {
    return res.send('Sample CRUD app using express');
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});