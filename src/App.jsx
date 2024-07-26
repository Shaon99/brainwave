import ButtonGradient from "./assets/svg/ButtonGradient";
import {
  Header, Home, Benefits,
  Pricing, Feature,
  Roadmap, Footer
} from "./components";
import ScrollToTop from './ScrollToTop';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-to-use" element={<Benefits />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
