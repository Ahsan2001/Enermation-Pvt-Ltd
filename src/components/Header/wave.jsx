import React from 'react';
import Wave from 'react-wavify';


const WaveEffect = () => {
  return (
    <div className="wave-container">
      <Wave fill='#000'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 1,
          amplitude: 10,
          speed: 0.45,
          points: 3
        }}
      />
    </div>
  )
}

export default WaveEffect