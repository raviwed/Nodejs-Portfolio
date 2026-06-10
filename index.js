require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// <----- messageCreate  Creation --->
client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("content")) {
        const url = message.content.split("content")[1];
        return message.reply({
            content: "Genearting Short ID for" + url
        })
    }
    message.reply({
        content: "Hi From Bot Babi",
    })
    console.log(message.content);
})

//------> Bot Command for InteractionsCreate ----
client.on("interactionCreate", (interaction) => {
    console.log(interaction)
    interaction.reply("Pong!!")
})
client.login(process.env.DISCORD_TOKEN);
