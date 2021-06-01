const db = require('../server/db');

function findAll () {
  return db.msgs;
}

function saveMessage (message) {
  db.msgs.push (message);
}

module.exports = { findAll, saveMessage };