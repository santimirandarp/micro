#!/bin/env node

import chalk from "chalk";
import data from "./quotes.js";

const log = console.log;
const rand = Math.floor(Math.random() * data.length);

const { quote, author } = data[rand];

// When user executes the CLI with "full"
if (process.argv.slice(2).indexOf("full") !== -1) {
  const date = new Date().toDateString();
  const user = process.env.USERNAME;

  if (user) log("\n " + chalk.bold(user) + " | " + date);
  else log("\n " + date);
}

log(
  "\n " +
    chalk.italic(quote) +
    "\n " +
    chalk.bold.white.bgMagenta(author) +
    "\n"
);
