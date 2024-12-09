import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Pages/Menu";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/menu" replace />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
