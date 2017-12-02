#!/usr/bin/env node
'use strict';
const meow = require('meow');
const typewriter = require('.');

const cli = meow(`
	Usage
	  $ typewriter [file path]

	Examples
    $ typewriter a.tsx
    ✔ Converted a.tsx -> a.jsx

    $ typewriter dir
    ✔ Converted dir/a.tsx -> dir/a.jsx
    ✔ Converted dir/b.ts -> dir/b.js
`);

const args = cli.input;
if (args.length < 1) {
  console.error('Argument required. Exiting.');
  cli.showHelp();
  process.exit();
}

typewriter(args, cli.flags);
