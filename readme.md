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

### Ready To Use

- [x] Rename files from `.ts` -> `.js` & `.tsx` -> `.jsx`
- [x] Add flow keyword quote (`// @flow`)
- [x] Strip `public` and `private` keywords
- [x] Interface -> type

### Soon But Not Yet

- [ ] Convert function argument syntax from TS -> Flow
- [ ] Convert interface definitions from TS -> Flow


## More Help

```
$ typewriter --help
```

## Support Development

The work done for this project is free. If you save time with TypeWriter, consider making a [donation](https://liberapay.com/DawsBot).

Are Bitcoin (BTC) donations more your style?

14xAeqDucUpRZkSDQrHCXaKsWmNPeqaB5q

<img src="./media/bitcoin-wallet.png" title="typewriter" width="100px"/>

## License

MIT © [Dawson Botsford](https://dawsbot.com)
