const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});
const fs = require('fs');



bot.on('ready', () => {
    console.log(bot.user.tag + " is ready :D")
    bot.user.setStatus('idle')
    bot.user.setPresence({
        game: {
            name: ':D',
            type: "STREAMING",
            url: "https://www.twitch.tv/asdf"
        }
    });
});


bot.on("message", async message =>
{



    if (message.content.startsWith("!배워")) { 
        let file = JSON.parse(fs.readFileSync('data/weekdata.json', 'utf8'));
        var args = message.content.substring(4);
        var a = args.split(" ");
        var 배울명령어 = a[0];
        var 대답1 = a[1]
        if(!배울명령어) {
            return message.channel.send("올바르지 않은 명령어 입니다.");
        }
        if(!file[a[0]]) {
            file[a[0]] = { 
                명령어 : 배울명령어, 대답: 대답1
            };
            fs.writeFile("data/weekdata.json", JSON.stringify(file, null, 2), err => {
                if (err) throw err;
            });
            message.channel.send("완료")
        }
        else{
            message.channel.send("이미 존재하는 명령어");
        }
    }
    if (message.content.startsWith("!수정")) { 
        let file = JSON.parse(fs.readFileSync('data/weekdata.json', 'utf8'));
        var args = message.content.substring(4);
        var a = args.split(" ");
        var 배울명령어 = a[0];
        var 대답1 = a[1]
        if(!배울명령어) {
            return message.channel.send("올바르지 않은 명령어 입니다.");
        }
        if(file[a[0]]) {
            file[a[0]] = { 
                명령어 : 배울명령어, 대답: 대답1
            };
            fs.writeFile("data/weekdata.json", JSON.stringify(file, null, 2), err => {
                if (err) throw err;
            });
            message.channel.send("완료")
        }
        else{
            message.channel.send("ㄷㄷ");
        }
    }
    if (message.content.startsWith("!embed")) {
        var args = message.content.substring(6);
        const ㅇㅅㅇ = new Discord.MessageEmbed() 
        .setColor("#2f3136")
        //.setTitle(title)
        .setDescription(args)
        .setTimestamp();
        message.channel.send(ㅇㅅㅇ);

    }

    if (message.content.startsWith("")) { 
        let file = JSON.parse(fs.readFileSync('data/weekdata.json', 'utf8'));
        var args = message.content.substring();
        if(!file[args]) return;
        message.channel.send(file[args].대답);
    }
        
});
bot.login("Nzc1OTQ1ODk5MTM4NDgyMTc2.X6tt7g.RjN40PRpuoQ-2YkqyXvAvWkT3-I");
