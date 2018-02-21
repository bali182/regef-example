const initial = {
  components: {
    root: {
      type: 'ROOT',
      children: [
        'input',
        'transform',
        'transform2',
        'output',
      ],
    },
    input: {
      type: 'NODE',
      x: 10,
      y: 130,
      connections: [
        'transform',
      ],
    },
    output: {
      type: 'NODE',
      x: 600,
      y: 130,
    },
    transform: {
      type: 'CONTAINER',
      x: 100,
      y: 100,
      children: [
        'filter',
        'map',
        'reduce',
      ],
      connections: [
        'transform2',
      ],
    },
    transform2: {
      type: 'CONTAINER',
      x: 350,
      y: 100,
      children: [
        'flatMap',
        'concat',
        'flatten',
      ],
      connections: [
        'output',
      ],
    },

    filter: {
      type: 'STEP',
    },
    map: {
      type: 'STEP',
    },
    reduce: {
      type: 'STEP',
    },
    flatMap: {
      type: 'STEP',
    },
    concat: {
      type: 'STEP',
    },
    flatten: {
      type: 'STEP',
    },
  },
  selection: [],
}

export default initial
