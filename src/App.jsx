import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Projects from "./pages/projects/projects.page";
import Contact from "./pages/contact/contact.page";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
