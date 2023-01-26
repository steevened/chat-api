class conversationServices {
  static async createConversation(body) {
    const conversation = await db.Conversation.create(body);
    return conversation;
  }
}

module.exports = conversationServices;
