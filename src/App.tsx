import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContestantsPage from "./pages/ContestantsPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contestants" element={<ContestantsPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
