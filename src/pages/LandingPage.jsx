import "./LandingPage.css";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="landing-page">
        
        <section className="hero">
            <div className="hero-overlay"><Navbar />
            </div>
            <div className="hero-content">
                <h1>Student Appointment Scheduling System</h1>
                <p>Effortlessly manage your appointments with faculty members.</p>
            </div>

            <button className="get-started-button">Get Started</button>
        </section>

    </div>
  );
}

export default LandingPage;