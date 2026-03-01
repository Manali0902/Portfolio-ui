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
                    <p className="role-text">Software Developer at Paycom</p>
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
                    <h3 className="content-heading">Skills & Experience</h3>
                    <p>I have spent years building robust software at Paycom and exploring technologies. I specialize in building responsive, scalable, and beautifully animated frontend architectures in React and TypeScript while tackling complex backend implementations.</p>
                </div>

                {/* 3. Projects Example */}
                <div className="content-block">
                    <h3 className="content-heading">Projects</h3>
                    <h5 className="content-subheading">Check out some of the cool things I have built over the years.</h5>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <Button>See Projects</Button>
                        <Button>My GitHub</Button>
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
                    <Button>Contact Me</Button>
                </div>
            </div>
        </React.Fragment>
    );
}
