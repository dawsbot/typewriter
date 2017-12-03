
// Rename ts files to js
// a.tsx -> a.jsx
// a.ts -> a.js
const renameFile = fileName => {
  return fileName.replace('.ts', '.js');
};

const addFlowHeader = fileContents => {
  return `// @flow\n${fileContents}`;
};

const removePrivatePublic = fileContents => {
  return fileContents
    .replace('private ', '')
    .replace('public ', '');
};

module.exports = {
  renameFile,
  addFlowHeader,
  removePrivatePublic
};
