import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Publications from "./pages/publications/Publications";
import Profile from "./pages/profile/Profile";
import Footer from "./components/footer/Footer.jsx";
import Pictures from "./pages/pictures/Pictures";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="publications" element={<Publications />} />
        <Route path="pictures" element={<Pictures />} />
        <Route path="profile" element={<Profile />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
