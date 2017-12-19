<p align="center">
  <img src="./media/typewriter.jpg" title="typewriter"/>

  <br/>
  <img src="./media/tagline.png" title="typewriter" width="600px"/>

  <br/>
  <!-- badges -->
  <img src="https://img.shields.io/badge/Node-%3E%3Dv4-ff69b4.svg">
  <a href="https://travis-ci.org/dawsbot/typewriter">
    <img src="https://travis-ci.org/dawsbot/typewriter.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/tw-cli">
    <img src="https://img.shields.io/npm/v/tw-cli.svg">
  </a>
</p>

<br/>

🎉 Using TypeScript is fun, but [Flow](https://flow.org/) is even better. The typing systems are similar, but the community is quickly supporting Flow for React. Take React Native for example, Flow is supported by default while TypeScript is a nightmare to configure (think `/build` dir, hot reloading, and concurrent typescript compilation separate from babel).

With this increase in open-source effort, many companies are doubling down on Flow (Facebook, Uber, etc.).

<br/>
<p align="center">
  <b>
  Adopt Flow instantly with TypeWriter.
  </b>
</p>
<br/>

⚡️ Tell **TypeWriter** which files you care about, and it will run a [big list of codemods](#default-codemods) instantly!

🔧 *There is minor manual work after running TypeWriter. If you see room for improvement, [create an issue](https://github.com/dawsbot/typewriter/issues/new)!*

<br/>

## Install

```
$ npm install --global tw-cli
```

## Usage

```
$ typewriter src
✔ Converted src/index.ts -> src/index.js
✔ Converted src/App.tsx -> src/App.jsx
```

[See more examples](#more-help)

<br/>

## Codemods Included

- [x] Rename files from `.ts` -> `.js` & `.tsx` -> `.jsx`
```
  a.ts -> a.js
  a.tsx -> a.jsx
```

<br/>

- [x] Add flow keyword quote (`// @flow`)
```
  "content" -> "// @flow\ncontent"
```

<br/>

- [x] Remove `public` and `private` keywords
```
  "public render()" -> "render()"
```

<br/>

- [x] `interface` -> `type`
```
  "interface Prop {}" -> "type Prop = {}"
```

<br/>

- [x] Type imports

* *ensure your types are in `types`, `types/*`, `interface/*`, or `interfaces/*`*

```
// imports from types change
// "import {Prop} from './types'" -> "import type {Prop} from './types'"

// imports from everywhere else are left alone
// "import {NotProp} from './not-types'" -> "import {NotProp} from './not-types'"
```

<br/>

- [x] Remove `readonly`

Before:
```js
{
  readonly color: string
}
```

After:
```js
{
  color: string
}
```

<br/>

- [ ] `JSX.Element` -> `React.Node`

In prop typings for TypeScript, a react element is called `JSX.Element` while in Flow this is `React.Node`.

Before:
```js
{
  element: JSX.Element;
}
```

After:
```js
{
  element: React.Node;
}
```

## More Help

```
$ typewriter --help

  TypeScript -> Flow Converter

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
```

## Support Development

The work done for this project is free. If you save time with TypeWriter, consider making a [donation](https://liberapay.com/DawsBot).

Are Bitcoin (BTC) donations more your style?

14xAeqDucUpRZkSDQrHCXaKsWmNPeqaB5q

<img src="./media/bitcoin-wallet.png" title="typewriter" width="100px"/>

## License

MIT © [Dawson Botsford](https://dawsbot.com)
