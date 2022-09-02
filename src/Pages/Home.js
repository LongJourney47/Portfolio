import React from 'react'
import Styles from '../Styles/Home.module.css' 
import Email from 'Components/Email'
import Social from 'Components/Social'

const Home = () => {
  

  return (
  <>
    <main className={Styles.Home}>
  <header className={Styles.HomeTitle}>
    <h1 className={Styles.Name}>William Cook Fernandez</h1>
    <h2 className={Styles.Intro}>The Longest Journey Of A Frontend Web Developer</h2>
  </header>

<br></br>

  <section>
    <p>Over the course of my jounrey into software development, I have attained and applied a wealth of knowledge to create thoughtful applications. </p>
  </section>


 <Email/>
  <Social/>

  </main>
  </>
  )
  }

export default Home;