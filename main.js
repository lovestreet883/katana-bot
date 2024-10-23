const discord = require('discord.js')
const {token} = require('./config.json')

const bot = new discord.Client({ intents: 53575421})



bot.login(token);