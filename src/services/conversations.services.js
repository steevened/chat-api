const models = require('../models');

const { conversations } = models;

class conversationServices {
  // static async createConversation(body) {
  //   try {
  //     const conversation = await conversations.create(body);
  //     const participantsObject = {
  //       user_id: body.created_by,
  //       conversation_id: conversation.id,
  //     };
  //     await participants.create(participantsObject);
  //     return conversation;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  static async createConversation(title, createdBy) {
    try {
      const conversation = await conversations.create({
        title,
        created_by: createdBy,
      });
      return conversation;
    } catch (error) {
      throw error;
    }
  }

  static async getUserConversation(id) {
    try {
      const conversation = await conversations.findAll({
        where: { created_by: id },
      });
      return conversation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = conversationServices;
