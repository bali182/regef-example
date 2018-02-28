import { SelectionProvider } from 'regef'

export default class DiagramSelectionProvider extends SelectionProvider {
  selection() {
    const ids = this.toolkit.root().props.selection
    return this.toolkit.nodes()
      .filter(({ props: { id } }) => ids.indexOf(id) >= 0)
  }
}