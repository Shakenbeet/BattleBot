// require the discord.js module
const Discord = require('discord.js');
const token = "INSERT TOKEN HERE";

// create a new Discord client
const client = new Discord.Client();
const prefix = '!';
var HP = 100;
var EnemyHP = 100;
let EnemyDescs = ["A glass of milk. How intimidating.", "It's a block of cheese. Its jokes are... nevermind."]
let EnemyName = ["Milk", "Cheese"]
let EnemyDamages = [5, 10]
var currentLevel = 0;
var baseDamage = 5;
var damage = 5;
var healthCheck;
var chance = 0;

let newdamage = 5; //creates a new variable with the change in damage
let newHP = 5;

// Level 1 Embed
let level1Embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Level 1: MILK')
	.setDescription(EnemyDescs[currentLevel])
	.setThumbnail('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fbattle.png?v=1615580014735')
	.addFields(
		{ name: 'Attack', value: `Remove ${baseDamage} Enemy HP`, inline: true },
		{ name: 'Save Energy', value: '+5 attack damage', inline: true },
        { name: 'Enemy HP:', value: `${EnemyHP}`, inline: true, id: 'health' },
	)
	.setImage('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fmilk.png?v=1615580117977')
	.setTimestamp()
	.setFooter("Your HP: " + HP, 'https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fhealth.png?v=1615579529110');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// Allows bot to read messages
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
  
    if (command == "battle") {
        game();
            function game()
            {
                if (chance == 1 && HP == healthCheck)
                {
                    HP -= 5;
                }

                message.channel.send(level1Embed).then(embedMessage => {
                    embedMessage.react("⚔");
                    embedMessage.react("🛡");
                    embedMessage.react("🩹");
        
                    const filter = (reaction, user) => {
                        return ['⚔', '🛡', '🩹'].includes(reaction.emoji.name) && user.id === message.author.id;
                    };
        
                    embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }).then(collected => {
                    const reaction = collected.first();
                        if (reaction.emoji.name == '⚔') {
                            message.reply(`You Attacked the Enemy for ${baseDamage}`);
                            EnemyHP -= newdamage;
                            level1Embed = new Discord.MessageEmbed()
	                            .setColor('#0099ff')
	                            .setTitle('Level 1: MILK')
	                            .setDescription(EnemyDescs[currentLevel])
	                            .setThumbnail('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fbattle.png?v=1615580014735')
	                            .addFields(
		                            { name: 'Attack', value: `Remove ${baseDamage} Enemy HP`, inline: true },
		                            { name: 'Save Energy', value: '+5 attack damage', inline: true },
                                    { name: 'Enemy HP:', value: `${EnemyHP}`, inline: true, id: 'health' },
	                            )
	                            .setImage('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fmilk.png?v=1615580117977')
	                            .setTimestamp()
	                            .setFooter("Your HP: " + HP, 'https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fhealth.png?v=1615579529110');
                            damage += 5;
                            enemyVibeCheck();
                        } 
                        else if (reaction.emoji.name == '🛡')
                        {
                            message.reply('You decided to Save some Energy (+5 Atk Damage)');
                            newdamage += 5;
                            baseDamage += 5;
                            level1Embed = new Discord.MessageEmbed()
	                            .setColor('#0099ff')
	                            .setTitle('Level 1: MILK')
	                            .setDescription(EnemyDescs[currentLevel])
	                            .setThumbnail('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fbattle.png?v=1615580014735')
	                            .addFields(
		                            { name: 'Attack', value: `Remove ${baseDamage} Enemy HP`, inline: true },
		                            { name: 'Save Energy', value: '+5 attack damage', inline: true },
                                    { name: 'Enemy HP:', value: `${EnemyHP}`, inline: true, id: 'health' },
	                            )
	                            .setImage('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fmilk.png?v=1615580117977')
	                            .setTimestamp()
	                            .setFooter("Your HP: " + HP, 'https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fhealth.png?v=1615579529110');
                            
                            enemyVibeCheck();
                        }
                        else
                        {
                            if (HP != 100)
                            {
                                message.reply('You decided to Heal (+5 HP)');
                                HP += 10;
                                level1Embed = new Discord.MessageEmbed()
	                                .setColor('#0099ff')
	                                .setTitle('Level 1: MILK')
	                                .setDescription(EnemyDescs[currentLevel])
	                                .setThumbnail('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fbattle.png?v=1615580014735')
	                                .addFields(
		                                { name: 'Attack', value: `Remove ${baseDamage} Enemy HP`, inline: true },
		                                { name: 'Save Energy', value: '+5 attack damage', inline: true },
                                        { name: 'Enemy HP:', value: `${EnemyHP}`, inline: true, id: 'health' },
	                                )
	                                .setImage('https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fmilk.png?v=1615580117977')
	                                .setTimestamp()
	                                .setFooter("Your HP: " + HP, 'https://cdn.glitch.com/2b3e1d09-264f-411a-bd99-f794c25dc190%2Fhealth.png?v=1615579529110');
                            
                                enemyVibeCheck();
                            }
                            else
                            {
                                message.reply('tried to heal when their HP was full. Lol...... Lmao');
                                enemyVibeCheck();
                            }
                        }
                    })
                })
            }
        }
        function enemyVibeCheck()
        {
            if (EnemyHP <= 0)
            {
                message.reply("Victory, Enemy has been defeated!");
            }
            else 
            {
                enemyTurn();
            }
        }

        function enemyTurn()
        {
            healthCheck = HP;
            chance = Math.floor((Math.random() * 2) + 1); // if 1 then attack, if 2 then do nothing
            if (chance == 1)
            {
                message.reply(`The ${EnemyName[currentLevel]} Attacked! -${EnemyDamages[currentLevel]} HP`)
                HP -= 5;
                setTimeout(game, 500);
            }
            else
            {
                message.reply(`The ${EnemyName[currentLevel]} did Nothing.`)
                setTimeout(game, 500);
            }
        }
});
  
  // login to Discord with your app's token
  client.login(token);

