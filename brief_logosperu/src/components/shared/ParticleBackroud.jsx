import React, { useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback} from 'react';
import particlesConfig from './particle-config';

const ParticleBackroud = () => {

    const particlesInit = useCallback((engine)=>{
        loadSlim(engine)
    });
    
  return (
      <Particles className="animacion" init={particlesInit} params={particlesConfig} />
  )
}

export default ParticleBackroud