require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

const question = '';

// Inline keyboard options
const inlineKeyboard = {
    reply_markup: {
        inline_keyboard: [[
            {   
                text: 'Bilanzierung',
                callback_data: 'Bilanzierung'
            }, {
                text: 'Logik und Algebra',
                callback_data: 'Logik und Algebra'
            }, {
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }, {
                text: 'Web Programmierung',
                callback_data: 'Web Programmierung'
            }
        ]]
    }
};


// Listener (handler) for showcasing inline keyboard layout
bot.onText(/\/inline/, (msg) => {
    
    bot.sendMessage(msg.chat.id, 'Does this help you?', inlineKeyboard);
    
});

bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const data = callbackQuery.data;
    if(data === 'Bilanzierung'){
        bot.sendMessage(message.chat.id, `tg://join?invite=NRMYsw-9ZlXaJfnTbizjpA`);
        

    }
    if(data === 'Mathematik 1'){
        bot.sendMessage(message.chat.id, `Bei Suizidgedanken wählen sie die 110.`);

    }    
});


// Keyboard layout for requesting phone number access
const questionKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [[{
            text: "Suche meine Frage",
            one_time_keyboard: true
        }], ["Abbrechen"]]
    }
};

// Listener (handler) for telegram /start event
bot.onText(/\/question/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Du kannst jetzt deine Frage stellen', questionKeyboard)
}) ;

const startKeyboard = {
    'reply_markup': {
        'keyboard': [['Frage Suchen', 'Telegram Gruppen'], 
            ['Noch irgendeine Funktion', 'FAQ']],
        resize_keyboard: true,
        one_time_keyboard: true,
        force_reply: true,
        request_contact: true,
    }
}

bot.on('contact', async (msg) => {
    bot.sendMessage(msg.chat.id, `test`);
})

// Listener (handler) for telegram's /start event
// This event happened when you start the conversation with both by the very first time
// Provide the list of available commands
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        `
            Welcome at DHBW-Richie, thank you for using my service
      
            Available commands:
        
            /question  question -   Ask a question to the bot
        `, startKeyboard
    );
});