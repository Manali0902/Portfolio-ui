import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb, SiFirebase } from 'react-icons/si';

const AnimatedNumber = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
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
            className="glass-panel"
            style={{ textAlign: 'center', padding: '2rem', flex: 1, minWidth: '200px' }}
        >
            <h2 style={{ fontSize: '3rem', margin: 0, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {count}{suffix}
            </h2>
            <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</p>
        </motion.div>
    );
}

export default function AboutMe() {
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
        <section id="about" style={{ padding: '6rem 2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>About Me</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', textAlign: 'justify' }}>
                    My journey into technology began with a simple curiosity—understanding how the video games I loved as a child actually worked. That curiosity soon evolved into a passion, leading me to explore how systems flow, how characters move, and how animations come to life. I worked on several game development projects early on, building a strong foundation through internships and hands-on experience.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', textAlign: 'justify' }}>
                    After completing my graduation in 2021, I started my professional career as an Associate UI Engineer at Impetus Technologies, where I honed my skills in building intuitive and scalable user interfaces. Driven to deepen my expertise, I moved to the United States to pursue my Master’s in Computer Science, which I completed in 2024. Currently, I work as a Software Developer III at Paycom, where I continue to build impactful, high-performance applications while constantly pushing my technical boundaries.
                </p>
            </div>

            <div style={{ marginTop: '5rem', width: '100%', maxWidth: '1000px' }}>
                <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>My Tech Stack</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    {techStack.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, translateY: -5 }}
                            className="glass-panel"
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', padding: '1.5rem', minWidth: '100px' }}
                        >
                            <span style={{ fontSize: '3rem', color: '#c084fc' }}>{tech.icon}</span>
                            <span style={{ fontSize: '1rem', fontWeight: 500 }}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '1000px', marginTop: '6rem', borderTop: '1px solid var(--glass-border)', paddingTop: '4rem' }}>
                <AnimatedNumber value={3} label="Years Experience" suffix="+" />
                <AnimatedNumber value={15} label="Enterprise Projects" suffix="+" />
                <AnimatedNumber value={10} label="Data Records Opt." suffix="M+" />
            </div>
        </section>
    );
}
