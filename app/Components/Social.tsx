import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { SiReplit } from "react-icons/si";

export default function Social() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <a href="https://github.com/LongJourney47">
              <FiGithub className="text-[1.5em] mb-4"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-cook-fernandez-472121195/">
              <FiLinkedin className="text-[1.5em] mb-4"/>
            </a>
          </li>
          <li>
            <a href="https://replit.com/@LongJourney47">
              <SiReplit className="text-[1.5em] mb-4"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/your-work">
              <ImCodepen className="text-[1.5em]"/>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
