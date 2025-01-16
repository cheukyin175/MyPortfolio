import { Suspense } from "react"
import PatrickStar from "../components/PatrickStar"
import CanvasLoader from "../components/CanvasLoader"
import { Canvas } from "@react-three/fiber"

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-s mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Hugo <span className="waving-hand">👻</span></p>
                <p className="hero_tag text-white">A Data Science Student</p>
            </div>

            <div className="w-full h-full absolute absolute inset-0">
                <Canvas className="w-full h-full z-0">
                    <Suspense fallback={<CanvasLoader />}>
                    
                    <perspectiveCamera makeDefault position={[0, 0, 30]} />
                    <PatrickStar scale={0.013} position={[0, -0.6, 0]} rotation={[0, 0.2, 0]}/>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 18]} intensity={3.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero