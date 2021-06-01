const message = require('../server/message.model');

function getMessages (req, res) {
  try {
    const msgs = message.findAll();
    res.status(200);
    res.send(msgs);
  } catch (e) {
    console.log('e', e);
    res.sendStatus(500);
  }
}

function postMessage (req, res) {
  try {
    message.postOne(req.body);
    res.status(201);
    res.send();
  } catch (e) {
    console.log('e', e);
    res.sendStatus(500);
  }
}

module.exports = { getMessages, postMessage };