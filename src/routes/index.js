const authRoutes = require('./auth.routes');
const conversationRoutes = require('./conversations.routes');

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/conversations', conversationRoutes);
};

module.exports = routerApi;
