import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";
import SwirlIcon from "../../components/swirl-icon/swirl-icon.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light"; // only "light" | "dark"
  });

  const firstFocusable = useRef(null);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Lock scroll + focus when menu opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFocusable.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <Link to="/" className="logo" aria-label="Home">
          Logo
        </Link>

        <button
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-drawer"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            id="hamburger__bar_1"
            className={`hamburger__bar ${open ? "hidden" : ""}`}
          />
          <span
            id="hamburger__bar_2"
            className={`hamburger__bar ${open ? "hidden" : ""}`}
          />
          <span
            id="hamburger__bar_3"
            className={`hamburger__bar ${open ? "hidden" : ""}`}
          />
          <span className={`close ${open ? "show" : ""}`} aria-hidden="true">
            ✕
          </span>
        </button>
      </div>

      {/* Overlay */}
      <button
        className={`drawer__backdrop ${open ? "show" : ""}`}
        aria-hidden={!open}
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        className={`drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer__content">
          <div className="theme-toggle">
            <button
              ref={firstFocusable}
              className="theme-toggle__btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              aria-pressed={theme === "dark"}
              title="Toggle theme"
            >
              <span className="half" />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Mobile">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="drawer__link"
            >
              <SwirlIcon className="swirl-icon" /> <span>About</span>
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="drawer__link"
            >
              <SwirlIcon className="swirl-icon" /> <span>Projects</span>
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="drawer__link"
            >
              <SwirlIcon className="swirl-icon" /> <span>Contact</span>
            </a>
          </nav>

          <a
            href="/resume.pdf"
            className="drawer__cta"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      </aside>
    </header>
  );
}
