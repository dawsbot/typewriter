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

  // Multiples in one line
  t.is(helpers.removePrivatePublic('private helper()\nprivate otherHelper()'), 'helper()\notherHelper()');
  t.is(helpers.removePrivatePublic('public helper()\npublic otherHelper()'), 'helper()\notherHelper()');
  t.is(helpers.removePrivatePublic('public helper()\nprivate otherHelper()'), 'helper()\notherHelper()');
});

test('interface declaration', t => {
  t.is(helpers.replaceInterfaceDeclaration('interface Props {content}'), 'type Props = {content}');
  t.is(helpers.replaceInterfaceDeclaration('interface Props { content }'), 'type Props = { content }');
  t.is(helpers.replaceInterfaceDeclaration('interface 1Props {content}'), 'type 1Props = {content}');

  // Multiples in one line
  t.is(helpers.replaceInterfaceDeclaration('interface Props {content}\ninterface OtherProps {other-content}'), 'type Props = {content}\ntype OtherProps = {other-content}');
});

test('type import', t => {
  // Alter type import
  t.is(
    helpers.replaceTypeImport(`import {Prop} from './types'`),
    `import type {Prop} from './types'`
  );
  t.is(
    helpers.replaceTypeImport(`import {Prop} from './types.ts'`),
    `import type {Prop} from './types.ts'`
  );
  t.is(
    helpers.replaceTypeImport(`import {Prop} from "./types"`),
    `import type {Prop} from "./types"`
  );
  t.is(
    helpers.replaceTypeImport(`import {Prop} from "./types/typeA"`),
    `import type {Prop} from "./types/typeA"`
  );
  t.is(
    helpers.replaceTypeImport(`import {Prop} from "../interfaces/typeA"`),
    `import type {Prop} from "../interfaces/typeA"`
  );
  t.is(
    helpers.replaceTypeImport(`import {Prop} from "../interface/typeA"`),
    `import type {Prop} from "../interface/typeA"`

  );
  // Dont alter normal imports (non "types" file)
  t.is(
    helpers.replaceInterfaceDeclaration('import {Prop} from \'./not-types\''),
    'import {Prop} from \'./not-types\''
  );
});

test('remove readonly', t => {
  // Should remove "readonly" keyword
  t.is(helpers.removeReadonly('readonly prop'), 'prop');
  t.is(helpers.removeReadonly('  readonly prop'), '  prop');

  // Should not alter readonly which does not start the line
  t.is(helpers.removeReadonly('const readonly;'), 'const readonly;');
});

test('Replace JSX.Element', t => {
  t.is(helpers.replaceJSXElement(':JSX.Element'), ':React.Node', 'should replace');
  t.is(helpers.replaceJSXElement(':jsx.Element'), ':jsx.Element', 'should not replace');
});
