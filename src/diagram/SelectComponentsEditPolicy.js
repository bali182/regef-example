import { DispatchingEditPolicy } from 'regef'

export default class SelectComponentsEditPolicy extends DispatchingEditPolicy {
  select({ selection }) {
    const ids = selection.map((component) => component.props.id)
    this.dependencies.setSelection({ selection: ids })
  }

  requestSelectFeedback({ bounds }) {
    this.toolkit.root().setState({ selectionFeedback: bounds })
  }

  eraseSelectFeedback() {
    this.toolkit.root().setState({ selectionFeedback: null })
  }
}
