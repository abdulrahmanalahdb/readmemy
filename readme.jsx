import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Vaccination.ng</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#schedule">Schedule</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <section className="hero">
        <h2>COVID-19 Vaccination Got Easier With Vaccination.ng</h2>
        <p>Vaccination is only a few steps away...</p>
        <div className="cta-buttons">
          <button>Get Vaccine</button>
          <button>Help Centre</button>
        </div>
      </section>

      <section className="schedule">
        <h3>Schedule your Vaccination</h3>
        <form>
          <input type="text" placeholder="City (e.g. Lagos)" />
          <input type="date" />
          <button>Submit</button>
        </form>
      </section>

      <section className="vaccines">
        <h3>Vaccines Available</h3>
        <div className="vaccine-logos">
          <img src="img/Bg_FeedBack.png" alt="Moderna" />
          <img src="img/Bg_images.png" alt="Pfizer" />
          <img src="" alt="AstraZeneca" />
          <img src="/images/sinovac.png" alt="Sinovac" />
        </div>
      </section>

      <section className="why-vaccinate">
        <h3>Why get vaccinated today?</h3>
        <div className="benefits">
          <div>Protect your immune system</div>
          <div>Minimize the spread of COVID-19</div>
          <div>Protect yourself and others</div>
        </div>
      </section>

      <section className="registration">
        <h3>Get your vaccine registration today</h3>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Mobile Number" />
          <button>Submit</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 Vaccination.ng</p>
      </footer>
    </div>
  );
}

export default App;
