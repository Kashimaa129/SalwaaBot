const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Salbot",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<a:more_arrowright:840881826906243073>   [CLICK HERE](https://discord.com/oauth2/authorize?client_id=893312679689728060&permissions=8&scope=applications.commands%20bot) OR [support server ](https://discord.gg/fqjdsyEq24)`)
    .setColor("RANDOM")
    .setFooter(`MorenT `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}