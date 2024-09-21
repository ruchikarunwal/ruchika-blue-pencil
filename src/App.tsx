import { Routes, Route } from "react-router-dom";
import Feature from "./pages/Feature";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="feature/:id" element={<Feature />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
}

export default App;
