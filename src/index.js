import chalk from "chalk";
import data from "./quotes.js";

const rand = Math.floor(Math.random()*data.length)

const { quote, author } = data[rand]

// When user executes the CLI with "full" 
if(process.argv.slice(2,).indexOf("full")!==-1){
  const date = (new Date()).toDateString()
  const user = process.env.USERNAME

  if(user) console.log("\n "+ chalk.bold(user) + " | "+ date + "\n")
  else console.log("\n "+date + "\n")
}

console.log(" "+chalk.italic(quote)+"\n "+chalk.bold.white.bgMagenta(author)+"\n")
