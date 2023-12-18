import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { SiReplit } from "react-icons/si";

export default function Social() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <a href="https://github.com/LongJourney47" target="_blank">
              <FiGithub className="text-[1.5em] mb-4"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-cook-fernandez-472121195/" target="_blank">
              <FiLinkedin className="text-[1.5em] mb-4"/>
            </a>
          </li>
          <li>
            <a href="https://replit.com/@LongJourney47" target="_blank">
              <SiReplit className="text-[1.5em] mb-4"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/your-work" target="_blank">
              <ImCodepen className="text-[1.5em]"/>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
