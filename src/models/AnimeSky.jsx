import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import animeSky from '../assets/3d/animesky.glb'
import { useFrame } from '@react-three/fiber'

const AnimeSky = ({isRotating}) => {
    const animesky = useGLTF(animeSky)
    const animeskyRef = useRef();

    useFrame((_,delta) => {
      if(isRotating) {
        animeskyRef.current.rotation.y += 0.2 * delta
      }
    })
  return (
    <mesh ref={animeskyRef}>
<primitive object={animesky.scene} />
    </mesh>
  )
}

export default AnimeSky
