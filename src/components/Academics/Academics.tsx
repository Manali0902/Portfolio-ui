import React from 'react';
import '../SharedPages.css';

export default function Academics() {
    return (
        <div className="page-container">
            <h1 className="page-title">Academics & Achievements</h1>
            <p className="page-subtitle">Education history and prominent awards won.</p>
            <div className="timeline">
                <div className="timeline-card">
                    <h2>Master of Science, Computer Science</h2>
                    <h5 style={{ color: '#64748b' }}>The University of Texas at Arlington, Arlington, TX | May 2024</h5>
                    <p>Focused on advanced algorithms, software engineering, and modern web architectures.</p>
                </div>
                <div className="timeline-card">
                    <h2>Bachelor of Technology, Computer Science</h2>
                    <h5 style={{ color: '#64748b' }}>Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, MP | July 2016</h5>
                    <p>Built a strong foundation in computer science principles, databases, algorithms, and web technologies.</p>
                </div>
                <div className="timeline-card">
                    <h2>Head of Public Relations (PR) Department</h2>
                    <h5 style={{ color: '#64748b' }}>Prayatna- Aspiring Dreams | May 2020 - December 2021</h5>
                    <p>Managed a team of 12 members in a non-profit organization.</p>
                </div>
            </div>
        </div>
    );
}
