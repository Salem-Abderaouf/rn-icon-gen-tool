#!/usr/bin/env node
const app = require("../lib/app.js");

const args = process.argv;
let inputPath = args[2];
let outputPath = args[3];
let fit = args[4] || "cover";

app.GenerateIcon(inputPath, outputPath, fit);
