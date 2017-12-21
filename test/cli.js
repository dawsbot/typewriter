import path from 'path';
import fs from 'fs';
import execa from 'execa';

import test from 'ava';
import tempDirCp from 'temp-dir-cp';

const cliPath = './src/cli.js';
const testFixturePath = path.join(__dirname, 'fixtures', 'hard');

test('happy path', async t => {
  const tempDir = tempDirCp(testFixturePath);
  const inputFilePath = path.join(tempDir, 'input.ts');
  const inputContent = fs.readFileSync(inputFilePath, 'utf8');

  const expectedOutputFilePath = path.join(tempDir, 'expected-output.js');
  const outputFilePath = path.join(tempDir, 'input.js');

  // Ensure initial state is correct
  t.true(fs.existsSync(inputFilePath));
  t.true(fs.existsSync(expectedOutputFilePath));
  t.false(fs.existsSync(outputFilePath));

  // Run typewriter as if you were on the cli
  await execa(cliPath, [inputFilePath]);

  t.false(fs.existsSync(inputFilePath));
  t.true(fs.existsSync(outputFilePath));

  const expectedOutputContent = fs.readFileSync(expectedOutputFilePath, 'utf8');
  const actualOutputContent = fs.readFileSync(outputFilePath, 'utf8');

  // Input and output are not equal
  t.not(inputContent, expectedOutputContent);
  t.is(actualOutputContent, expectedOutputContent);
});
