

import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const shoesModel = '/assets/shoes.glb';
const occlusionRougnessMetalness = '/assets/models/shoes/gltf/occlusionRougnessMetalness.jpg';
const diffuseMidnight = '/assets/models/shoes/gltf/diffuseMidnight.jpg';
const normal = '/assets/models/shoes/gltf/normal.jpg';

export default function Model(props) {

    const { scene, nodes, materials } = useGLTF(shoesModel);

    return (
        <primitive object={scene} {...props} />
    )
};

useGLTF.preload(shoesModel)