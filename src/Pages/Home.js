import React from 'react'
import Styles from '../Styles/Home.module.css' 

// import Skills from './Skills'


const Home = () => {
  

  return (
  
  <main className={Styles.HomeContainer}>
    <article className={Styles.Home}>
  <header className={Styles.HomeTitle}>
    <h1 className={Styles.Name}>William Cook Fernandez</h1>
    <h2 className={Styles.Description}>An architect of the web</h2>
  </header>

<br></br>

  <section>
    <p className={Styles.Intro}>I am a web developer with a passion to build beautiful and functional applications for myself and others to enjoy.
      Primarily working with frontend development with some experience in the backend as well.
</p>
    {/* <p>Over the course of my jounrey into software development, I have attained and applied a wealth of knowledge to create thoughtful applications. </p> */}
  </section>


  </article>

  </main>

 
  )
  }

export default Home;