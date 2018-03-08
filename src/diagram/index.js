import { bindActionCreators } from 'redux'
import {
  Engine,
  DragCapability,
  ConnectCapability,
  SingleSelectionCapability,
  MultiSelectionCapability,
  CancelCapability,
  DeleteCapability,
} from 'regef'

import { addChildren, addConnection, deleteComponent, setChildren, setPosition, setSelection } from '../state/actions'

import DiagramSelectionProvider from './DiagramSelectionProvider'

import AddContainerChildrenEditPolicy from './AddContainerChildrenEditPolicy'
import MoveContainerChildrenEditPolicy from './MoveContainerChildrenEditPolicy'
import ConnectComponentsEditPolicy from './ConnectComponentsEditPolicy'
import SelectComponentsEditPolicy from './SelectComponentsEditPolicy'
import MoveRootChildrenEditPolicy from './MoveRootChildrenEditPolicy'
import DeleteComponentsEditPolicy from './DeleteComponentsEditPolicy'
import DisabledAddChildrenEditPolicy from './DisabledAddChildrenEditPolicy'

const createEngine = (store) => new Engine({
  capabilities: [
    new DragCapability(),
    new ConnectCapability(),
    new SingleSelectionCapability(),
    new MultiSelectionCapability(),
    new CancelCapability(),
    new DeleteCapability(),
  ],
  editPolicies: [
    new MoveRootChildrenEditPolicy(),
    new AddContainerChildrenEditPolicy(),
    new MoveContainerChildrenEditPolicy(),
    new ConnectComponentsEditPolicy(),
    new SelectComponentsEditPolicy(),
    new DeleteComponentsEditPolicy(),
    new DisabledAddChildrenEditPolicy(),
  ],
  selectionProvider: new DiagramSelectionProvider(),
  dependencies: {
    store,
    ...bindActionCreators(
      { addChildren, addConnection, deleteComponent, setChildren, setPosition, setSelection },
      (action) => store.dispatch(action),
    ),
  },
})

export default createEngine
