#!/bin/env node

import chalk from "chalk";
import data from "./quotes.js";

const rand = Math.floor(Math.random() * data.length);
const { quote, author } = data[rand];

// When user executes the CLI with "full"
export function format(quote,author){
  let result = "";

  // with date
  if (process.argv.slice(2).indexOf("full") !== -1) {
    const date = (new Date()).toDateString();
    const user = process.env.USERNAME;
    if (user) result += "\n " + chalk.bold(user) + " | "
    result += date;
  }

  if (quote) result += "\n " + chalk.italic(quote) + "\n "
  if (author) result += chalk.bold.white.bgMagenta(author)

  return result
}

console.log(format(quote,author))
