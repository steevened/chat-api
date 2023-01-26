const app = require('./app');
require('dotenv').config();
const logger = require('./utils/logger');
const swaggerDocs = require('../swagger');
const config = require('./utils/config');

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
  swaggerDocs(app, config.PORT);
});
