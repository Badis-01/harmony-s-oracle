import { useEffect, useState, useCallback } from 'react';

export const MysticCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
    
    // Add trail particle
    setTrail(prev => {
      const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
      return newTrail.slice(-8); // Keep only last 8 particles
    });
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, .glass-card, .glass-card-hover');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Delay to ensure DOM is ready
    setTimeout(addHoverListeners, 1000);
    
    // Add hover listeners on DOM changes
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [handleMouseMove]);

  // Clean up old trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(p => Date.now() - p.id < 200));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Hide custom cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Trail particles */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${4 + index * 0.5}px`,
            height: `${4 + index * 0.5}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, hsl(32 100% 64% / ${0.2 + index * 0.05}) 0%, transparent 70%)`,
            opacity: 0.3 + index * 0.1,
          }}
        />
      ))}

      {/* Main cursor - outer ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-2 transition-all duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          transform: 'translate(-50%, -50%)',
          borderColor: isHovering ? 'hsl(32 100% 64%)' : 'hsl(32 100% 64% / 0.6)',
          boxShadow: isHovering 
            ? '0 0 20px hsl(32 100% 64% / 0.5), 0 0 40px hsl(32 100% 64% / 0.3), inset 0 0 10px hsl(32 100% 64% / 0.2)' 
            : '0 0 10px hsl(32 100% 64% / 0.3)',
          background: isHovering 
            ? 'radial-gradient(circle, hsl(32 100% 64% / 0.1) 0%, transparent 70%)' 
            : 'transparent',
        }}
      />

      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-100 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? '8px' : '4px',
          height: isHovering ? '8px' : '4px',
          transform: 'translate(-50%, -50%)',
          background: 'hsl(32 100% 64%)',
          boxShadow: '0 0 8px hsl(32 100% 64% / 0.8)',
        }}
      />
    </>
  );
};
