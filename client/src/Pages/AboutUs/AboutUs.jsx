import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      {/* Header */}
      <header className="aboutUs-header">
        <h1>About Us</h1>
        <p className="welcome-text">
          Welcome to Kabadiwala Online Sell Scrap Online
        </p>
      </header>

      {/* About Section */}
      <section className="about-section">
        <p>
          Kabadiwala Online, co-founded by <strong>Shaheed</strong> and{" "}
          <strong>Md Shabbir</strong>, presents a dynamic duo leading the charge
          in the online recycling and waste management sector.
        </p>
        <p>
          Secured Platform for Your Convenient Sell Scrap Online Service from
          the Comfort of Your Home! At Kabadiwala Online, we understand that
          disposing of scrap materials can be a challenging task. That’s why we
          have created a seamless and hassle-free solution to help you get rid
          of your unwanted items without any effort. We are your trusted online
          kabadiwala, dedicated to providing a reliable and efficient scrap
          pickup service right from your doorstep.
        </p>
      </section>

      {/* Benefits List */}
      <section className="benefits-section">
        <h2>Here's why we are the preferred choice for scrap pickup:</h2>
        <ul>
          <li>
            <strong>Easy Online Booking:</strong> With just a few clicks, you
            can schedule a pickup through our user-friendly website. Our
            platform ensures a seamless experience, allowing you to choose the
            most convenient date and time for the pickup.
          </li>
          <li>
            <strong>Wide Range of Accepted Items:</strong> We accept a variety
            of scrap materials, including paper, cardboard, plastic, metal,
            glass, and electronic waste.
          </li>
          <li>
            <strong>Professional and Courteous Team:</strong> Our team of
            experienced professionals is trained to handle scrap materials
            efficiently and with utmost professionalism.
          </li>
          <li>
            <strong>Environmentally Responsible Disposal:</strong> We are
            committed to sustainable waste management practices. Once collected,
            we sort and process the scrap materials using eco-friendly methods.
          </li>
          <li>
            <strong>Fair Pricing:</strong> We believe in providing fair and
            transparent pricing for our services.
          </li>
        </ul>
        <p className="join-us">
          Join us in our commitment to a cleaner and greener future. By availing
          our scrap pickup service, you contribute to the reduction of landfill
          waste and the conservation of valuable resources.
        </p>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="vision-mission-goal">
        <div className="card">
          <h3>Vision</h3>
          <p>
            To be the premier online platform for doorstep kabadiwala scrap
            pickup, leading the recycling industry with a seamless, eco-friendly
            solution.
          </p>
        </div>
        <div className="card">
          <h3>Mission</h3>
          <p>
            Our mission is to make scrap disposal a simple and convenient
            process for everyone. We contribute to a cleaner and healthier
            environment.
          </p>
        </div>
        <div className="card">
          <h3>Goal</h3>
          <p>
            Our goal is to establish Kabadiwala Online as the go-to platform for
            kabadiwala scrap pickup, achieving widespread adoption.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="aboutUs-footer">
        <p>
          Contact Kabadiwala Online Sell Scrap Online today and experience the
          convenience of scrap disposal from the comfort of your home. Together,
          we can make a difference!
        </p>
        <p>
          Book Pickup Request -{" "}
          <a href="https://www.kabadiwalaonline.com" className="footer-link">
            www.kabadiwalaonline.com
          </a>
        </p>

        <div className="social-media">
          <p>Follow us on social media:</p>
          <a href="#">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
        </div>

        <div className="footer-contact">
          <p>© 2024 Kabadiwala Online | All rights reserved.</p>
          <p>198/30 Ramesh Market East of Kailash New Delhi 110065</p>
          <p>Email: info@kabadiwalaonline.com | Phone: 7065424442</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
