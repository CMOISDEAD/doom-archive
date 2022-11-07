// import { InlineMath, BlockMath } from "react-katex";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="py-5">
      <Outlet />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default App;
