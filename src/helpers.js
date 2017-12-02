
// Rename ts files to js
// a.tsx -> a.jsx
// a.ts -> a.js
const renameFile = fileName => {
  return fileName.replace('.ts', '.js');
};

const addFlowHeader = fileContents => {
  return `// @flow\n${fileContents}`;
};

module.exports = {
  renameFile,
  addFlowHeader
};
