const createConversation = async (req, res) => {
  const { body } = req;
  try {
    const conversation = await conversationServices.createConversation(body);
    res.status(201).json(conversation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createConversation };
