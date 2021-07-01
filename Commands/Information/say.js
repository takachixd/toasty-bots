const Discord = require('discord.js');
const 

/**
 * @param {Client} client
 * @param {Array<String>} args
 * @param {Message} message
 * @param {Guild} guild
 */
 run: async(client, message, args, guild) => {
    if(!message.member.roles.cache.has(config.botcommands.role)) !message.member.hasPermission(8); return message.channel.send("Bu komudu kullanabilmek iÃ§in yeterli yetkin bulunmuyor.").filter(x => x.delete(500));
    let takviye = guild.premiumSubscriptionCount
    let level = guild.premiumTier
    

    embed.setDescription(`
   ${config.sunucu.tagemoji} Sunucumuzda toplam **${message.guild.memberCount}** kiÅŸi kulunmakta, **${message.guild.members.cache.filter((x) => x.user.presence.status !== "offline").size}** KiÅŸi aktif.
   ${config.sunucu.tagemoji} Sunucumuzda toplam **${message.guild.members.cache.filter((x) => x.user.username.includes(conf.tag.tag)).size} taglÄ± bulunmakta.
   ${config.sunucu.tagemoji} Sunucumuzda toplam **${takviye}** boost bulunmakta, ve sunucumuz **${level}** seviye!
   ${config.sunucu.tagemoji} Ses kanallarÄ±nda **${message.guild.members.cache.filter((x) => x.voice.channel).size} kiÅŸi bulunmakta.
    `);
    message.channel.send(embed)
}