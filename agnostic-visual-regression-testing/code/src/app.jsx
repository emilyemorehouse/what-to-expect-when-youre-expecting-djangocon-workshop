import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import colors from './colors'
import theme from './theme'

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    margin: 0;
  }
`
/* eslint-enable no-unused-expressions */

const AppContainer = styled.div`
  background-color: ${theme.background.lighten(0.8)};
  border: solid 4px ${theme.background};
  width: 80vw;
  min-height: 80vh;
  margin: 10vh auto;
  padding: 10px;
`

const Title = styled.h1`
  color: white;
  text-align: center;
`
const Dinos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`
const Dino = styled.img`
  width: percentage(1 / 2);
  align-self: center;
  justify-self: center;
`

const App = () => (
  <ThemeProvider theme={colors}>
    <AppContainer>
      <Title>
        Open the door, get on the floor<br />
        Everybody walk the dinosaur
      </Title>

      <Dinos>
        <Dino
          src="https://res.cloudinary.com/dovbrtmkv/image/upload/c_scale,w_201/v1502316246/Jurassic Pen/diplodocus.png"
          alt="diplodocus"
        />
        <Dino
          src="https://res.cloudinary.com/dovbrtmkv/image/upload/c_scale,w_201/v1502316246/Jurassic Pen/stegosaurus.png"
          alt="stegosaurus"
        />
        <Dino
          src="https://res.cloudinary.com/dovbrtmkv/image/upload/c_scale,w_201/v1502316246/Jurassic Pen/allosaurus.png"
          alt="allosaurus"
        />
        <Dino
          src="https://res.cloudinary.com/dovbrtmkv/image/upload/c_scale,w_201/v1502316246/Jurassic%20Pen/tyrannosaurus-rex.png"
          alt="tyrannosaurus-rex"
        />
        {/* <Dino
          src="https://res.cloudinary.com/dovbrtmkv/image/upload/c_scale,w_201/v1502316246/Jurassic Pen/brachiosaurus.png"
          alt="brachiosaurus"
        /> */}
      </Dinos>
    </AppContainer>
  </ThemeProvider>
)

export default App
