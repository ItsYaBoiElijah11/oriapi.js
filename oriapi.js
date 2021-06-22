const Discord = require("discord.js");
const client = new Discord.Client();
const ori = require("oriapi.js");
const dbl = new ori("BOT-TOKEN-HERE", client);

client.login("BOT-TOKEN-HERE");

client.on("ready", async () => {
  dbl.serverCount();
  /* 
  -> Server count posted. 
  or 
  -> Server count & shard count posted.
  */

});
let hasVote = await dbl.hasVoted("User ID"); // -> User ID
  if(hasVote === true) {
      console.log("Voted")
    } else {
      console.log("Vote please.")
  }
// -> Vote please.
let botFind = await dbl.search("Bot-Client-Id");
console.log(botFind.username) // -> Allegro
