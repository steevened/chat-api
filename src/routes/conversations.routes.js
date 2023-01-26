const { Router } = require('express');
const { userExtractor, tokenExtractor } = require('../utils/middleware');

const {
  createConversation,
} = require('../controllers/conversations.controller');

const router = Router();

// router.post('/conversations', userExtractor, createConversation);
router.post('/conversations', userExtractor, createConversation);

module.exports = router;
