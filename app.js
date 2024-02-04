const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const TOKEN = process.env.BOT_KEY
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    if (messageText === '/start') {
        bot.sendMessage(chatId, `Welcome to the TaskEaseBot ${msg}`);

      }
      console.log(msg);
  });