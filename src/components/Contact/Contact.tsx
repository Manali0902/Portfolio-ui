import React from 'react';
import '../SharedPages.css';
import Button from '../Button/Button';

export default function Contact() {
    return (
        <div className="page-container">
            <h1 className="page-title">Contact Me</h1>
            <p className="page-subtitle">I'm always open to discussing new opportunities or exciting projects.</p>
            <div className="contact-card">
                <h2>Let's connect on LinkedIn!</h2>
                <div style={{ marginTop: '20px' }}>
                    <Button>Visit LinkedIn</Button>
                </div>
                <h2 style={{ marginTop: '40px' }}>Or shoot me an email</h2>
                <div style={{ marginTop: '20px' }}>
                    <Button>manali.example@gmail.com</Button>
                </div>
            </div>
        </div>
    );
}
