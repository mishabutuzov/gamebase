import Particles from "react-tsparticles";
import particlesConfig from './config';

const ParticlesBackground = () => {

    return (
        <Particles
        className="particles"
        params={particlesConfig}
        >
        </Particles>
    );
}

export default ParticlesBackground;