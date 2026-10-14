"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Replace src values with your Cloudinary image links
const photos = [
  { id: 1, src: "/images/avatar.jpg", alt: "Evergreen at work", accent: "#c8b4e8" },
  { id: 2, src: "/images/avatar.jpg", alt: "Community session", accent: "#a8d0b8" },
  { id: 3, src: "/images/avatar.jpg", alt: "Speaking", accent: "#f0b8a0" },
  { id: 4, src: "/images/avatar.jpg", alt: "Designing", accent: "#a8c0e8" },
  { id: 5, src: "/images/avatar.jpg", alt: "At an event", accent: "#e8b8d0" },
];

type Photo = typeof photos[0];

function Fruit({
  photo,
  cx,
  cy,
  r,
  onPluck,
}: {
  photo: Photo;
  cx: number;
  cy: number;
  r: number;
  onPluck: (photo: Photo, cx: number, cy: number) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [plucked, setPlucked] = useState(false);

  const handleClick = () => {
    if (plucked) return;
    setPlucked(true);
    onPluck(photo, cx, cy);
  };

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: plucked ? "default" : "pointer" }}
    >
      {/* Glow ring */}
      {!plucked && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={r + 4}
          fill="none"
          stroke={photo.accent}
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.6 : 0.2 }}
        />
      )}

      {/* Fruit circle — image clipped */}
      {!plucked ? (
        <>
          <defs>
            <clipPath id={`clip-${photo.id}`}>
              <circle cx={cx} cy={cy} r={r} />
            </clipPath>
          </defs>
          <motion.circle
            cx={cx}
            cy={cy}
            r={r}
            fill={photo.accent}
            opacity={0.3}
            animate={{
              r: hovered ? r + 2 : r,
              opacity: hovered ? 0.5 : 0.3,
            }}
            transition={{ duration: 0.2 }}
          />
          <image
            href={photo.src}
            x={cx - r}
            y={cy - r}
            width={r * 2}
            height={r * 2}
            clipPath={`url(#clip-${photo.id})`}
            style={{
              filter: hovered ? "none" : "blur(2px)",
              transition: "filter 0.3s ease",
            }}
          />
          {/* Hint text on hover */}
          {hovered && (
            <text
              x={cx}
              y={cy + r + 14}
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-muted)"
              fontFamily="DM Sans, sans-serif"
            >
              tap to pluck
            </text>
          )}
        </>
      ) : (
        /* Empty circle after plucking */
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={photo.accent}
          strokeWidth="0.5"
          strokeDasharray="4 4"
          opacity={0.3}
        />
      )}
    </g>
  );
}

