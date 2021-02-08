const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ishuserver.aternos.me',
    port: '59723',
    username: 'hello',
})

bot.on('login',function(){
	console.log("Logged In")
	bot.chat("/login qwer")
	bot.chat("/tp hello -337 69 -354");
})
bot.on('error', console.log)
bot.on('kicked', console.log)
