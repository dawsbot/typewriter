import test from 'ava';
import * as helpers from '../src/helpers';

test('rename js files', t => {
  t.is(helpers.renameFile('a.tsx'), 'a.jsx');
  t.is(helpers.renameFile('a.ts'), 'a.js');

  // TODO: Fails currently. Come back and fix this
  // t.is(renameFile('a.ts.ts'), 'a.ts.js');
});

test('Add flow header to top of file', t => {
  t.is(helpers.addFlowHeader('File contents'), '// @flow\nFile contents');
});

test('remove all private public ', t => {
  t.is(helpers.removePrivatePublic('public render()'), 'render()');
  t.is(helpers.removePrivatePublic('private helper()'), 'helper()');

  t.is(helpers.removePrivatePublic('private helper()\nprivate otherHelper()'), 'helper()\notherHelper()');
  t.is(helpers.removePrivatePublic('public helper()\npublic otherHelper()'), 'helper()\notherHelper()');
});

test('interface declaration', t => {
  t.is(helpers.replaceInterfaceDeclaration('interface Props {content}'), 'type Props = {content}');
  t.is(helpers.replaceInterfaceDeclaration('interface Props { content }'), 'type Props = { content }');
  t.is(helpers.replaceInterfaceDeclaration('interface 1Props {content}'), 'type 1Props = {content}');
});
