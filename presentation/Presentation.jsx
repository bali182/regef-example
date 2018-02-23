import React from 'react'
import { Deck, Slide, Heading, Text, Fill, Link } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import Demo1 from './demos/Demo1'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
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
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Flowcharts
      </Heading>
        <Text margin="10px 0px" textColor="tertiary" size={1} caps fit>
          Using react + regef
      </Text>
        <Text margin="20px 0px" size={1} fit>
          <Link href="https://github.com/bali182/regef" textColor="secondary" style={{ textDecoration: 'underline' }}>
            https://github.com/bali182/regef
        </Link>
        </Text>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Balázs Édes
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold caps>
          Studio team
        </Text>
      </Slide>
      <Slide bgColor="primary">
        <Demo1 />
      </Slide>
    </Deck>)
  }
}

export default Presentation
