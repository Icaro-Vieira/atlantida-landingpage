import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Terms from "./pages/Terms";
import Team from "./pages/Team";
import Article1 from "./pages/articles/Article1"
import Article2 from "./pages/articles/Article2"
import Article3 from "./pages/articles/Article3"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/team" element={<Team />} />
        <Route path="/7-praticas-essenciais-para-um-mergulho-responsavel" element={<Article1 />} />
        <Route path="/o-impacto-devastador-da-negligencia-dos-oceanos" element={<Article2 />} />
        <Route path="/proteger-os-oceanos-a-missao-dos-mergulhadores" element={<Article3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
