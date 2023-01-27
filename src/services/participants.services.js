const models = require('../models');

const { participants } = models;

class participantsService {
  static async addParticipants(conversationId, userId) {
    try {
      const result = await participants.create({
        conversation_id: conversationId,
        user_id: userId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = participantsService;
