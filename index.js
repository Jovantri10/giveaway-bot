const axios = require("axios")
const urls = ["https://official-giveaway-bot.newt10.repl.co"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
