import React, { useEffect, useRef } from 'react';
import './Home.css';
import ArrowDownIcon from '../../Icons/ArrowDownIcon';
import Button from '../Button/Button';

interface HomeProps {
    hasScrolled: boolean;
}

export default function Home({ hasScrolled }: HomeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new window.Image();
        img.src = '/Portfolio-ui/subject.png';
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, []);

    const handleScrollArrowClick = () => {
        // Just scroll past the initial ~5px boundary to trigger Frame-2 visibility
        window.scrollBy({ top: 100, behavior: 'smooth' });
    };

    return (
        <React.Fragment>
            {/* -------- FRAME 1: Static Hero overlay that visually hides content completely -------- */}
            <section className={`hero-section ${hasScrolled ? 'hero-section--hidden' : ''}`}>
                <div className="animation-wrapper">
                    <div className="rectangle-box">
                        <div className="rectangle-fill"></div>
                        <div className="animated-border"></div>
                    </div>
                    <canvas
                        ref={canvasRef}
                        className="portrait-image"
                        onContextMenu={(e) => e.preventDefault()}
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                    />
                </div>

                <div className="text-wrapper">
                    <h1 className="name-highlight">Manali Gandhi</h1>
                    <p className="role-text">Software Developer III at Paycom</p>
                    <div style={{ marginTop: '20px' }}>
                        <Button
                            aria-label="Scroll down"
                            onClick={handleScrollArrowClick}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                <button
                    className="scroll-arrow"
                    onClick={handleScrollArrowClick}
                    aria-label="Scroll down"
                >
                    <ArrowDownIcon />
                </button>
            </section>

            {/* -------- FRAME 2: Continuous Flow PDF-style content page -------- */}
            <div className={`continuous-content ${hasScrolled ? 'visible' : ''}`}>
                {/* 1. Normal Intro Section */}
                <div className="content-block">
                    <h3 className="content-heading">Since you are here, you must want to know more about me!</h3>
                    <h5 className="content-subheading">Did you checkout the bot yet? It can answer all your questions!</h5>
                    <Button>Try Mickey – My Personal AI Bot </Button>
                </div>

                {/* 2. Text Paragraph Block Example */}
                <div className="content-block text-block">
                    <h3 className="content-heading">Technical Skills & Expertise</h3>
                    <p style={{ textAlign: 'left', lineHeight: '2' }}>
                        <b>Frontend:</b> React, TypeScript, Redux, Angular, React Native, Javascript (ES3, ES5, ES6), HTML, CSS, SCSS, jQuery<br />
                        <b>Backend:</b> Node, Express, Rest APIs, JWT Authentication, PHP (View-Helper Architecture)<br />
                        <b>Database:</b> MySQL, Firebase, MongoDB, DJango<br />
                        <b>Version Controls & Tools:</b> Git, Gitlab, Github, Bitbucket, Jira, Confluence<br />
                        <b>Testing & QA:</b> Jest, BrowserStack, TestFlight, Postman<br />
                        <b>Accessibility:</b> JAWS, VoiceOver, ARIA standards
                    </p>
                </div>

                {/* 3. Projects Example */}
                <div className="content-block">
                    <h3 className="content-heading">Projects & Experience</h3>
                    <h5 className="content-subheading">Check out some of the cool things I have built over the years and my professional journey.</h5>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <div onClick={() => window.location.hash = '#/experiences'}>
                            <Button>See Experience</Button>
                        </div>
                        <div onClick={() => window.open('https://github.com/manali0902', '_blank')}>
                            <Button>My GitHub</Button>
                        </div>
                    </div>
                </div>

                {/* 4. Another varied block */}
                <div className="content-block text-block">
                    <h3 className="content-heading">About Me</h3>
                    <p>When I'm not writing code, you can find me traveling to mountain ranges around the world, taking thousands of pictures, and enjoying a strong cup of coffee. I believe every good UI should feel snappy, accessible, and intuitive.</p>
                </div>

                {/* 5. Contact Section */}
                <div className="content-block">
                    <h3 className="content-heading">Let's Connect!</h3>
                    <h5 className="content-subheading">I'd love to chat. Reach out anytime.</h5>
                    <div onClick={() => window.location.hash = '#/contact'}>
                        <Button>Contact Me</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
