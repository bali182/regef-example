import {
  Engine,
  DragMouseHandler,
  ConnectMouseHandler,
  SingleSelectionMouseHandler,
  MultiSelectionMouseHandler,
  CancelMouseHandlersKeyHandler,
  DeleteKeyHandler,
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
  mouseHandlers: [
    new DragMouseHandler(),
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

export default createEngine
