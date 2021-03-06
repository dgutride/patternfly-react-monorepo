import React from 'react';
import { storiesOf } from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';

import {
  Toolbar,
  ToolbarResults,
  ToolbarRightContent,
  ToolbarFind,
  ToolbarViewSelector
} from '../../index';

import {
  MockToolbarExample,
  mockToolbarExampleSource
} from './__mocks__/mockToolbarExample';

const stories = storiesOf('Toolbar', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Toolbar',
    documentationLink:
      'http://www.patternfly.org/pattern-library/forms-and-controls/toolbar/'
  })
);

stories.add(
  'Toolbar',
  withInfo({
    source: false,
    propTables: [
      Toolbar,
      ToolbarResults,
      ToolbarRightContent,
      ToolbarFind,
      ToolbarViewSelector
    ],
    propTablesExclude: [MockToolbarExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockToolbarExampleSource}</pre>
      </div>
    )
  })(() => {
    const logAction = decorateAction([args => args]);
    return (
      <MockToolbarExample
        onFiltersChanged={logAction('filterChanged')}
        onSortChanged={logAction('sortChanged')}
        onViewChanged={logAction('viewChanged')}
        onActionPerformed={logAction('actionPerformed')}
        onFindAction={logAction('findAction')}
      />
    );
  })
);
