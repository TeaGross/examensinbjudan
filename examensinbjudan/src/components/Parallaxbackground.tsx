import { useEffect, useState, type JSX } from "react";

/* =========================
Types
========================= */

type Star = {
  id: number;
  x: number; // %
  y: number; // px base position
  size: number; // px
  opacity: number;
};

/* =========================
Helpers
========================= */

function generateStars(
  count: number,
  sizeRange: [number, number],
  opacityRange: [number, number],
  height: number
): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * height,
    size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
    opacity:
      Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
  }));
}

function wrapY(y: number, height: number) {
  return ((y % height) + height) % height;
}

/* =========================
Component
========================= */

export function ParallaxBackground(): JSX.Element {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(2000);

  const [distantStars, setDistantStars] = useState<Star[]>([]);
  const [mediumStars, setMediumStars] = useState<Star[]>([]);
  const [closeStars, setCloseStars] = useState<Star[]>([]);

  /* =========================
  Setup document height
  ========================= */

  useEffect(() => {
    const updateHeight = () => {
      const height = document.body.scrollHeight;
      setDocHeight(height);

      setDistantStars(generateStars(80, [1, 3], [0.3, 0.8], height));
      setMediumStars(generateStars(50, [2, 3], [0.4, 1], height));
      setCloseStars(generateStars(30, [3, 4], [0.8, 1], height));
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  /* =========================
  Scroll listener
  ========================= */

 useEffect(() => {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  /* =========================
  Render helper
  ========================= */

  const renderStars = (
    stars: Star[],
    speed: number,
    className: string,
    glow: string
  ) =>
    stars.map((star) => {
      const y = wrapY(star.y + scrollY * speed, docHeight);

      return (
        <div
          key={star.id}
          className={`absolute ${className} pixel-star animate-twinkle`}
          style={{
            left: `${star.x}%`,
            bottom: `${y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: glow,
          }}
        />
      );
    });

  /* =========================
  Render
  ========================= */

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* distant */}
      <div className="absolute inset-0">
        {renderStars(
          distantStars,
          0.1,
          "star-cyan",
          "0 0 2px rgba(0,255,255,0.5)"
        )}
      </div>

      {/* medium */}
      <div className="absolute inset-0">
        {renderStars(
          mediumStars,
          0.2,
          "star-purple",
          "0 0 3px rgba(192,132,252,0.6)"
        )}
      </div>

      {/* close */}
      <div className="absolute inset-0">
        {renderStars(
          closeStars,
          0.4,
          "star-white",
          "0 0 4px rgba(255,255,255,0.8)"
        )}
      </div>
    </div>
  );
}