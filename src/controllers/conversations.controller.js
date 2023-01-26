const conversationServices = require('../services/conversations.services');

const createConversation = async (req, res) => {
  const { body } = req;
  const user = req.user;
  const created_by = user.id;
  body.created_by = created_by;
  try {
    const conversation = await conversationServices.createConversation(body);
    res.status(201).json(conversation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createConversation };
