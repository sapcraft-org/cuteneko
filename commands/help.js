const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Commands!")
            .addField("Commands", 
            '')
            .setFooter("Powered By Cat");
        message.channel.send(embed);
    }
};
