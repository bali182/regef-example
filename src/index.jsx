import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import {
  Diagram,
  Engine,
  NodeMouseHandler,
  ConnectMouseHandler,
  SingleSelectionMouseHandler,
  MultiSelectionMouseHandler,
  CancelMouseHandlersKeyHandler,
  DeleteKeyHandler,
} from 'regef'

import store from './state/store'
import Root from './components/Root'
import DiagramSelectionProvider from './DiagramSelectionProvider'

const engine = new Engine({
  mouseHandlers: [
    new NodeMouseHandler(),
    new ConnectMouseHandler(),
    new SingleSelectionMouseHandler(),
    new MultiSelectionMouseHandler(),
  ],
  keyHandlers: [
    new CancelMouseHandlersKeyHandler(),
    new DeleteKeyHandler(),
  ],
  selectionProvider: new DiagramSelectionProvider(),
})

render(
  (<Provider store={store}>
    <Diagram engine={engine}>
      <Root />
    </Diagram>
  </Provider>),
  document.getElementById('app'),
)