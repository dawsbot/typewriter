<p align="center">
  <img src="./media/typewriter.jpg" title="typewriter" width="700px"/>


  <br/>
  <img src="./media/tagline.png" title="typewriter" width="600px"/>

  <br/>
  <br/>
  <a href="https://travis-ci.org/dawsbot/typewriter">
    <img src="https://travis-ci.org/dawsbot/typewriter.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/skrub-cli">
    <img src="https://img.shields.io/npm/v/skrub-cli.svg">
  </a>

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

#### Ready To Use

- [x] Rename files from `.ts` -> `.js` & `.tsx` -> `.jsx`
```
  a.ts -> a.js
  a.tsx -> a.jsx
```
- [x] Add flow keyword quote (`// @flow`)
```
  "content" -> "// @flow\ncontent"
```

- [x] Strip `public` and `private` keywords
```
  "public render()" -> "render()"
```

- [x] Interface -> type
```
  "interface Prop {}"" -> "type Prop = {}"
```

#### Soon But Not Yet

- [ ] Named imports

```
import { IStore, IUser } from '../../configureStore';
  ^^^^^ Named import from module `../../configureStore`. `IUser` is a type, but not a value. In order to import it, please use `import type`.
```

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
