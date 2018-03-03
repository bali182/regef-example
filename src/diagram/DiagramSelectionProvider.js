import { SelectionProvider } from 'regef'

export default class DiagramSelectionProvider extends SelectionProvider {
  selection() {
    const store = this.dependencies.store
    const { selection } = store.getState()
    return this.toolkit.nodes()
      .filter(({ props: { id } }) => selection.indexOf(id) >= 0)
  }
}
