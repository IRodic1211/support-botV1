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
 * 
 */
client.on('message', function (message) {
    if (message.author.bot) return;

    if (isValidCommand(message, "support")) {
        let embed = {
            "title": "Welcome to the CSGORolls Support Bot",
            "description": "Hello there, \nI am here to help you in case you're having some issues with using CSGORoll. Down below I will list the most common issues that may occur while using our services. If you're experiencing an issue that is listed below, please use the command stated above the issue for the possible solution.",
            "url": "https://www.csgoroll.com/en/support",
            "color": 2172203,
            "timestamp": new Date(),

            "thumbnail": {
                "url": client.user.avatarURL()
            },

            "fields": [
                {
                    "name": "!faq",
                    "value": "First of all, I would like to remind you that we have a very descriptive FAQ page with most of the questions answered there. Make sure to check it out!"
                },
                {
                    "name": "!steamlvl5",
                    "value": "I am getting the 'You need to be at least level 5 in order to claim FREE BOX' error message."
                },
                {
                    "name": "!deposit",
                    "value": "I deposited but still haven't received any coins yet."
                },
                {
                    "name": "!loadInventory",
                    "value": "I am getting 'Can not load your inventory at the moment' error message."
                },
                {
                    "name": "!withdrawReq",
                    "value": "What do I need to do to be eligible to withdraw?"
                },
                {
                    "name": "!howToWithdraw",
                    "value": "There is no option to withdraw the skin that is in my CSGORoll inventory."
                },
                {
                    "name": "!request",
                    "value": "I wanted to withdraw a really cool skin, but then I got the pop-up saying that I need a higher allowance."
                },
                {
                    "name": "!partnership",
                    "value": "I'm interested in creating content for you guys, where do I go?"
                }
            ],
            "footer":{
                "text": "For any constructive feedback please add me on discord Roda#2250 or DM Roda/Shrout."
            }
        }

        message.author.send({ embed: embed })
    }

    if (isValidCommand(message, "steamlvl5")) {
        let embed = {

            "title": "You need to be at least level 5 on steam in order to be able to claim FREE BOX",
            "description": "Hey there, \n\nPlease change your profile information to public:\n\nNavigate yourself to your steam profile;\nPress the 'Edit profile' menu;\nSelect 'My Privacy Settings';\nSet all information to public.\n\nOn CSGORoll:\n\nGo to your Profile summary;\nUpdate the Steam Trade URL;\nEnjoy!\n\n *IMPORTANT* \nYour profile can take 60 minutes to be updated and make sure you have at least 1 valid item in your CS:GO inventory that can be sold on the steam market.",
            "color": 2172203,
            "timestamp":new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }
        message.author.send({ embed: embed })
    }

    if (isValidCommand(message, "loadinventory")) {
        let embed = {
            "title": "The website can not load my inventory. What to do?",
            "description": "Hey there, \nThis issue usually happens when steam is having connection issues, making the inventory take a bit longer than usual to load. \n\nKeep refreshing your page and it should work at some point or try again later when inventories are no longer critical https://steamstat.us/.",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }

        message.author.send({embed: embed})
    }

    if (isValidCommand(message, "deposit")) {
        let embed = {
            "title": "I have deposited but I still didn't get credited",
            "description": "Hey there​​, \nPlease create a support ticket at https://www.csgoroll.com/en/support or email us directly at support@csgoroll.com with the following information:\n\nScreenshots of the transaction (Can access from your Steam inventory -> Trade history)\n\nSteam profile of the user you traded with. - Right click the page and select 'Copy Page URL'.",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }

        message.author.send({embed: embed})
    }

    if (isValidCommand(message, "howtowithdraw")) {
        let embed = {
            "title": "I have deposited but I still didn't get credited",
            "description": "Hey there, \n\nItems that don't have a withdraw button aren't being stocked by us.\nYou can only withdraw them if someone were to deposit that exact skin to one of our traders.\n\n\nItem that -can- be withdrawn will always have a timer or 'Instant' tag on it.\nWhen these timers run out you can click 'Collect Item' and send a trade for the correct item which will then be automatically accepted.",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }

        message.author.send({embed: embed})
    }

    if (isValidCommand(message, "partnership")) {
        let embed = {
            "title": "I'm interested in partnership",
            "description": "Hey there, \n\n If you want to create content for us, please DM us your offer on our twitter (https://twitter.com/CSGORoll)",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }

        message.author.send({embed: embed})
    }

    if (isValidCommand(message, "faq")) {
        let embed = {
            "title": "Frequently Asked Questions",
            "description": "Hey there, \n\n If you wish to check out our FAQ section, please visit this link -> https://www.csgoroll.com/en/info/faq",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }

        message.author.send({embed: embed})
    }

    if (isValidCommand(message, "request")) {
        let embed = {
            "title": "Frequently Asked Questions",
            "description": "Hey there, \n\n CSGORoll currently applies a daily limit of 200 coins over your deposit value to be able to withdraw. This is just a temporary precaution whilst in Beta.\nYou can simply request an increase by withdrawing one of your items that are over this limit. A pop-up will appear where you must type the extra value you'd like to request and our staff will manually approve it!\n *IMPORTANT* \n Make sure to type a rounded number so it doesn't glitch, this request can take a few hours to be reviewed and we are not able to speed up the process here.",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }

        message.author.send({embed: embed})
    }

    if (isValidCommand(message, "withdraw")) {
        let embed = {
            "title": "Frequently Asked Questions",
            "description": "Hey there, \n\n In order to be eligible to use our withdraw services, you need to deposit at least 1 coin. \n *IMPORTANT* \n When it comes to CS:GO and Dota2 skins, we only accept skins that are worth at least 2$ each.",
            "color": 2172203,
            "timestamp": new Date(),
            "thumbnail": {
                "url": client.user.avatarURL()
            }
        }
        console.log('hehe')
        message.author.send({embed: embed})
    }

})