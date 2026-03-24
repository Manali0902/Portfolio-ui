import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import ArrowDownIcon from '../../Icons/ArrowDownIcon';
import Button from '../Button/Button';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb, SiFirebase } from 'react-icons/si';

interface HomeProps {
    hasScrolled: boolean;
}

const AnimatedNumber = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        
        // Duration of animation in ms
        const duration = 2000;
        // Times it fires
        const frames = 60;
        const stepTime = duration / frames;
        const increment = value / frames;

        let currentCount = 0;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= value) {
                currentCount = value;
                clearInterval(timer);
            }
            setCount(Math.floor(currentCount));
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <motion.div 
            ref={ref}
            whileHover={{ translateY: -5 }} 
            style={{ textAlign: 'center', padding: '2rem', flex: 1, minWidth: '200px' }}
        >
            <h2 style={{ fontSize: '3rem', margin: 0, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {count}{suffix}
            </h2>
            <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</p>
        </motion.div>
    );
}

export default function Home({ hasScrolled }: HomeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new window.Image();
        img.src = '/subject.png';
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, []);

    const handleScrollArrowClick = () => {
        const el = document.getElementById("experiences");
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const typingText1 = "Manali Gandhi,";
    const typingText2 = "Software Developer III at Paycom";

    const techStack = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiFirebase />, name: "Firebase" },
    ];

    return (
        <React.Fragment>
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

                <div className="text-wrapper text-wrapper-typing" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '350px' }}>
                    <h1 className="name-highlight" style={{ overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%', margin: 0, padding: '5px 0' }}>
                        {typingText1.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.05, delay: index * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                    <h3 className="role-text" style={{ overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%', margin: '10px 0 0 0', fontWeight: '500', color: 'var(--text-secondary)' }}>
                        {typingText2.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.05, delay: (typingText1.length * 0.05) + (index * 0.05) }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h3>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        style={{ marginTop: '30px' }}
                    >
                        <Button
                            aria-label="Scroll down"
                            onClick={handleScrollArrowClick}
                        >
                            Explore My Journey
                        </Button>
                    </motion.div>
                </div>

                <button
                    className="scroll-arrow"
                    onClick={handleScrollArrowClick}
                    aria-label="Scroll down"
                >
                    <ArrowDownIcon />
                </button>
            </section>

            <div className={`continuous-content ${hasScrolled ? 'visible' : ''}`}>
                <div className="content-block text-block" style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 className="content-heading">About Me</h3>
                    <p style={{ lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        When I'm not writing code or architecting UI components for enterprise applications at Paycom, you can find me traveling to mountain ranges around the world, taking thousands of pictures, and enjoying a strong cup of coffee. I believe every good UI should feel snappy, beautifully animated, accessible, and highly intuitive.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '900px', margin: '3rem auto 0 auto' }}>
                    <h3 className="content-heading" style={{ textAlign: 'center' }}>My Tech Stack</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
                        {techStack.map((tech, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ scale: 1.1, translateY: -5 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', padding: '1.5rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '15px', minWidth: '100px' }}
                            >
                                <span style={{ fontSize: '3rem', color: '#c084fc' }}>{tech.icon}</span>
                                <span style={{ fontSize: '1rem', fontWeight: 500 }}>{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="stats-grid" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5rem', marginBottom: '2rem', maxWidth: '1000px', margin: '5rem auto 2rem auto', borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
                    <AnimatedNumber value={3} label="Years Experience" suffix="+" />
                    <AnimatedNumber value={15} label="Enterprise Projects" suffix="+" />
                    <AnimatedNumber value={10} label="Data Records Opt." suffix="M+" />
                </div>
            </div>
        </React.Fragment>
    );
}
