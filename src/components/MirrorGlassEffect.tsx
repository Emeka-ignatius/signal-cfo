'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MirrorGlassEffectProps {
  src: string;
  rows?: number;
  cols?: number;
  className?: string;
}

export default function MirrorGlassEffect({ 
  src, 
  rows = 6, 
  cols = 10,
  className = "" 
}: MirrorGlassEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const tiles = Array.from({ length: rows * cols }, (_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    return { row, col, id: i };
  });

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    
    // 3D Parallax Tilt on the whole scene
    const rotateX = ((mouseY / height) - 0.5) * -10; // -5 to 5 degrees
    const rotateY = ((mouseX / width) - 0.5) * 10;
    
    gsap.to('.glass-scene', {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 1
    });

    const tileEls = containerRef.current.querySelectorAll('.glass-tile');
    
    tileEls.forEach((tile, i) => {
      const tileCol = i % cols;
      const tileRow = Math.floor(i / cols);
      
      const tileCenterX = (tileCol + 0.5) * (width / cols);
      const tileCenterY = (tileRow + 0.5) * (height / rows);
      
      const distX = mouseX - tileCenterX;
      const distY = mouseY - tileCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      const radius = 400;
      
      if (distance < radius) {
        const intensity = 1 - (distance / radius);
        const randX = parseFloat(tile.getAttribute('data-randx') || '1');
        const randY = parseFloat(tile.getAttribute('data-randy') || '1');
        
        gsap.to(tile, {
          x: (-distX * 0.15 * randX) * intensity,
          y: (-distY * 0.15 * randY) * intensity,
          scale: 1 + (0.08 * intensity),
          opacity: 1,
          filter: `brightness(${1 + (0.3 * intensity)}) grayscale(${Math.max(0, 0.8 - intensity * 2)})`,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        gsap.to(tile, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 0.8,
          filter: 'brightness(1) grayscale(0.8)',
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to('.glass-scene', {
      rotateX: 0,
      rotateY: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.to('.glass-tile', {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.8,
      filter: 'brightness(1) grayscale(0.8)',
      duration: 1.2,
      ease: 'power3.out',
      stagger: {
        amount: 0.2,
        from: 'center'
      },
      overwrite: 'auto'
    });
  });

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div className="glass-scene relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {/* Base blurred background so gaps have context */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-xs scale-110 grayscale" 
          style={{ backgroundImage: `url("${src}")` }}
        />
        
        {/* Sliced tiles */}
        {tiles.map((tile) => {
          const top = (tile.row / rows) * 100;
          const bottom = 100 - ((tile.row + 1) / rows) * 100;
          const left = (tile.col / cols) * 100;
          const right = 100 - ((tile.col + 1) / cols) * 100;
          
          const randX = Math.sin(tile.id * 8371.1923) * 2;
          const randY = Math.cos(tile.id * 9123.4124) * 2;
          
          return (
            <div
              key={tile.id}
              className="glass-tile absolute inset-0 bg-cover bg-center opacity-80"
              data-randx={randX}
              data-randy={randY}
              style={{
                backgroundImage: `url("${src}")`,
                clipPath: `inset(${top}% ${right}% ${bottom}% ${left}%)`,
                willChange: 'transform, filter',
                filter: 'brightness(1) grayscale(0.8)'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
