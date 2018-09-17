require('dotenv').load({ silent: true })
const TelegramBot = require('node-telegram-bot-api');

process.on('uncaughtException', (err) => {
    console.error(err);
});

const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.on('document', chatter => {
  if(chatter.chat.type !== 'private'){
    bot.deleteMessage(chatter.chat.id,chatter.message_id);
    bot.kickChatMember(chatter.chat.id,chatter.from.id);
  }
});