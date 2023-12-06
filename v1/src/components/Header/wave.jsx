import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';


const WaveEffect = () => {

    const [amplitude, setAmplitude] = useState(5);

    useEffect(() => {
      // Increase amplitude to 40 after 2 minutes
      const increaseAmplitudeTimeout = setTimeout(() => {
        setAmplitude(20);
  
        // Return to initial amplitude after 1 second
        const resetAmplitudeTimeout = setTimeout(() => {
          setAmplitude(10);
        }, 3000);
  
        return () => clearTimeout(resetAmplitudeTimeout);
      },  2000);
  
      return () => clearTimeout(increaseAmplitudeTimeout);
    }, []);



  return (
    <div className="wave-container">
        <Wave fill='#1f1f1f'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 1,
            amplitude: amplitude,
            speed: 0.45,
            points: 3
          }}
        />
      </div>
  )
}

export default WaveEffect