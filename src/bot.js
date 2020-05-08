require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;

client.login(process.env.BOT_TOKEN);

//check if the message from the user is an actual command
const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName)

//Is the bot connected
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('!support', { type: 'LISTENING' });
});



/**
 * BOT WILL REACT WHEN SOMEONE WRITES A COMMAND MESSAGE
 */
client.on('message', function (message) {
    if (message.author.bot) return;

    /**
     * !support command
     */

    if (isValidCommand(message, "support")) {
        let embed = {
            "title": "Welcome to the CSGORoll assistant",
            "description": "\n*LIST OF COMMANDS*\n",
            "url": "https://www.csgoroll.com/en/support",
            "color": 2172203,
            "timestamp": new Date(),

            "thumbnail": {
                "url": client.user.avatarURL()
            },

            "fields": [
                {
                    "name": "!faq",
                    "value": "Make sure to read our FAQ if you still haven't!"
                },
                {
                    "name": "!steamlvl5",
                    "value": "'You need to be at least level 5 in order to claim FREE BOX' error message appeared."
                },
                {
                    "name": "!trading",
                    "value": "Can I use CSGORoll as a trading platform?"
                },
                {
                    "name": "!affiliates",
                    "value": "How affiliate system works?"
                },
                {
                    "name": "!mindeposit",
                    "value": "What is the minimal deposit value on CSGORoll?"
                },
                {
                    "name": "!missingdeposit",
                    "value": "I deposited but still haven't received any coins yet."
                },
                {
                    "name": "!loadinventory",
                    "value": "'Can not load your inventory at the moment' error message appeared."
                },
                {
                    "name": "!withdrawreq",
                    "value": "What do I need to do to be eligible to withdraw?"
                },
                {
                    "name": "!howtowithdraw",
                    "value": "There is no option to withdraw the skin that is in my CSGORoll inventory."
                },
                {
                    "name": "!request",
                    "value": "What is the Withdraw Limit?"
                },
                {
                    "name": "!partnership",
                    "value": "I'm interested in creating content for you guys, where do I go?"
                },
                {   
                    "name": ":question:",
                    "value": "The answer to your problem is not here? Contact us via https://www.csgoroll.com/en/support"
                }
            ],
            "footer":{
                "text": "For any constructive feedback please add me on discord Roda#2250 or DM Roda/Shrout."
            }
        }

        message.author.send({ embed: embed }).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !support command but his DM's were closed.`)))
    }
 /**
     * !steamlvl5 command
     */
    if (isValidCommand(message, "steamlvl5")) {
        let embed = {

            "title": "You need to be at least level 5 on steam in order to be able to claim FREE BOX",
            "description": `Hey there ${message.author.username}, \n\nPlease change your profile information to public:\n\nNavigate yourself to your steam profile;\nPress the 'Edit profile' menu;\nSelect 'My Privacy Settings';\nSet all information to public.\n\nOn CSGORoll:\n\nGo to your Profile summary;\nUpdate the Steam Trade URL;\nEnjoy!\n\n *IMPORTANT* \nYour profile can take 60 minutes to be updated and make sure you have at least 1 valid item in your CS:GO inventory that can be sold on the steam market.`,
            "color": 2172203,
            "timestamp":new Date()
        }
        message.author.send({ embed: embed }).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !steamlvl5 command but his DM's were closed.`)))
    }

     /**
     * !loadinventory command
     */

    if (isValidCommand(message, "loadinventory")) {
        let embed = {
            "title": "The website can not load my inventory. What to do?",
            "description": `Hey there ${message.author.username}, \n\nThis issue usually happens when steam is having connection issues, making the inventory take a bit longer than usual to load. \n\nKeep refreshing your page and it should work at some point or try again later when inventories are no longer critical https://steamstat.us/.`,
            "color": 2172203,
            "timestamp": new Date()
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !loadinventory command but his DM's were closed.`)))
    }

     /**
     * !missingdeposit command
     */

    if (isValidCommand(message, "missingdeposit")) {
        let embed = {
            "title": "I deposited but I didn't receive any credits",
            "description": `Hey there​​ ${message.author.username}, \n\nPlease create a support ticket at https://www.csgoroll.com/en/support or email us directly at support@csgoroll.com with the following information:\n\nScreenshots of the transaction (Can access from your Steam inventory -> Trade history)\n\nSteam profile of the user you traded with. - Right click the page and select 'Copy Page URL'.`,
            "color": 2172203,
            "timestamp": new Date()
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !missingdeposit command but his DM's were closed.`)))
    }

     /**
     * !howtowithdraw command
     */

    if (isValidCommand(message, "howtowithdraw")) {
        let embed = {
            "title": "There is no 'Collect item' option under the skin",
            "description": `Hey there ${message.author.username}, \n\nItems that don't have a withdraw button aren't being stocked by us.\nYou can only withdraw them if someone were to deposit that exact skin to one of our traders.\n\n\nItems that -can- be withdrawn will always have a timer or 'Instant' tag on it.\nWhen these timers run out you can click 'Collect Item' and send a trade for the correct item which will then be automatically accepted.`,
            "color": 2172203,
            "timestamp": new Date()
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !howtowithdraw command but his DM's were closed.`)))
    }

     /**
     * !partnership command
     */

    if (isValidCommand(message, "partnership")) {
        let embed = {
            "title": "I'm interested in partnership",
            "description": `Hey there ${message.author.username}, \n\n If you want to create content for us, please DM us your offer on our twitter (https://twitter.com/CSGORoll)`,
            "color": 2172203,
            "timestamp": new Date()
            
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !partnership command but his DM's were closed.`)))
    }
    /**
     * !faq command
     */
    if (isValidCommand(message, "faq")) {
        let embed = {
            "title": "Frequently Asked Questions",
            "description": `Hey there ${message.author.username}, \n\n If you wish to check out our FAQ section, please visit this link -> https://www.csgoroll.com/en/info/faq`,
            "color": 2172203,
            "timestamp": new Date()
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !faq command but his DM's were closed.`)))
    }

     /**
     * !request command
     */

    if (isValidCommand(message, "request")) {
        let embed = {
            "title": "What is the Withdraw Limit and Withdraw Request?",
            "description": `Hey there ${message.author.username}, \n\n CSGORoll currently applies a daily limit of 200 coins over your deposit value to be able to withdraw. This is just a temporary precaution whilst in Beta.\n\nYou can simply request an increase by withdrawing one of your items that are over this limit. A pop-up will appear where you must type the extra value you'd like to request and our staff will manually approve it!\n\n *IMPORTANT* \n Make sure to type a rounded number so it doesn't glitch, this request can take a few hours to be reviewed and we are not able to speed up the process here.`,
            "color": 2172203,
            "timestamp": new Date()
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !request command but his DM's were closed.`)))
    }


    if (isValidCommand(message, "affiliates")) {
        let embed = {
            "title": "How affiliate system works?",
            "description": `Hey there ${message.author.username}, \n\n It’s the same system for almost all websites but most of the users still don’t understand the concept of house-edge and where the cut comes from. \n\n So the affiliate works like this: I invited you through my code, correct? You need to deposit at least 1 coin and start wagering to generate income under my code. Every time you place a bet on CSGORoll, we take a percentage of it and this is called house-edge. I'll be receiving the percentage of my affiliate code as cut from this value that CSGORoll is taking. We offer up to 50% in affiliates cut which is half of what we received and the highest value offered in the scene currently. \n\nThis value is credited instantly to your account and can be verified under Transactions with the name ‘Commissions’, sometimes it will show 0.00 because we don’t show all decimals, so it could be 0.00002 received.`,
            "color": 2172203,
            "timestamp": new Date()
        }

        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !affiliates command but his DM's were closed.`)))
    }

     /**
     * !withdrawreq command
     */

    if (isValidCommand(message, "withdrawreq")) {
        let embed = {
            "title": "What are the requirements for withdraw?",
            "description": `Hey there ${message.author.username}, \n\n In order to be eligible to use our withdraw services, you need to deposit at least 1 coin.`,
            "color": 2172203,
            "timestamp": new Date()
        }
        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !withdrawreq command but his DM's were closed.`)))
    }

    /**
     * !mindeposit command
     */
    if (isValidCommand(message, "mindeposit")) {
        let embed = {
            "title": "What is the minimum deposit value.",
            "description": `Hey there ${message.author.username},\n\n *CSGO AND DOTA 2 ITEMS* \nMinimum deposit value for CS:GO and Dota 2 skins is at least 2coins minimum per skin. \n\n*CRYPTO*\n Minimum deposit value for crypto currencies is 1 coin. \n\n*CREDIT CARDS*\n\ Minumum deposit value for credit cards is 5 coins.`,
            "color": 2172203,
            "timestamp": new Date()
        }
        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !mindeposit command but his DM's were closed.`)))
    }


    /**
     * !trading command
     */
    if (isValidCommand(message, "trading")) {
        let embed = {
            "title": "Can I use CSGORoll as a trading platform?",
            "description": `Hey there ${message.author.username},\n\n Yes, trading on the website is totally fine.\n\nTrade abusing is not (i.e being fraudulent by depositing wrongly priced skins, and withdrawing correct ones, if you see prices that are wrong, please inform us)`,
            "color": 2172203,
            "timestamp": new Date()
        }
        message.author.send({embed: embed}).catch(()=> message.reply("Seems like I can't DM you. Please turn on the 'Allow direct messages from server members' option by going to the Privacy Settings.", console.log(`${message.author.tag} (${message.author.username}) tried to use the !trading command but his DM's were closed.`)))
    }
})