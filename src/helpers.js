
// Rename ts files to js
// a.tsx -> a.jsx
// a.ts -> a.js
const renameFile = fileName => {
  return fileName.replace('.ts', '.js');
};

// "content" -> "// @flow\ncontent"
const addFlowHeader = fileContents => {
  return `// @flow\n${fileContents}`;
};

// "public render()" -> "render()"
const removePrivatePublic = fileContents => {
  return fileContents
    .replace(new RegExp('private ', 'g'), '')
    .replace(new RegExp('public ', 'g'), '');
};

// "interface Prop {}"" -> "type Prop = {}"
const replaceInterfaceDeclaration = fileContents => {
  const replacer = (_, interfaceName) => `type ${interfaceName} = `;
  const reg = new RegExp(/interface\s+(\w*)\s+/g);
  return fileContents
    .replace(reg, replacer);
};

// "import {Prop} from './types'"" -> "import type {Prop} from './types'"
const replaceTypeImport = fileContents => {
  const replacer = (_, beforeEquals, afterEquals) => `${beforeEquals}type ${afterEquals}`;
  const reg = new RegExp(/(import )(.*\/(?:types|interfaces?).*)/g);
  return fileContents
    .replace(reg, replacer);
};

// "readonly prop" -> "prop"
const removeReadonly = fileContents => {
  const replacer = (_, whitespace, restOfLine) => {
    return `${whitespace || ''}${restOfLine}`;
  };
  const reg = new RegExp(/^(\s*)readonly (.*)/g);
  return fileContents
    .replace(reg, replacer);
};

// - [ ] `JSX.Element` -> `React.Node`
const replaceJSXElement = fileContents => {
  return fileContents.replace('JSX.Element', 'React.Node');
};

module.exports = {
  renameFile,
  addFlowHeader,
  removePrivatePublic,
  replaceInterfaceDeclaration,
  replaceTypeImport,
  removeReadonly,
  replaceJSXElement
};
