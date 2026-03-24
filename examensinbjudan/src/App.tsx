import './App.css'
import { Level1 } from './components/Level1'
import { LevelFour } from './components/LevelFour'
import { LevelThree } from './components/LevelThree'
import { ParallaxBackground } from './components/Parallaxbackground'
import { RSVP_Form } from './components/RSVP_Form/RSVP_Form'

function App() {

  return (
    <>
    <ParallaxBackground></ParallaxBackground>
    <Level1/>
    <LevelThree></LevelThree>
    <LevelFour></LevelFour>
    <RSVP_Form/>
    </>
  )
}

export default App
