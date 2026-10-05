import {Link} from "react-router-dom";

import "./home.css";

const roles = [
    {
        title: "Student",
        color: "#4CAF50",
        items: [
            "Search faculty, offices, and services",
            "View available schedules",
            "Submit appointment requests",
            "Track status and history",
        ],
    },
    {
        title: "Staff / Faculty",
        color: "#2196F3",
        items:[
            "View incoming requests",
            "Approve, reject, or reschedule",
            "Set available time slots",
            "See upcoming and past appointments",
        ],
    },
    {
        title: "Admin",
        color: "#FF9800",
        items:[
            "Manage users and profiles",
            "Approve shedules",
            "Monitor all appointments",
            "View reporst and statistics"
        ],
    },
];

const steps = [
    {n: 1, title: "Sign Up / Log In", description: "Create an account or log in to access the system."},
    {n: 2, title: "Search & Request", description: "Search for faculty, offices, or services and submit appointment requests."},
    {n: 3, title: "Manage Appointments", description: "Track the status of your requests and manage your appointments."},
];

export default function Homepage() {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Student Appointment Scheduling System</h1>
                <p>Efficiently manage appointments for students, faculty, and staff.</p>
                <div className="hero-buttons">
                    <Link to="/login" className="hero-button">Log In</Link>
                    <Link to="/signup" className="hero-button">Sign Up</Link>
                </div>
            </header>
            
            <section className="roles-section">
                <h2>Roles & Features</h2>
                <div className="roles-container">
                    {roles.map((role, index) => (
                        <div key={index} className="role-card" style={{borderColor: role.color}}>
                            <h3 style={{color: role.color}}>{role.title}</h3> 
                            <ul>
                                {role.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>  
            </section>

            <section className="steps-section" id="steps">
                <h2>How It Works</h2>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.n}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="homepage-footer">
                <p>&copy; 2024 Student Appointment Scheduling System. All rights reserved.</p>
            </footer>
        </div>

    )
}
