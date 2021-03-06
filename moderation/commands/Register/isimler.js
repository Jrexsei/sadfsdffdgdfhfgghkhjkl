  
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'isimler',
    aliases: ["names", "nicknames"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed().setFooter("Developed By Jahky").setAuthor(message.author.username, message.author.avatarURL()).setTimestamp().setColor("00f1ff");
        var member = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.channel.send(embed.setDescription("Lütfen bir kullanıcıyı etiketle."))
        let names = db.get(`isimler_${member.id}`);
        if (!names) return message.channel.send(embed.setDescription("Bu kullanıcının geçmiş isimleri bulunmuyor"))
        message.channel.send(embed.setTitle("Kullanıcı isimleri").setDescription(names.map((data, n) => `**${n + 1}.** ${data}`).join("\n")))
    }
}