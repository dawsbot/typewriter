import path from 'path';
import fs from 'fs';

import test from 'ava';
import tempDirCp from 'temp-dir-cp';
import globby from 'globby';

import typewriter from '../src/index';

const testFixturePath = path.join(__dirname, 'fixtures', 'easy');
const oldFixtureFileContent = fs.readFileSync(
  path.join(testFixturePath, 'a.ts'), 'utf8'
);

test('error catching', t => {
  const arrayErr = t.throws(() => {
    typewriter(123);
  }, TypeError);
  t.regex(arrayErr.message, /Expected an array/);
  const elementErr = t.throws(() => {
    typewriter([123]);
  }, TypeError);
  t.regex(elementErr.message, /Expected each element in array to be a string/);
});

test('file Conversions', async t => {
  // Copy local fixtures dir to temp directory
  const tempDir = tempDirCp(testFixturePath);

  await typewriter([tempDir]);
  const afterLsResults = globby.sync(tempDir);

  // Should rename files
  t.regex(afterLsResults[0], /a.js$/);
  t.regex(afterLsResults[1], /a.jsx$/);
  // Should not rename file
  t.regex(afterLsResults[2], /b.txt$/);

  // Should change file content
  t.not(oldFixtureFileContent, fs.readFileSync(afterLsResults[0], 'utf8'));
  t.not(oldFixtureFileContent, fs.readFileSync(afterLsResults[1], 'utf8'));
  // Should not change file content
  t.is(oldFixtureFileContent, fs.readFileSync(afterLsResults[2], 'utf8'));

  // Adds flow header
  t.is(fs.readFileSync(afterLsResults[0], 'utf8'), `// @flow\n${oldFixtureFileContent}`);
  t.is(fs.readFileSync(afterLsResults[1], 'utf8'), `// @flow\n${oldFixtureFileContent}`);
});
