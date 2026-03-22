import './App.css'
import { LevelFour } from './components/LevelFour'
import { LevelThree } from './components/LevelThree'
import { ParallaxBackground } from './components/Parallaxbackground'
import { RSVP } from './components/RSVP'

function App() {

  return (
    <>
    <ParallaxBackground></ParallaxBackground>
    <LevelThree></LevelThree>
    <LevelFour></LevelFour>
    <RSVP></RSVP>
    </>
  )
}

export default App
