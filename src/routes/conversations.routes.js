const { Router } = require('express');
const { userExtractor } = require('../utils/middleware');

const {
  createConversation,
} = require('../controllers/conversations.controller');

const router = Router();

router.post('/', createConversation);

module.exports = router;
