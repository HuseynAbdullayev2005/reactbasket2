import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Helmet } from "react-helmet";
import Mainlayout from "./components/layout/mainlayout";
import Home from "./components/pages/home";
import Basket from "./components/pages/basket";
import Whislist from "./components/pages/whislist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="whislist" element={<Whislist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
