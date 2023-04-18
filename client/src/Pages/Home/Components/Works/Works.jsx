import "./Works.scss"

//Images
import call from "../../../../Assets/call.jpg"
import arrive from "../../../../Assets/arrive.jpg"
import pay from "../../../../Assets/pay.jpg"
import arrows from "../../../../Assets/arrows.png"



const Works = () => {
  return (
    <section className="works">
      <h2 className="heading">How it works ?</h2>
      <div className="cards">
        <div className="card">
          <img src={call} alt="" />
          <div className="content">
            <div>
              <h4>Step 1 </h4>
              <h3>Book a pickup</h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe quae in odio! Tempora ipsum, repudiandae voluptate dolorem mollitia asperiores voluptates consequuntur fugit quo eum eos exercitationem soluta.</p>
          </div>
        </div>

        <img src={arrows} alt="" className="arrow"/>
        <div className="card">
          <img src={arrive} alt="" />
          <div className="content">
            <div>
              <h4>Step 2 </h4>
              <h3>Executive arrives</h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe quae in odio! Tempora ipsum, repudiandae voluptate dolorem mollitia asperiores voluptates consequuntur fugit quo eum eos exercitationem soluta.</p>
          </div>
        </div>
        <img src={arrows} alt="" className="arrow" />
        <div className="card">
          <img src={pay} alt="" />
          <div className="content">
            <div>
              <h4>Step 3</h4>
              <h3>Get paid</h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe quae in odio! Tempora ipsum, repudiandae voluptate dolorem mollitia asperiores voluptates consequuntur fugit quo eum eos exercitationem soluta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works