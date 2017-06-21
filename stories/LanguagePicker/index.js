import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/LanguagePicker/README.md';
import TabbedView from '../utils/Components/TabbedView';
import ReadmeTestKit from '../../src/LanguagePicker/README.TESTKIT.md';

import Example from './Example';
import ExampleRaw from '!raw!./Example';

storiesOf('Core', module)
  .add('LanguagePicker', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme}/>
        <h1>Usage examples</h1>
        <CodeExample title="example" code={ExampleRaw}>
          <Example/>
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
