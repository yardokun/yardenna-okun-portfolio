import "./home.styles.css";
import Heading2 from "../../components/headings/heading2/heading2.jsx";
import pfp from "../../assets/graphics/pfp.jpg";
import About from "../about/about.page";
import Projects from "../projects/projects.page";
import Contact from "../contact/contact.page";

export default function Home() {
  return (
    <main className="home" id="main">
      <section className="hero" id="home" aria-labelledby="intro-title">
        <div className="hero__media">
          <img
            className="hero__avatar"
            src={pfp}
            alt="Portrait"
            width="160"
            height="160"
          />
        </div>

        <div className="hero__copy">
          <h1 id="intro-title" className="hero__title">
            <span>Hello,</span>
            <span>my name is</span>
          </h1>

          <Heading2 heading2="Yardenna Okun" />

          <p className="hero__lead">
            I’m a frontend developer with a passion for good and user-friendly
            design.
          </p>

          <a className="cta" href="#contact">
            Get in touch!
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" aria-labelledby="about-title">
        <About />
      </section>

      {/* PROJECTS */}
      <section id="projects" aria-labelledby="projects-title">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="contact-title">
        <Contact />
      </section>
    </main>
  );
}
