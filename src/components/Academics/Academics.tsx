import React from 'react';
import '../SharedPages.css';

export default function Academics() {
    return (
        <div className="page-container">
            <h1 className="page-title">Academics & Achievements</h1>
            <p className="page-subtitle">Education history and prominent awards won.</p>
            <div className="timeline">
                <div className="timeline-card">
                    <h2>Master's Degree</h2>
                    <h5 style={{ color: '#64748b' }}>University Name - 2018</h5>
                    <p>Focused on advanced algorithms and modern web architectures.</p>
                </div>
                <div className="timeline-card">
                    <h2>Bachelor's Degree</h2>
                    <h5 style={{ color: '#64748b' }}>University Name - 2016</h5>
                    <p>Computer Science foundation.</p>
                </div>
                <div className="timeline-card">
                    <h2>Top Performer Award</h2>
                    <h5 style={{ color: '#64748b' }}>2022</h5>
                    <p>Awarded for delivering exceptional code quality and meeting tight project deadlines gracefully.</p>
                </div>
            </div>
        </div>
    );
}
