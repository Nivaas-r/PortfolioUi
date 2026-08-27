import { useRef, useState } from 'react';
import heroGraphic from '../../assets/images/hero-graphic.png';
import './HeroGraphic.css';

const MAX_TILT_DEG = 16;

export default function HeroGraphic({ hidden }) {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseMove = (event) => {
    if (prefersReducedMotion) return;
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -MAX_TILT_DEG, y: px * MAX_TILT_DEG });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className={`hero-graphic ${hidden ? 'hero-graphic--hidden' : ''}`} aria-hidden="true">
      <div
        ref={stageRef}
        className="hero-graphic__stage"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={heroGraphic}
          alt=""
          className="hero-graphic__img"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        />
      </div>
    </div>
  );
}
