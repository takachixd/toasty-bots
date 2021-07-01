const Command = require("../../base/Command.js");
const Discord = require("discord.js");

class Nerede extends Command {
    constructor(client) {
        super(client, {
            name: "nerede",
            aliases: ["n"]
        });
    }

    async run(message, args, data) {
    let Takachi;
    var Takachiii = message.mentions.members.first();
    if (Takachinn) {
        Takachi = Takachiii;
    } else {
        Takachi = message.guild.members.cache.get(args[0]);
    }
    
    if (!Takachi) return this.client.yolla(`Bir üye etiketle ve tekrardan dene!`, message.author, message.channel);
    let Takachin = ``;
    if (!Takachi.voice.channel) {
        Takachin = `Belirtilen kullanıcı hiçbir kanalda bulunmamaktadır.`;
        
    } else {
        let süresi = this.client.channelTime.get(Takachi.id) || {channel: Takachi.voice.channel.name, time: "Yok"}
        let selfMt = Takachi.voice.selfMute ? "**Mikrofonu: Kapalı**" : "**Mikrofonu: Açık**";
        let selfDf = Takachi.voice.selfDeaf ? "**Kulaklığı: Kapalı**" : "**Kulaklığı: Açık**";
        let asd = await Takachi.voice.channel.createInvite({maxUses: 1});
        Takachin = "" + Takachi.voice.channel.name + "" + " ("+Takachi.voice.channel.members.size +"/"+ Takachi.voice.channel.userLimit+")" + " kanalında. Kanala gitmek için [tıklaman](https://discord.gg/"+asd.code+") yeterli." + "\n```" +await this.client.turkishDate(Date.now() - süresi.time)+" önce giriş yapmış. ```"+ "\n "+ selfMt +"" + ", "+ selfDf +"";

    };
    let xxx = message.guild.channels.cache.get(Takachi.lastMessageChannelID);
    if (!xxx) {
        xxx = `Bulunamadı`;
    };
    const embed = new Discord.MessageEmbed().setAuthor(Takachi.user.tag, Takachi.user.avatarURL({ dynamic: true }))
    .setDescription(`${Takachi} kişisi #${Takachin}\n\nEn son yazdığı kanal: ${xxx}`)
    message.channel.send(embed);

}

}
module.exports = Nerede;