export default function PlantGallery() {
  const [groundFruits, setGroundFruits] = useState<Photo[]>([]);
  const [fallingFruit, setFallingFruit] = useState<{
    photo: Photo;
    startX: number;
    startY: number;
  } | null>(null);
  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);

  const handlePluck = (photo: Photo, cx: number, cy: number) => {
    setFallingFruit({ photo, startX: cx, startY: cy });
    setTimeout(() => {
      setGroundFruits((prev) => [...prev, photo]);
    }, 650);
  };

  return (
    <div className="relative w-full flex justify-center">
      {/* Plant SVG */}
      <svg
      viewBox="0 0 500 450"
      className="w-full"
      style={{ maxWidth: "100%", marginTop: "-16px" }}
      >
        {/* Pot */}
        <ellipse cx="250" cy="400" rx="55" ry="12" fill="rgba(200,180,232,0.15)" />
        <path
          d="M210 370 L215 400 L285 400 L290 370 Z"
          fill="rgba(200,180,232,0.2)"
          stroke="rgba(200,180,232,0.3)"
          strokeWidth="0.5"
        />
        <ellipse cx="250" cy="370" rx="40" ry="8" fill="rgba(200,180,232,0.25)" />

        {/* Main stem */}
        <path
          d="M250 370 C250 320 245 280 248 220"
          stroke="rgba(168,208,184,0.6)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Branch left 1 */}
        <path
          d="M248 280 C220 260 190 250 165 240"
          stroke="rgba(168,208,184,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Branch right 1 */}
        <path
          d="M249 300 C270 275 295 265 320 255"
          stroke="rgba(168,208,184,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Branch left 2 */}
        <path
          d="M248 240 C225 215 200 200 175 185"
          stroke="rgba(168,208,184,0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Branch right 2 */}
        <path
          d="M248 250 C272 228 298 215 325 205"
          stroke="rgba(168,208,184,0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top branch */}
        <path
          d="M248 220 C248 195 250 170 250 145"
          stroke="rgba(168,208,184,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Leaves */}
        {[
          { d: "M248 280 C230 265 215 255 205 248 C215 248 228 252 238 260 Z", opacity: 0.4 },
          { d: "M249 300 C262 282 278 272 288 266 C280 272 268 278 258 288 Z", opacity: 0.35 },
          { d: "M248 240 C232 222 218 210 208 202 C218 204 230 212 242 224 Z", opacity: 0.3 },
          { d: "M248 250 C265 234 280 222 292 216 C283 222 270 230 258 242 Z", opacity: 0.3 },
          { d: "M248 220 C238 205 225 195 215 188 C224 190 235 198 244 210 Z", opacity: 0.25 },
          { d: "M248 220 C260 205 272 195 282 188 C274 192 263 200 252 212 Z", opacity: 0.25 },
        ].map((leaf, i) => (
          <path
            key={i}
            d={leaf.d}
            fill="rgba(168,208,184,0.5)"
            opacity={leaf.opacity}
          />
        ))}

        {/* Fruits */}
        <Fruit photo={photos[0]} cx={160} cy={235} r={22} onPluck={handlePluck} />
        <Fruit photo={photos[1]} cx={325} cy={250} r={20} onPluck={handlePluck} />
        <Fruit photo={photos[2]} cx={172} cy={180} r={19} onPluck={handlePluck} />
        <Fruit photo={photos[3]} cx={328} cy={200} r={21} onPluck={handlePluck} />
        <Fruit photo={photos[4]} cx={250} cy={138} r={20} onPluck={handlePluck} />

        {/* Fruits on ground — scattered under plant */}
{groundFruits.length > 0 && (
  <div
    className="relative w-full"
    style={{ height: "60px", marginTop: "-20px" }}
  >
    {groundFruits.map((photo, i) => {
      const rotations = [-25, 15, -10, 20, -8, 18, -30, 12];
      const leftPositions = [28, 38, 22, 45, 32, 42, 25, 50];
      const rotation = rotations[i % rotations.length];
      const left = leftPositions[i % leftPositions.length];

      return (
        <motion.div
          key={i}
          initial={{ y: -120, opacity: 0, rotate: rotation * 2 }}
          animate={{ y: 0, opacity: 1, rotate: rotation }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            mass: 1.4,
            delay: i * 0.05,
          }}
          onClick={() => setModalPhoto(photo)}
          className="absolute w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            left: `${left}%`,
            bottom: "4px",
            border: `1.5px solid ${photo.accent}`,
            boxShadow: `0 2px 8px ${photo.accent}44`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      );
    })}
  </div>
)}

{/* Fallen fruits inside SVG at base of plant */}
{groundFruits.map((photo, i) => {
  const rotations = [-25, 15, -10, 20, -8, 18, -30, 12];
  const xPositions = [185, 220, 260, 300, 175, 240, 290, 210];
  const rotation = rotations[i % rotations.length];
  const x = xPositions[i % xPositions.length];
  const r = 16;

  return (
    <g
      key={i}
      transform={`rotate(${rotation}, ${x}, 415)`}
      onClick={() => setModalPhoto(photo)}
      style={{ cursor: "pointer" }}
    >
      <defs>
        <clipPath id={`ground-clip-${photo.id}-${i}`}>
          <circle cx={x} cy={415} r={r} />
        </clipPath>
      </defs>
      <circle
        cx={x}
        cy={415}
        r={r}
        fill="none"
        stroke={photo.accent}
        strokeWidth="1"
        opacity={0.6}
      />
      <image
        href={photo.src}
        x={x - r}
        y={415 - r}
        width={r * 2}
        height={r * 2}
        clipPath={`url(#ground-clip-${photo.id}-${i})`}
      />
    </g>
  );
})}
      </svg>


      {/* Falling fruit animation */}
      <AnimatePresence>
        {fallingFruit && (
          <motion.div
            className="fixed pointer-events-none z-50 rounded-full overflow-hidden"
            style={{
              width: 60,
              height: 60,
              left: "50%",
              top: "40%",
              marginLeft: -30,
              marginTop: -30,
            }}
            initial={{ y: -80, opacity: 1, scale: 1 }}
            animate={{ y: 300, opacity: 1, scale: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            onAnimationComplete={() => {
              setModalPhoto(fallingFruit.photo);
              setFallingFruit(null);
            }}
          >
            <img
              src={fallingFruit.photo.src}
              alt={fallingFruit.photo.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modalPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setModalPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative rounded-3xl overflow-hidden"
              style={{ maxWidth: 480, width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalPhoto.src}
                alt={modalPhoto.alt}
                className="w-full h-auto"
                style={{ maxHeight: "70vh", objectFit: "cover" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              >
                <p className="text-white text-sm font-light">
                  {modalPhoto.alt}
                </p>
              </div>
              <button
                onClick={() => setModalPhoto(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                }}
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 