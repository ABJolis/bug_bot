const express = require('express');
const router = require('./router');

const app = express();
const PORT = 3001;

app.use(express.static('../client'));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log (`server started on http://localhost:${PORT} : )`);
});