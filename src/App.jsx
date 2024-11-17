import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greet from './Greet.jsx'
import Rhain from './Rhain.jsx'
import Header from './assets/Header.jsx'
import SectionAll from './assets/SectionAll.jsx'
import SectionOne from './assets/SectionOne.jsx'
import SectionTwo from './assets/SectionTwo.jsx'
import SectionThree from './assets/SectionThree.jsx'
import SectionFour from './assets/SectionFour.jsx'
import SectionFive from './assets/SectionFive.jsx'
import SectionFiveX from './assets/SectionFiveTestimon.jsx'
import SectionSix from './assets/SectionSix.jsx'
import SectionFooter from './assets/SectionFooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='center'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionFiveX />

      <SectionSix />
    </main>
  )
}

export default App
