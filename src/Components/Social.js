import Styles from "../Styles/Social.module.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { SiReplit } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Social() {
  return (
    <>
      <IconContext.Provider value={{ size: "1.75em" }}>
        <aside className={Styles.RightSidePanel}>
          <ul className={Styles.SocialContacts}>
            <li>
              <a href="https://github.com/LongJourney47">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/william-cook-fernandez-472121195/">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://replit.com/@LongJourney47">
                <SiReplit />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/your-work">
                <ImCodepen />
              </a>
            </li>
          </ul>
        </aside>
      </IconContext.Provider>
    </>
  );
}
