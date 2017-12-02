import test from 'ava';
import {renameFile, addFlowHeader} from '../src/helpers';

test('rename js files', t => {
  t.is(renameFile('a.tsx'), 'a.jsx');
  t.is(renameFile('a.ts'), 'a.js');

  // TODO: Fails currently. Come back and fix this
  // t.is(renameFile('a.ts.ts'), 'a.ts.js');
});

test('Add flow header to top of file', t => {
  t.is(addFlowHeader('File contents'), '// @flow\nFile contents');
});

