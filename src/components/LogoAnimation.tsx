import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function LogoAnimation() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenAnimation = localStorage.getItem('logoAnimationShown');
    
    if (!hasSeenAnimation) {
      setShowAnimation(true);
    }
  }, []);

  const handleVideoEnd = () => {
    // Ensure video has actually finished playing
    if (videoRef.current && videoRef.current.ended) {
      setVideoEnded(true);
      // Mark as shown in localStorage only after video finishes
      localStorage.setItem('logoAnimationShown', 'true');
      // Small delay before hiding to ensure smooth transition
      setTimeout(() => {
        setShowAnimation(false);
      }, 500);
    }
  };

  // Ensure video plays and doesn't get interrupted
  useEffect(() => {
    if (videoRef.current && showAnimation) {
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  }, [showAnimation]);

  if (!showAnimation) {
    return null;
  }

  const animationContent = (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-500 ${
        videoEnded ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        pointerEvents: videoEnded ? 'none' : 'auto',
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onLoadedData={() => {
          // Ensure video plays when loaded
          if (videoRef.current) {
            videoRef.current.play();
          }
        }}
        className="w-full h-full object-contain"
        style={{ 
          maxWidth: '100vw', 
          maxHeight: '100vh',
          zIndex: 99999,
          position: 'relative'
        }}
      >
        <source src="/Logo Animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  // Render directly to document body to ensure it's above everything
  return typeof document !== 'undefined' 
    ? createPortal(animationContent, document.body)
    : null;
}
