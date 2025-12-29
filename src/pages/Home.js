import React from 'react';
import Plasma from '../components/plasma'; // adjust path if needed
import './Home.css';


function Home() {
  return (
    <div className="home">
      <div style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'white',
      }}>
       <div className="plasma-wrapper">
        <Plasma
          color="#f6b4d8"      // 👈 soft pink smoke tone
          speed={0.35}
          direction="forward"
          scale={1.1}
          opacity={0.6}        // higher opacity = more visible color
          mouseInteractive={false}
        />
          </div>
          {/* Overlayed hero text */}
      <div className="hero">
        <h1>Welcome to my personal portfolio</h1>
      </div>
      </div>
    </div>
  );
}

export default Home;