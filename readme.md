# typewriter [![Build Status](https://travis-ci.org/dawsbot/typewriter.svg?branch=master)](https://travis-ci.org/dawsbot/typewriter)

> TypeScript -> Flow Converter for tsx and ts files

<p align="center">
  <img src="./media/typewriter.jpg" title="typewriter" width="400px"/>
</p>

## Install

```
$ npm install --global tw-cli
```

## Usage
```
$ typewriter index.tsx
✔ Converted index.tsx -> index.jsx

$ typewriter src
✔ Converted src/index.tsx -> src/index.jsx
✔ Converted src/App.tsx -> src/App.jsx

$ typewriter src index.tsx
✔ Converted src/index.tsx -> src/index.jsx
✔ Converted src/App.tsx -> src/App.jsx
✔ Converted index.tsx -> index.jsx
```

## Feature Tracker

- [x] Rename files from `.ts` -> `.js` & `.tsx` -> `.jsx`
- [x] Add flow header directive to matching files <sup>1</sup>
- [x] Strip `public` and `private` directives
- [ ] Convert function argument syntax from TS -> Flow
- [ ] Convert interface definitions from TS -> Flow

[1] - "matching files": all `.ts` and `.tsx` files

## More Help

```
$ typewriter --help

	Usage
	  $ typewriter [file path]

	Examples
    $ typewriter a.tsx
    ✔ Converted a.tsx -> a.jsx

    $ typewriter dir
    ✔ Converted dir/a.tsx -> dir/a.jsx
    ✔ Converted dir/b.ts -> dir/b.js
```

## License

MIT © [Dawson Botsford](https://dawsbot.com)
