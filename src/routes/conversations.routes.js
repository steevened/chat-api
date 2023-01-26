const { Router } = require('express');

const {
  createConversation,
} = require('../controllers/conversations.controller');

const router = Router();

router.post('/conversations', createConversation);

module.exports = router;
