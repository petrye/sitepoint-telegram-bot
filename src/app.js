require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

const question = "";

// Listener (handler) for telegram's /start event
// This event happened when you start the conversation with both by the very first time
// Provide the list of available commands
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        `
Servus, ich bin der DHBW-Richie!
        
Bin mit sehr viel Liebe von wahnsinnig charismatischen, hyperintelligenten Möchtegern-Programmierern erstellt worden. 
        
Aber genug von mir.
        
Wie kann ich dir weiterhelfen?
             
        `, startKeyboard
    );
});

const startKeyboard = {
    'reply_markup': {
        'keyboard': [[
            {   
                text: 'Fragen', 
            }, 
            {   
                text: 'Austausch',
            }]],
        resize_keyboard: true,
        one_time_keyboard: true,
        force_reply: true,
    }
}

// Listener (handler) for telegram /start event
bot.onText(/Frage/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Was möchtest du wissen?', questionKeyboard)
}) ;

bot.onText(/Austausch/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Worüber möchtest du dich austauschen?', inlineKeyboard)
}) ;

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
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Web Programmierung',
                callback_data: 'Web Programmierung'
            }, {
                text: 'Projektmanagement',
                callback_data: 'Projektmanagement'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }],  [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], [{
                text: 'Analysis und Lineare Algebra',
                callback_data: 'Analysis und Lineare Algebra'
            }, {
                text: 'Datenbanken',
                callback_data: 'Datenbanken'
            }], 
        ]
    }
};


bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const data = callbackQuery.data;
    if(data === 'Bilanzierung'){
        bot.sendMessage(message.chat.id, `tg://join?invite=NRMYsw-9ZlXaJfnTbizjpA`);
    
    }
    if(data === 'Logik und Algebra'){  
        bot.sendMessage(message.chat.id, `Bei Suizidgedanken wählen sie die 110.`);

    }
    if(data === 'Analysis und Lineare Algrebra'){
        bot.sendMessage(message.chat.id, `Bei Suizidgedanken wählen sie die 110.`);

    }      
    if(data === 'Datenbanken'){
        bot.sendMessage(message.chat.id, `Bei Suizidgedanken wählen sie die 110.`);

    }  
    if(data === 'Web Programmierung'){
        bot.sendMessage(message.chat.id, `Bei Suizidgedanken wählen sie die 110.`);

    } 
    
});


// Keyboard layout for requesting phone number access
const questionKeyboard = {
    "reply_markup": {
        one_time_keyboard: true,
        resize_keyboard: true,

        "keyboard": [[
            {
                text: "Suche",
        },{
                text: "Abbrechen",
            }]]
    }
};
