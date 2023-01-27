const { Router } = require('express');
const { userExtractor } = require('../utils/middleware');

const {
  createConversation,
} = require('../controllers/conversations.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/conversations:
 *   post:
 *     summary: create a new conversation
 *     tags:
 *       [Conversations]
 *     requestBody:
 *       description: Required fields to create a new conversation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/conversation'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: conversation created
 */

router.post('/', userExtractor, createConversation);

module.exports = router;
