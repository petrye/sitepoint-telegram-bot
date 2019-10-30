require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

const question = "";

bot.get
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
                text: '💬 Fragen', 
            }, 
            {   
                text: '👥 Austausch',
            }]],
        resize_keyboard: true,
        force_reply: true,
    }
}

bot.onText(/💬 Fragen/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Was möchtest du wissen?', cancelKeyboard);
}) ;


bot.onText(/👥 Austausch/,(msg)=> {
    bot.sendMessage(msg.chat.id, '📚 Auswahl', inlineKeyboard);
    bot.sendMessage(msg.chat.id, '📚 In welche Gruppe möchtest du?', cancelKeyboard);
}) ;

bot.onText(/✖️️ Abbrechen/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Dann halt nicht.', startKeyboard);
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


const cancelKeyboard = {
    "reply_markup": {
        "keyboard": [[{
            text: "✖️️ Abbrechen",
        }]],
        resize_keyboard: true,
        one_time_keyboard: true,
    }
};




































bot.onText(/wwi18sec/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'PAPPNASEN!', startKeyboard)
}) ;

bot.onText(/letztereihe/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'ATOS! (und Timon)', startKeyboard)
}) ;

bot.onText(/zweitereihe/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'NERDS! (Also Aaron & Co)', startKeyboard)
}) ;

bot.onText(/easteregg/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Oh, du hast mich gefunden. Jedoch gibt es noch weitere.', startKeyboard)
}) ;

bot.onText(/äricp/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Fresh wie nie!', startKeyboard)
}) ;

bot.onText(/pi/,(msg)=> {
    bot.sendMessage(msg.chat.id, '3,14159265358979323846264338327950288419716939937510', startKeyboard)
}) ;

bot.onText(/jaegergott/,(msg)=> {
    bot.sendMessage(msg.chat.id, '300€ Sneaker, 240€ Jacke, T-Shirt schlappe 140€, Goldschmuck ca. 600€, aber ist nicht erwähnenswert.', startKeyboard)
}) ;

bot.onText(/jonasplatin/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"Kennst du Jonas Platin?\" \"Nö, wer ist Jonas Platin?\" \"Ja keine Ahnung, habe ich dich doch gefragt.\"',startKeyboard)
}) ;

bot.onText(/polizeipark/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"Betäubungsmittel? Einen Joint oder so?\"', startKeyboard)
}) ;

bot.onText(/christopherchristopher/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"Junge wurdest du schon mal richtig geschlagen?\"', startKeyboard)
}) ;

bot.onText(/frenchmontana/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"Ist das die französische Hannah Montana?\"', startKeyboard)
}) ;

bot.onText(/kompliment/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"Ich finds süß, dass du lustig aussiehst.\"', startKeyboard)
}) ;

bot.onText(/einäugigerpirat/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"Also du spuckst der Frau auf den Rücken...\"', startKeyboard)
}) ;

bot.onText(/striplive/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Äric: \"Dazu habe ich mal eine Dokumentation gesehen\"', startKeyboard)
}) ;

bot.onText(/12oder3/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"This is not normal.\"', startKeyboard)
}) ;
