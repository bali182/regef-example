import { DispatchingEditPolicy } from 'regef'
import { isRoot, isStep, isNode } from './typeUtils'

export default class DisabledAddChildrenEditPolicy extends DispatchingEditPolicy {
  requestAddFeedback({ components, delta, targetContainer }) {
    if (!isRoot(targetContainer) && !isStep(targetContainer) && !isNode(targetContainer)) {
      return
    }
    this.toolkit.root().setState({
      errorFeedback: components.map((c) => this.toolkit.bounds(c).translate(delta)),
    })
  }

  eraseAddFeedback({ targetContainer }) {
    if (!isRoot(targetContainer) && !isStep(targetContainer) && !isNode(targetContainer)) {
      return
    }
    this.toolkit.root().setState({ errorFeedback: null })
  }
}
