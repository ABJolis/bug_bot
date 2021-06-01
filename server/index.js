const express = require('express');
const router = require('./router');

const app = express();
const PORT = 3000;

app.use(express.static('app/client'));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log (`server started on http://localhost:${PORT} : )`);
});