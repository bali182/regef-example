import React from 'react'
import { Provider } from 'react-redux'
import { Diagram } from 'regef'

import createStore from '../../src/state'
import createEngine from '../../src/diagramEngine'
import Root from '../../src/components/Root'

const store = createStore()
const engine = createEngine()

store.subscribe(() => console.log(JSON.stringify(store.getState())))

const Demo1 = () => (<Provider store={store}>
  <Diagram engine={engine}>
    <Root />
  </Diagram>
</Provider>)

export default Demo1
