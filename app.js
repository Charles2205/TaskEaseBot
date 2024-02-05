const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const TOKEN = process.env.BOT_KEY;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (messageText === '/start') {
        bot.sendMessage(chatId,'Welcome to TaskEaseBot Youtube Downloader \n Paste the Youtube Link in here ')
    }
    const fetchData =async(userInput)=>{
        let getuserInput = 'Your name is '
        console.log(getuserInput+userInput);
        
    }
    fetchData(msg.text)
})