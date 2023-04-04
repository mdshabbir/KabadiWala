import { Route, Routes } from "react-router-dom"

//Components
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

//Pages
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Sell from "./Pages/Sell/Sell"
import Rates from "./Pages/Rates/Rates"
import AboutUs from "./Pages/AboutUs/AboutUs"
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import Terms from "./Pages/Terms/Terms"
import PageNotFound from "./Pages/PageNotFound/PageNotFound"


function App() {

  return (
   <>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/sell" element={<Sell />} />
        <Route path="/rate-list" element={<Rates/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
   <Footer/>
   </>
  )
}

export default App
