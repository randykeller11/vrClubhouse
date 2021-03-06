/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pyramidion.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.18}>
        <group position={[-5.71, -5.46, -0.3]}>
          <mesh geometry={nodes.Mesh_0.geometry} material={materials['statue-6-hi']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
          <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pyramidion.glb')
