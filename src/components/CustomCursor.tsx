import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      
      const hoverable = target.closest('a, button, input, [role="button"], p, h1, h2, h3, h5, span');
      setIsHovering(!!hoverable);
      
      const btn = target.closest('button, .btn, a');
      setIsButton(!!btn);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isButton ? 'hovering-button' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
