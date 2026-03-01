import React from 'react';
import '../SharedPages.css';

export default function Experiences() {
    return (
        <div className="page-container">
            <h1 className="page-title">Experiences</h1>
            <p className="page-subtitle">My professional journey throughout the years.</p>
            <div className="timeline">
                <div className="timeline-card">
                    <h2>Software Developer at Paycom</h2>
                    <h5 style={{ color: '#64748b' }}>2020 - Present</h5>
                    <p>Building high-performance components, optimizing backend flow, and ensuring reliability.</p>
                </div>
                <div className="timeline-card">
                    <h2>Previous Role</h2>
                    <h5 style={{ color: '#64748b' }}>2018 - 2020</h5>
                    <p>A highly collaborative software engineering team focusing on agile sprint execution and product feature growth.</p>
                </div>
            </div>
        </div>
    );
}
