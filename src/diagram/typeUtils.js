export const isRoot = (component) => Boolean(component) && Boolean(component.props.root)
export const isNode = (component) => Boolean(component) && Boolean(component.props.node)
export const isStep = (component) => Boolean(component) && Boolean(component.props.step)
export const isContainer = (component) => Boolean(component) && Boolean(component.props.container)
