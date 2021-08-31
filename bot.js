const Discord = require("discord.js")
const client = new Discord.Client()
const settings = require("./settings.json")

client.on("message", message => {

    if(message.channel.id === "id") return message.react(":react-name:id")
}) 
client.login(settings.token)
