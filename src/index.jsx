import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Diagram } from 'regef'

import createStore from './state'
import createEngine from './diagramEngine'
import Root from './components/Root'

render(
  <Provider store={createStore()}>
    <Diagram engine={createEngine()}>
      <Root />
    </Diagram>
  </Provider>,
  document.getElementById('app'),
)
