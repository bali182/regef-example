import React from 'react'
import { Provider } from 'react-redux'
import { Diagram } from 'regef'

import createStore from '../../src/state'
import createEngine from '../../src/diagram'
import Root from '../../src/components/Root'

const store = createStore()
const engine = createEngine(store)

store.subscribe(() => console.log(store.getState()))

const DemoFull = () => (<Provider store={store}>
  <Diagram engine={engine}>
    <Root />
  </Diagram>
</Provider>)

export default DemoFull
