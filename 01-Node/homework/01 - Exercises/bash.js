const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   process.stdout.write("prompt > ");
   process.stdin.on("data", (data)=>{
      let args = String(data).trim();
      let cmd = args.split(' ')[0];
      commands.hasOwnProperty(cmd)?commands[cmd](print, args.substring(cmd.length+1)):print(`command not found: ${cmd}`);
   })
}

bash();
module.exports = {
   print,
   bash,
};

function print (output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ")
}