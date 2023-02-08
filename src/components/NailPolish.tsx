import { ContactShadows, PresentationControls, Float, Text,Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function NailPolis() {
    const model = useLoader(GLTFLoader, './models/scene.gltf')
    console.log(model)

    return <>
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <PresentationControls global
            rotation={[0.1, 0.1, 0]}>
            <Float>
                <primitive
                    object={model.scene}
                    scale={30}
                    position={[3, -2, 1.2]} >
                </primitive>   
            </Float>
           
        </PresentationControls>
        <ContactShadows position-y={- 1.4} opacity={0.5} blur={2.4} />

    </>

}