const models = require('../models');

const { conversations, participants } = models;

class conversationServices {
  static async createConversation(body) {
    try {
      const conversation = await conversations.create(body);
      const participantsObject = {
        user_id: body.created_by,
        conversation_id: conversation.id,
      };
      await participants.create(participantsObject);
      return conversation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = conversationServices;
