import React from "react"
// main = HomeContainer
// article = Home
// header = HomeTitle
// h1 = name
// h2 = Description
// p = intro
export default function Home() {
  return (
  <>
  <main >
      <div >
        <header >
          <h1 className="text-red-500">William Cook Fernandez</h1>
          <h2 >An architect of the web</h2>
        </header>

        <br></br>

        <section>
          <p >
            I am a web developer with a passion to build beautiful and
            functional applications for myself and others to enjoy. Primarily
            working with frontend development with some experience in the
            backend as well.
          </p>
         
        </section>
      </div>
    </main>
  
  </>
  )
}
