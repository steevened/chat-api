const conversationServices = require('../services/conversations.services');
const participantsService = require('../services/participants.services');

// const createConversation = async (req, res) => {
//   const { body } = req;
//   const user = req.user;
//   const created_by = user.id;
//   body.created_by = created_by;
//   try {
//     const conversation = await conversationServices.createConversation(body);
//     res.status(201).json(conversation);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const createConversation = async (req, res) => {
  try {
    const { title, createdBy, participant } = req.body;
    if (!title || !createdBy || !participant) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const conversation = await conversationServices.createConversation(
      title,
      createdBy
    );
    if (conversation) {
      const { id } = conversation;
      await participantsService.addParticipants(id, createdBy);
      await participantsService.addParticipants(id, participant);
      res.status(201).json({ message: 'conversation created' });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserConversation = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await conversationServices.getUserConversation(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createConversation, getUserConversation };
