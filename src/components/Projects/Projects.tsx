import React from 'react';
import '../SharedPages.css';
import Button from '../Button/Button';

export default function Projects() {
    return (
        <div className="page-container">
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">Here are some of the cool things I've built recently.</p>
            <div className="projects-grid">
                {[1, 2, 3, 4].map(idx => (
                    <div key={idx} className="project-card">
                        <div className="project-image-placeholder">Project {idx} Image</div>
                        <h3>Project {idx}</h3>
                        <p>A cool description of the project detailing the tools used and the problems solved.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
