import React from 'react'
import Styles from '../Styles/Skills.module.css'
import myJSSvg from '../Images/javascript-logo.svg'
import myHTMLSvg from '../Images/html-5-logo.svg'
import myCSSSvg from '../Images/css-3-logo.svg'
import myReactSvg from '../Images/react-logo.svg'
import myFirebaseSvg from '../Images/firebase-logo.svg'
import myPythonSvg from '../Images/python-logo.svg'
import myPostgreSQLSvg from '../Images/postgresql-logo.svg'
import myGitSvg from '../Images/git-logo.svg'


const Skills = () => {
  

  return <>
  <h2 className={Styles.TSTitle}>Technical Skills</h2>
<hr></hr>

<section className={Styles.TechSkills}>
  <ul className={Styles.Technologies}>
    <li>
    <h3>Javascript</h3>
      <div className={Styles.InfoCard}>

      <a href='https://developer.mozilla.org/en-US/docs/Web/javascript' target="_blank">
      <div className={Styles.CardImage}>
      
          <img width="100" height="100" src={myJSSvg}></img>
         
        </div>
        </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
    <h3>HTML</h3>
      <div className={Styles.InfoCard}>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank">
        <div className={Styles.CardImage}>
        <img width="100" height="100" src={myHTMLSvg}></img>
        </div>
        </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
    <h3>CSS</h3>
      <div className={Styles.InfoCard}>

      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank">

        <div className={Styles.CardImage}>
        <img width="100" height="100" src={myCSSSvg}></img>
        </div>
      </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
   <h3> React</h3>
      <div className={Styles.InfoCard}>
        <a href='https://reactjs.org/' target="_blank">

        <div className={Styles.CardImage}>
        <img width="100" height="100" src={myReactSvg}></img>
        </div>
        </a>

      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
    <h3>Firebase</h3>
      <div className={Styles.InfoCard}>
      <a href='https://firebase.google.com/docs/' target="_blank">
        <div className={Styles.CardImage}>
         
        <img width="100" height="100" src={myFirebaseSvg}></img>
        </div>
      </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
    <h3>Python</h3>
      <div className={Styles.InfoCard}>
        <a href='https://www.python.org/about/' target="_blank">
        <div className={Styles.CardImage}>
        <img width="100" height="100" src={myPythonSvg}></img>
        </div>
         </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
    <h3>PostgreSQL</h3>
      <div className={Styles.InfoCard}>
        <a href='https://www.postgresql.org/about/' target="_blank">
        <div className={Styles.CardImage}>
        <img width="100" height="100" src={myPostgreSQLSvg}></img>
        </div>
         </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    <li>
   <h3>Git</h3>
      <div className={Styles.InfoCard}>
        <a href='https://git-scm.com/about' target="_blank">
        <div className={Styles.CardImage}>
        <img width="100" height="100" src={myGitSvg}></img>
        </div>
         </a>
      </div>
      <p className={Styles.CardContent}> This section will simply be some placeholder text to assess if the spacing is ideal.
        Next part is to test the functionality of added code that should hide content when it reaches the sixth line within the 
        specified space provided.</p>
    </li>

    
    {/* <li>Javascript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>React</li>
    <li>Firebase</li>
    <li>Python</li>
    <li>PostgreSQL</li>
    <li>Git</li> */}

  </ul>
</section>

  </>
}


export default Skills;