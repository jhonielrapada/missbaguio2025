// import { useMemo } from "react";
// import { contestants } from "@/lib/data/contestants";
// import ContestantCard from "./ContestantCard";

// export default function Contestants() {
//   // Randomize contestant order once per load
//   const shuffledContestants = useMemo(() => {
//     return [...contestants].sort(() => Math.random() - 0.5);
//   }, []);

//   return (
//     <section className="py-16 px-4 text-center bg-white">
//       <h2 className="text-3xl font-bold text-purple-800 mb-6">
//         Meet the Contestants
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {shuffledContestants.map((contestant, idx) => (
//           <ContestantCard key={idx} {...contestant} />
//         ))}
//       </div>
//     </section>
//   );
// }
