/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Anthony Yanez (https://sketchfab.com/paulyanez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/patrick-star-spongebob-02de99ecb51c486891f6438149e7e3cd
Title: Patrick Star (Spongebob)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const PatrickStar = (props) => {
  const { nodes, materials } = useGLTF('/models/PatrickStar.glb')
  const group = useRef(); // Create a reference to the group

  // Rotate the model slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Adjust this value to control rotation speed
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.892, 0.845, 0.892]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_09_-_Default_0'].geometry}
          material={materials['09_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_07_-_Default_0'].geometry}
          material={materials['07_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_14_-_Default_0'].geometry}
          material={materials['14_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_08_-_Default_0'].geometry}
          material={materials['08_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Patrick_Star_13_-_Default_0'].geometry}
          material={materials['13_-_Default']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/PatrickStar.glb')

export default PatrickStar

