#!/usr/bin/env node
'use strict';
const meow = require('meow');
const typewriter = require('.');

const cli = meow(`
	Usage
    $ typewriter <path|glob> [...]

	Examples
    $ typewriter index.ts
    ✔ Converted index.ts -> index.js

    $ typewriter src
    ✔ Converted src/index.ts -> src/index.js
    ✔ Converted src/App.tsx -> src/App.jsx

    # ignore node_modules

    $ typewriter * '!node_modules/*'
    ✔ Converted src/index.ts -> src/index.js
    ✔ Converted src/App.tsx -> src/App.jsx
    ✔ Converted index.ts -> index.js
`);

const args = cli.input;
if (args.length < 1) {
  console.error('Argument required. Exiting.');
  cli.showHelp();
  process.exit();
}

typewriter(args, cli.flags);
