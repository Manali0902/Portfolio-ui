import React from 'react';
import '../SharedPages.css';
import Button from '../Button/Button';

export default function Contact() {
    return (
        <div className="page-container" style={{ alignItems: 'center' }}>
            <h1 className="page-title">Contact Me</h1>
            <p className="page-subtitle">I'm always open to discussing new opportunities or exciting projects. Let's connect!</p>
            <div className="contact-card">
                <h2>Dallas, TX</h2>
                <h2 style={{ marginTop: '20px' }}>Let's connect on LinkedIn!</h2>
                <div style={{ marginTop: '20px' }}>
                    <div onClick={() => window.open('https://www.linkedin.com/in/manali-gandhi-b187401a6/', '_blank')}>
                        <Button>Visit LinkedIn</Button>
                    </div>
                </div>
                <h2 style={{ marginTop: '40px' }}>Or shoot me an email</h2>
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div onClick={() => window.location.href = 'mailto:gandhi.manali@outlook.com'}>
                        <Button>gandhi.manali@outlook.com</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
