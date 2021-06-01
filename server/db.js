const fs = require('fs');

const dataFilePath = './data.json';

const db = { msgs: []};

fs.readFile (dataFilePath, 'utf8', function (err, data) {
  try {
    data = JSON.parse (data);
  } catch (e) {
    //
  }
  if (data && data.msgs) db.msgs = data.msgs;
});

module.exports = db;