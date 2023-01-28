const { Router } = require('express');
const { userExtractor } = require('../utils/middleware');

const {
  createConversation,
  getUserConversation,
} = require('../controllers/conversations.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/conversations:
 *   post:
 *     security:
 *       - bearerAuth: []
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
 * /api/v1/auth/conversations/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get all conversations by the logger user
 *     tags:
 *       [Conversations]
 *     parameters:
 *       - id: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of the user
 */

router.get('/:id', userExtractor, getUserConversation);
router.post('/', userExtractor, createConversation);

module.exports = router;
