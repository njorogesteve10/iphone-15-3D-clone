import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useEffect(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, y:-50, delay: 2.5 });

  }, []);

  const handleScreenSize = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize);
    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, []);

  return (
    <section className='hero-section'>
      <div className='video-container'>
      <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <video className='video' key={videoSrc} autoPlay muted playsInline={true}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="highlights" className='btn'>buy</a>
       <p className='font-normal text-xl'>from $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
