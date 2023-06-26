import React from "react";
import Styles from "../Styles/Project.module.css";
import MyToDo from "../Images/Project-Images/Capture-todo-list.PNG";
import MyExpense from "../Images/Project-Images/Capture-expense-tracker.PNG";
import MyMovie from "../Images/Project-Images/Capture-movie-project.PNG";
import MyChat from "../Images/Project-Images/Capture-chat-app-signinpage.PNG";
// import './src/App.css'

const Projects = () => {
  return (
    <>
      <h2 className={Styles.PTitle}>Featured Projects</h2>
      <hr></hr>
      <section className={Styles.Projects}>
        <ul>
          <li className={Styles.ProjectLeftSide}>
            <h3>Chat Application</h3>
            <div className={Styles.ProjectContainer}>
              <span className={Styles.ProjectImage}>
                <img width="650" height="420" src={MyChat}></img>
              </span>

              <span className={Styles.DiscriptionContainer}>
                <p className={Styles.RideSideText}>
                  This is placeholder text to test spacing and how the text
                  itself is presented on the page.
                </p>

                <ul className={Styles.ProjectTechRightSide}>
                  <li>React</li>
                  <li>FireBase</li>
                  <li>Bootstrap</li>
                  <li>SCSS</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                </ul>
              </span>
            </div>
          </li>

          <li className={Styles.ProjectRightSide}>
            <h3>To-do List</h3>

            <div className={Styles.ProjectContainer}>
              <span className={Styles.DiscriptionContainer}>
                <p className={Styles.LeftSideText}>
                  This is placeholder text to test spacing and how the text
                  itself is presented on the page.
                </p>

                <ul className={Styles.ProjectTechLeftSide}>
                  <li>React</li>
                  <li>AirTable</li>
                  <li>CSS Modules</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                </ul>
              </span>

              <span className={Styles.ProjectImage}>
                <img width="650" height="420" src={MyToDo}></img>
              </span>
            </div>
          </li>

          <li className={Styles.ProjectLeftSide}>
            <h3>Expense Tracker</h3>
            <div className={Styles.ProjectContainer}>
              <span className={Styles.ProjectImage}>
                <img width="650" height="420" src={MyExpense}></img>
              </span>

              <span className={Styles.DiscriptionContainer}>
                <p className={Styles.RideSideText}>
                  This is placeholder text to test spacing and how the text
                  itself is presented on the page.
                </p>

                <ul className={Styles.ProjectTechRightSide}>
                  <li>React</li>
                  <li>CSS Modules</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                </ul>
              </span>
            </div>
          </li>

          <li className={Styles.ProjectRightSide}>
            <h3>Movie Assessment</h3>
            <div className={Styles.ProjectContainer}>
              <span className={Styles.DiscriptionContainer}>
                <p className={Styles.LeftSideText}>
                  This is placeholder text to test spacing and how the text
                  itself is presented on the page.
                </p>

                <ul className={Styles.ProjectTechLeftSide}>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>OMDb API</li>
                </ul>
              </span>

              <span className={Styles.ProjectImage}>
                <img width="650" height="420" src={MyMovie}></img>
              </span>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
