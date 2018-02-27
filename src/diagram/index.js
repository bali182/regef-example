import {
  Engine,
  DragCapability,
  ConnectCapability,
  SingleSelectionCapability,
  MultiSelectionCapability,
  CancelCapability,
  DeleteCapability,
} from 'regef'

import DiagramSelectionProvider from './DiagramSelectionProvider'

import AddContainerChildrenEditPolicy from './AddContainerChildrenEditPolicy'
import MoveContainerChildrenEditPolicy from './MoveContainerChildrenEditPolicy'
import ConnectComponentsEditPolicy from './ConnectComponentsEditPolicy'
import SelectComponentsEditPolicy from './SelectComponentsEditPolicy'
import MoveRootChildrenEditPolicy from './MoveRootChildrenEditPolicy'
import DeleteComponentsEditPolicy from './DeleteComponentsEditPolicy'
import DisabledAddChildrenEditPolicy from './DisabledAddChildrenEditPolicy'

const createEngine = () => new Engine({
  editPolicies: [
    new AddContainerChildrenEditPolicy(),
    new MoveContainerChildrenEditPolicy(),
    new ConnectComponentsEditPolicy(),
    new SelectComponentsEditPolicy(),
    new MoveRootChildrenEditPolicy(),
    new DeleteComponentsEditPolicy(),
    new DisabledAddChildrenEditPolicy(),
  ],
  capabilities: [
    new DragCapability(),
    new ConnectCapability(),
    new SingleSelectionCapability(),
    new MultiSelectionCapability(),
    new CancelCapability(),
    new DeleteCapability(),
  ],
  selectionProvider: new DiagramSelectionProvider(),
})

export default createEngine
