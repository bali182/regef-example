import { DispatchingEditPolicy } from 'regef'

export default class DeleteComponentsEditPolicy extends DispatchingEditPolicy {
  delete({ selection }) {
    const ids = selection.map((component) => component.props.id)
    ids.forEach((id) => this.toolkit.root().props.deleteComponent({ id }))
  }
}
