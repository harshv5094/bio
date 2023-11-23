import { useEffect, useRef, useState } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'
import './App.css'
import MainContent from './content'

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="vantaBackground" ref={vantaRef}>
      <MainContent />
    </div>
  )
}

export default App
