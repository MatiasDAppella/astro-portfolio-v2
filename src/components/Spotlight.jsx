import { useEffect, useState } from 'preact/hooks'

export function Spotlight(){
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })

  const moveHandler = (event) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', moveHandler)
    return (() => window.removeEventListener('mousemove', moveHandler))
  }, [])

  return (<div
    id="light"
    className="pointer-events-none fixed inset-0 h-screen w-screen top-0 left-0 z-50"
    style={`background: radial-gradient(600px at ${mouseCoordinates.x}px ${mouseCoordinates.y}px, rgba(29, 78, 216, 0.15), transparent 80%);`}>
  </div>)
};