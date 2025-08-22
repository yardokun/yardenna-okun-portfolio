import { Link } from "react-router-dom";
import "./header.styles.css";

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
