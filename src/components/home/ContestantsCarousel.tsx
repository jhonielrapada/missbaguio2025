import { useState, useEffect, useRef } from "react";
import { contestants as originalContestants } from "@/lib/data/contestants";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function ContestantsCarousel3D() {
  const [contestants, setContestants] = useState(originalContestants);
  const total = contestants.length;
  const [rotation, setRotation] = useState(0);
  const angle = 360 / total;

  const [containerWidth, setContainerWidth] = useState(200);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setContainerWidth(160); // small screens
      } else if (width < 1024) {
        setContainerWidth(200); // tablets
      } else {
        setContainerWidth(250); // desktops
      }
    };

    updateWidth(); // initial set
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const translateZ = 400; // smaller radius, adjust to taste
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || startX.current === null) return;

    const deltaX = e.clientX - startX.current;

    if (Math.abs(deltaX) > 40) {
      const direction = deltaX > 0 ? -1 : 1;
      setRotation((prev) => prev + angle * direction);
      startX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    startX.current = null;
  };

  useEffect(() => {
    setContestants(shuffleArray(originalContestants));
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center overflow-visible relative px-4 py-10 sm:py-16 md:py-20">
      <div className="flex items-center justify-center mb-12 space-x-6">
        {/* Left Arrow before the heading */}
        <button
          onClick={() => setRotation((r) => r - angle)}
          aria-label="Rotate Left"
          className="p-2 sm:p-3 md:p-4 text-lg sm:text-xl md:text-2xl bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          ◀
        </button>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 text-center flex items-center gap-2">
          Meet the Contestants{" "}
          <span className="text-yellow-500 select-none">✨</span>
        </h2>

        {/* Right Arrow after the star */}
        <button
          onClick={() => setRotation((r) => r + angle)}
          aria-label="Rotate Right"
          className="p-2 sm:p-3 md:p-4 text-lg sm:text-xl md:text-2xl bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          ▶
        </button>
      </div>

      <div
        className="relative h-[500px] mx-auto cursor-grab active:cursor-grabbing"
        style={{
          width: containerWidth,
          perspective: "1200px",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          className="relative h-full mt-20"
          style={{
            width: containerWidth,
            transformStyle: "preserve-3d",
            transition: "transform 0.7s ease",
          }}
        >
          {contestants.map((contestant, index) => {
            const cardAngle = angle * index + rotation;

            return (
              <div
                key={index}
                className="absolute w-40 h-60 sm:w-48 sm:h-64 md:w-56 md:h-72 bg-white shadow-xl rounded-xl p-4 flex flex-col items-center justify-center border border-gray-200"
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${translateZ}px) rotateY(${-cardAngle}deg)`,
                  transition: "transform 0.7s ease",
                }}
              >
                <img
                  src={contestant.image}
                  alt={contestant.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-purple-700">
                  {contestant.name}
                </h3>
                <p className="text-sm text-gray-600">{contestant.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
