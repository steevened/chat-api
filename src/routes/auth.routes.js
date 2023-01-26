const { Router } = require('express');
const { register, login } = require('../controllers/auth.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: create a new user into applicacion
 *     tags:
 *       - [Auth]
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: login into application
 *     tags:
 *       - [Auth]
 *     requestBody:
 *       description: Required fields to login into application
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/loginResponse'
 *       400:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found /something wrong
 *       401:
 *         description: Unauthorized
 *         content:
 *         application/json:
 *           schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: bad credentials
 */

router.post('/register', register);
router.post('/login', login);

module.exports = router;
