#!/usr/bin/env node
import yargs from 'yargs';
import GenerateIcon from '../lib/app.js';

const cli = yargs
  .usage('Usage: --out [dir] --img [image] --fit [(cover)|contain|fill|inside|outside]')
  .demandOption(['out', 'img'])
  .option('h', {
    alias: 'help',
    describe: 'Show help',
  })
  .option('o', {
    alias: 'out',
    desc: 'Output directory',
    default: 'android/app/src/main',
    type: 'string',
  })
  .option('i', {
    alias: 'img',
    desc: 'Images to convert',
    type: 'string',
  })
  .option('f', {
    alias: 'fit',
    desc: 'Image should be resized to fit both provided dimensions',
    choices: ['cover', 'contain', 'fill', 'inside', 'outside'],
    default: 'cover',
  })
  .argv;

GenerateIcon(cli.i, cli.o, cli.f);
