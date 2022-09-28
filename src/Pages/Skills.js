import React from "react";
import Styles from "../Styles/Skills.module.css";
import myJSSvg from "../Images/Svg/javascript-logo.svg";
import myHTMLSvg from "../Images/Svg/html-5-logo.svg";
import myCSSSvg from "../Images/Svg/css-3-logo.svg";
import myReactSvg from "../Images/Svg/react-logo.svg";
import myFirebaseSvg from "../Images/Svg/firebase-logo.svg";
import myPythonSvg from "../Images/Svg/python-logo.svg";
import myPostgreSQLSvg from "../Images/Svg/postgresql-logo.svg";
import myGitSvg from "../Images/Svg/git-logo.svg";

const Skills = () => {
  return (
    <>
      <h2 className={Styles.TSTitle}>Technical Skills</h2>
      <hr></hr>

      <section className={Styles.TechSkills}>
        <ul className={Styles.Technologies}>
          <li className={Styles.Technology}>
            <h3>Javascript</h3>
            <div className={Styles.InfoCard}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                target="_blank"
              >
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myJSSvg}></img>
                </div>
              </a>
            </div>

            <p className={Styles.CardContent}>
              {" "}
              As the first programming language I learned I have gained most of
              my expierence with coding using this. Creating and expirmenting
              with a array of projects/functionalities that can be further
              explored on my project page.{" "}
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3>HTML5</h3>
            <div className={Styles.InfoCard}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myHTMLSvg}></img>
                </div>
              </a>
            </div>
            <p className={Styles.CardContent}>
              {" "}
              This section will simply be some placeholder text to assess if the
              spacing is ideal. Next part is to test the functionality of added
              code that should hide content when it reaches the sixth line
              within the specified space provided.
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3>CSS3</h3>
            <div className={Styles.InfoCard}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myCSSSvg}></img>
                </div>
              </a>
            </div>
            <p className={Styles.CardContent}>
              {" "}
              This section will simply be some placeholder text to assess if the
              spacing is ideal. Next part is to test the functionality of added
              code that should hide content when it reaches the sixth line
              within the specified space provided.
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3> React</h3>
            <div className={Styles.InfoCard}>
              <a href="https://reactjs.org/" target="_blank">
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myReactSvg}></img>
                </div>
              </a>
            </div>

            <p className={Styles.CardContent}>
              {" "}
              I have gained a proficient level of knowledge using react through
              my time at
              <a
                href="https://codethedream.org/"
                target="blank"
                className={Styles.CTD}
              >
                {" "}
                Code The Dream
              </a>
              . During their spring react course where I created a todo list
              using react and airtable. Which allowed me to explore more of
              react in other projects.
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3>Firebase</h3>
            <div className={Styles.InfoCard}>
              <a href="https://firebase.google.com/docs/" target="_blank">
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myFirebaseSvg}></img>
                </div>
              </a>
            </div>
            <p className={Styles.CardContent}>
              {" "}
              My journey into exloring the uses of Firebase began in
              <a
                href="https://codethedream.org/"
                target="blank"
                className={Styles.CTD}
              >
                {" "}
                Code The Dream
              </a>
              . At the end their spring react course where I created a chat
              application using react and firebase. Inspiring me to use this
              tool more in future projects for a quick backend setup.
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3>Python3</h3>
            <div className={Styles.InfoCard}>
              <a href="https://www.python.org/about/" target="_blank">
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myPythonSvg}></img>
                </div>
              </a>
            </div>
            <p className={Styles.CardContent}>
              {" "}
              This section will simply be some placeholder text to assess if the
              spacing is ideal. Next part is to test the functionality of added
              code that should hide content when it reaches the sixth line
              within the specified space provided.
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3>PostgreSQL</h3>
            <div className={Styles.InfoCard}>
              <a href="https://www.postgresql.org/about/" target="_blank">
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myPostgreSQLSvg}></img>
                </div>
              </a>
            </div>
            <p className={Styles.CardContent}>
              {" "}
              This section will simply be some placeholder text to assess if the
              spacing is ideal. Next part is to test the functionality of added
              code that should hide content when it reaches the sixth line
              within the specified space provided.
            </p>
          </li>

          <li className={Styles.Technology}>
            <h3>Git</h3>
            <div className={Styles.InfoCard}>
              <a href="https://git-scm.com/about" target="_blank">
                <div
                  className={Styles.CardImage}
                  data-hover="Click me to learn more!"
                >
                  <img width="100" height="100" src={myGitSvg}></img>
                </div>
              </a>
            </div>
            <p className={Styles.CardContent}>
              {" "}
              This section will simply be some placeholder text to assess if the
              spacing is ideal. Next part is to test the functionality of added
              code that should hide content when it reaches the sixth line
              within the specified space provided.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
