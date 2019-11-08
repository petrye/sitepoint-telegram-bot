require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

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
    
    bot.addListener("message", (msg) => {
        try{
            var question = msg.text;
            if(question != "✖️️ Abbrechen"){
                bot.sendMessage(msg.chat.id, question, cancelKeyboard);
            }
        } catch(err){
            bot.sendMessage(msg.chat.id, "666 Error")
        }    
    })
}) ;

bot.onText(/👥 Austausch/,(msg)=> {
    bot.sendMessage(msg.chat.id, '📚 Auswahl', inlineKeyboard);
    bot.sendMessage(msg.chat.id, '📚 In welche Gruppe möchtest du?', cancelKeyboard);
}) ;

bot.onText(/✖️️ Abbrechen/,(msg)=> {
    bot.removeAllListeners("message");
    bot.sendMessage(msg.chat.id, 'Dann halt nicht.', startKeyboard);
}) ;

// Inline keyboard options
const inlineKeyboard = {
    reply_markup: {
        inline_keyboard: [[
            {   
                text: 'Finanzbuchhaltung',
                callback_data: 'Finanzbuchhaltung'
            }, {
                text: 'Handels- und Gesellschaftsrecht',
                callback_data: 'Handels- und Gesellschaftsrecht'
            }], [{
                text: 'Kommunikations- und Betriebssysteme',
                callback_data: 'Kommunikations- und Betriebssysteme'
            }, {
                text: 'Kosten- und Leistungsrechnung',
                callback_data: 'Kosten- und Leistungsrechnung'
            }], [{
                text: 'Logik und Algebra',
                callback_data: 'Logik und Algebra'
            }, {
                text: 'Moderne Programmierkonzepte',
                callback_data: 'Moderne Programmierkonzepte'
            }], [{
                text: 'Präsentation und Kommunikation',
                callback_data: 'Präsentation und Kommunikation'
            }, {
                text: 'Programmieren II',
                callback_data: 'Programmieren II'
            }], [{
                text: 'Systemanalyse',
                callback_data: 'Systemanalyse'
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
    if(data === 'Finanzbuchhaltung'){
        bot.sendMessage(message.chat.id, `tg://join?invite=OPAIJBTneo2nOtpJQW1OZg`);
    
    }
    if(data === 'Handels- und Gesellschaftsrecht'){  
        bot.sendMessage(message.chat.id, 'tg://join?invite=OPAIJBG-3psPyQ8_DnAQ5w');

    }
    if(data === 'Kommunikations- und Betriebssysteme'){
        bot.sendMessage(message.chat.id, `tg://join?invite=OPAIJA-X5rNSatj3xYK-0w`);

    }      
    if(data === 'Kosten- und Leistungsrechnung'){
        bot.sendMessage(message.chat.id, `tg://join?invite=OPAIJBMh5QzLGDZMpmyOWw`);

    }  
    if(data === 'Logik und Algebra'){
        bot.sendMessage(message.chat.id, `tg://join?invite=OPAIJBRrsdtbKrdD_jryRA`);

    } 
    if(data === 'Moderne Programmierkonzepte'){
        bot.sendMessage(message.chat.id, 'tg://join?invite=OPAIJBe6hPFvOAXYYrKdAA');    

    }
    if(data === 'Präsentation und Kommunikation'){  
        bot.sendMessage(message.chat.id, 'tg://join?invite=OPAIJBes55BU3LJ8bnsTWw');

    }
    if(data === 'Programmieren II'){
        bot.sendMessage(message.chat.id, 'tg://join?invite=OPAIJBdSSQSZNXeUakzOwg');

    }      
    if(data === 'Systemanalyse'){
        bot.sendMessage(message.chat.id, 'tg://join?invite=OPAIJBYblCfRi-t5dtsXSQ');

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

bot.onText(/Danke/,(msg)=> {
    bot.sendMessage(msg.chat.id, 'Gerne doch, du putziges Geschöpf.', startKeyboard)
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

bot.onText(/onenighter/,(msg)=> {
    bot.sendMessage(msg.chat.id, '\"7 Stunden - kein Problem.\"', startKeyboard)
}) ;
