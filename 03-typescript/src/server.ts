import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Hello, Typescript!'})
});

app.listen(3333);

