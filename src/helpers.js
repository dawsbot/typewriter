
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
  return fileContents
    .replace(/interface\s+(\w*)\s+/, replacer);
};

// "import {Prop} from './types'"" -> "import type {Prop} from './types'"
const replaceTypeImport = fileContents => {
  const replacer = (_, beforeEquals, afterEquals) => `${beforeEquals}type ${afterEquals}`;
  return fileContents
    .replace(/(import )(.*\/types(.tsx?)?['"\/].*)/, replacer);
    // .replace(/import (.*types)['"]/, replacer);
};

module.exports = {
  renameFile,
  addFlowHeader,
  removePrivatePublic,
  replaceInterfaceDeclaration,
  replaceTypeImport
};
