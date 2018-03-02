import React from 'react'
import { Deck, Slide, Heading, Text, Link, Appear, Fit, Image } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import DemoFull from './demos/DemoFull'

import images from './assets'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#666',
  },
  {
    primary: 'sans-serif',
    secondary: 'sans-serif',
  },
)

// eslint-disable-next-line react/prefer-stateless-function
class Presentation extends React.Component {
  render() {
    return (<Deck transition={['slide']} theme={theme}>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Diagrams
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          with React
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Image src={images.chart.replace('/', '')} />
        <Heading size={1} fit caps lineHeight={1} textColor="red">
          Not this
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Balázs Édes
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold caps>
          Workday Studio Team
        </Text>
      </Slide>
      <Slide bgColor="primary" bgImage={images.studio.replace('/', '')} />
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Libraries
        </Heading>
        <Appear><Text fit caps bold size={1}>Custom DOM handling</Text></Appear>
        <Appear><Text fit caps size={1} textColor="tertiary">Unclear webpack integration</Text></Appear>
        <Appear><Text fit caps bold size={1}>Not open source</Text></Appear>
        <Appear><Text fit caps size={1} textColor="tertiary">Restrictive rendering or model</Text></Appear>
        <Appear><Text fit caps bold size={1}>Unmaintained</Text></Appear>
      </Slide>
      <Slide bgColor="primary" bgImage={images.react.replace('/', '')} >
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Why not just
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          React
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          components?
        </Heading>
      </Slide>
      <Slide bgColor="primary" >
        <Text margin="10px 0px" textColor="tertiary" size={1} caps fit bold>
          regef
        </Text>
        <Text margin="20px 0px" size={1} fit>
          <Link href="https://github.com/bali182/regef" textColor="secondary" style={{ textDecoration: 'underline' }}>
            https://github.com/bali182/regef
          </Link>
        </Text>
      </Slide>
      <Slide bgColor="primary" bgImage={images.paint.replace('/', '')} bgDarken={0.7}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Render...
        </Heading>
        <Heading margin="30px 0px 0px" size={1} fit caps lineHeight={1} textColor="primary">
          ...whatever you want
        </Heading>
      </Slide>
      <Slide bgColor="primary" bgImage={images.construction.replace('/', '')} bgDarken={0.7}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Model...
        </Heading>
        <Heading margin="30px 0px 0px" size={1} fit caps lineHeight={1} textColor="primary">
          ...however you want
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <DemoFull />
      </Slide>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          How is this built?
        </Heading>
        <Image src={images.bob.replace('/', '')} />
      </Slide>
    </Deck>)
  }
}

export default Presentation
