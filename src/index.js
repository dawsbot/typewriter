'use strict';
const fs = require('fs');
const globby = require('globby');
const figures = require('figures');
const chalk = require('chalk');

const helpers = require('./helpers');

// TODO: make this async and parallel
// unplural version of exported function
const convertFile = fileName => {
  const fileContent = fs.readFileSync(fileName);

  const newFileContent = helpers.removePrivatePublic(
    helpers.addFlowHeader(fileContent)
  );

  const newFileName = helpers.renameFile(fileName);

  fs.writeFileSync(newFileName, newFileContent, 'utf8');
  fs.unlinkSync(fileName);
  return newFileName;
};

// Takes in an array of valid filePaths
module.exports = filePaths => {
  if (!Array.isArray(filePaths)) {
    throw new TypeError(`Expected an array, got ${typeof filePaths}`);
  }
  filePaths.forEach(filePath => {
    if ((typeof filePath) !== 'string') {
      throw new TypeError(`Expected each element in array to be a string, got ${typeof filePath} for element ${filePath}`);
    }
  });

  return globby(filePaths)
    .then(filesToConvert => {
      if (filesToConvert.length === 0) {
        console.error(
          chalk.red(`No valid ".tsx" or ".ts" files matching your query "${filePaths}". Exiting`)
        );
      }

      filesToConvert.forEach(fileName => {
        // Exit if not a ts or tsx file
        if (!(/.tsx?$/.test(fileName))) {
          return;
        }

        const newFileName = convertFile(fileName);
        console.log(
          chalk.green(`${figures.tick} Converted ${fileName} -> ${newFileName}`)
        );
      });
    });
};
