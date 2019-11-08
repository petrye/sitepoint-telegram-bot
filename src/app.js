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
                url:'tg://join?invite=OPAIJBTneo2nOtpJQW1OZg'
            }, {
                text: 'Handels- & Gesellschaftsrecht',
                url: 'tg://join?invite=OPAIJBG-3psPyQ8_DnAQ5w'
            }], [{
                text: 'Kommunikations- & Betriebssysteme',
                url: 'tg://join?invite=OPAIJA-X5rNSatj3xYK-0w'
            }, {
                text: 'Kosten- & Leistungsrechnung',
                url: 'tg://join?invite=OPAIJBMh5QzLGDZMpmyOWw'
            }], [{
                text: 'Logik & Algebra',
                url: 'tg://join?invite=OPAIJBRrsdtbKrdD_jryRA'
            }, {
                text: 'Moderne Programmierkonzepte',
                url: 'tg://join?invite=OPAIJBe6hPFvOAXYYrKdAA'
            }], [{
                text: 'Präsentation & Kommunikation',
                url: 'tg://join?invite=OPAIJBes55BU3LJ8bnsTWw'
            }, {
                text: 'Programmieren II',
                url: 'tg://join?invite=OPAIJBdSSQSZNXeUakzOwg'
            }], [{
                text: 'Systemanalyse',
                url: 'tg://join?invite=OPAIJBYblCfRi-t5dtsXSQ'
            }, {
                text: 'Advanced IT',
                url: 'tg://join?invite=OPAIJBMbLp9ZRMyrwh3IVg'
            }], [{
                text: 'Advanced Database',
                url: 'tg://join?invite=OPAIJBXO1KG_7-70BYuS3w'
            }, {
                text: 'Bilanzierung',
                url: 'tg://join?invite=OPAIJBaoV1M83DUaIrGVgA'
            }], [{
                text: 'Investition & Finanzierung',
                url: 'tg://join?invite=OPAIJBeM4KJdcoQY-FmVpA'
            }, {
                text: 'Datenbanken',
                url: 'tg://join?invite=OPAIJBFhxuDWf38atYSmNA'
            }], [{
                text: 'Projektmanagement',
                url: 'tg://join?invite=OPAIJBXjFl-CZv_R1Z4NuA'
            }, {
                text: 'Software Engineering II',
                url: 'tg://join?invite=OPAIJBIpk5coOv338_OZ8Q'
            }], [{
                text: 'Statistik',
                url: 'tg://join?invite=OPAIJBarCVymg8Ux3P2gXg'
            }, {
                text: 'Webentwicklung',
                url: 'tg://join?invite=OPAIJBQIw1DGTImta5p3yQ'
            }],  [{
                text: 'Wissenschaftliches Arbeiten II',
                url: 'tg://join?invite=OPAIJBRyBMQq3XUpOHhJHQ'
            }, {
                text: 'BWL',
                url: 'tg://join?invite=NRMYsxUOXqorOnjB8yGmdg'
            }],  [{
                text: 'Einführung in die IT',
                url: 'tg://join?invite=NRMYsw1xhAlLlmgQ1xLTpA'
            }, {
                text: 'Einführung in die WI',
                url: 'tg://join?invite=NRMYsxMf3mgt3m_gjd7Keg'
            }], [{
                text: 'Marketing',
                url: 'tg://join?invite=NRMYsw_BW_Av06WtWWgZig'
            }, {
                text: 'Lineare Algebra & Analysis',
                url: 'tg://join?invite=NRMYsxFHgBAXEe4Zl2F4cQ'
            }],  [{
                text: 'Programmieren I',
                url: 'tg://join?invite=NRMYsw-YDfi8NYlqHSd95g'
            }, {
                text: 'Vertrags- & Schuldrecht',
                url: 'tg://join?invite=NRMYsxMwMoY2zIhRMHvONg'
            }],  [{
                text: 'Wissenschaftliches Arbeiten I',
                url: 'tg://join?invite=NRMYsxZmPgA3dEZ1kr76AQ'
            }, {
                text: 'Software Engineering I',
                url: 'tg://join?invite=NRMYsw8qyy8ClF78jMg-vw'
            }] 
        ]
    }
};

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
