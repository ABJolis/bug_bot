const express = require('express');
const router = require('express').Router();

const message = require('../server/message.controller');

router.use(express.json());

router.get('/messages', message.getMessages);

router.post('/messages', (req, res) => {
  console.log(req.method, req.url);
  res.json(res.body);
});

module.exports = router;