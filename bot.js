const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528079459182706691")
setInterval(function() {
channel.send(` potato  بطاطا potato  بطاطا potato  بطاطا potato  بطاطا potato  بطاطا potato  بطاطا potato  بطاطا potato  بطاطا potato  بطاطا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);