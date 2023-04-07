import "./Home.scss"

import Hero from "./Components/Hero/Hero"
import Works from "./Components/Works/Works"
import Services from "./Components/Services/Services"
import ContactUs from "../../Components/ContactUs/ContactUs"

const Home = () => {
  return (
   <section className="home">
    <Hero/>
    <Works/>
      <div className="gap"></div>
    <Services/>
      <div className="gap"></div>
      <ContactUs/>
      <div className="gap"></div>

   </section>
  )
}

export default Home