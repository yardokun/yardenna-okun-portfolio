import "./contact.styles.css";
import Heading3 from "../../components/headings/heading3/heading3.jsx";
import Heading2 from "../../components/headings/heading2/heading2.jsx";

export default function Contact() {
  return (
    <div>
      <Heading3 heading3="Wanna say hi?" />
      <Heading2 heading2="Get in Touch" />
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
}
