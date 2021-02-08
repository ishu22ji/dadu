const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ishuserver.aternos.me',
    port: '59723',
    username: 'hello',
})

bot.on('login',function(){
	console.log("Logged In")
	bot.chat("/login qwer");
})
