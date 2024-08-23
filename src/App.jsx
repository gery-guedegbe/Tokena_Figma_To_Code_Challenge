import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import DashboardSection from "./sections/DashboardSection";
import NewsSection from "./sections/NewsSection";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<DashboardSection />} />
          <Route path="/news" element={<NewsSection />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
