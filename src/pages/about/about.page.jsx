import Heading3 from "../../components/headings/heading3/heading3.jsx";
import pfp from "../../assets/graphics/pfp.jpg";
import img2 from "../../assets/graphics/img2.jpg";
import img3 from "../../assets/graphics/img3.jpg";
import SwirlIcon from "../../components/swirl-icon/swirl-icon.jsx";

export default function About() {
  return (
    <div>
      <SwirlIcon></SwirlIcon>
      <Heading3 heading3="About Me" />
      <div className="hero__media">
        <img
          className="hero__image1"
          src={pfp}
          alt="Portrait"
          width="160"
          height="160"
        />
        <img
          className="hero__image2"
          src={img2}
          alt="Portrait"
          width="160"
          height="160"
        />
        <img
          className="hero__image3"
          src={img3}
          alt="Portrait"
          width="160"
          height="160"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}
