import {
  Engine,
  SelectionProvider,
  NodeMouseHandler,
  ConnectMouseHandler,
  SingleSelectionMouseHandler,
  MultiSelectionMouseHandler,
  CancelMouseHandlersKeyHandler,
  DeleteKeyHandler,
} from 'regef'

class DiagramSelectionProvider extends SelectionProvider {
  selection() {
    const ids = this.toolkit.root().props.selection
    return this.toolkit.nodes()
      .filter(({ props: { id } }) => ids.indexOf(id) >= 0)
  }
}

const createEngine = () => new Engine({
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

export default createEngine
