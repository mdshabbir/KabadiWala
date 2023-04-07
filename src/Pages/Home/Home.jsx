import "./Home.scss"

import Hero from "./Components/Hero/Hero"
import Works from "./Components/Works/Works"
import Services from "./Components/Services/Services"

const Home = () => {
  return (
   <section className="home">
    <Hero/>
    <Works/>
      <div className="gap"></div>
    <Services/>
      <div className="gap"></div>
   </section>
  )
}

export default Home