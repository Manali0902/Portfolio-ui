import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ShapeGrid from './react-bits/ShapeGrid';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new window.Image();
        // Fallback or use real subject image if present in public/
        img.src = '/subject.png';
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, []);



    const typingText1 = "Manali Gandhi";
    const typingText2 = "Software Developer III at Paycom";
    const typingText3 = "I turn ideas into intelligent software. From scalable web systems to AI-driven tools, I build technology that solves real problems and feels effortless to use. Curious by nature and driven by innovation, I’m always exploring the next frontier of engineering.";

    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.3 }}>
                <ShapeGrid
                    speed={0.5}
                    squareSize={40}
                    direction="diagonal"
                    borderColor="#271E37"
                    hoverFillColor="#222222"
                    shape="square"
                    hoverTrailAmount={0}
                />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', justifyContent: 'center', gap: '4rem', padding: '2rem', width: '100%', maxWidth: '1200px', zIndex: 1, position: 'relative' }}>

                {/* Text Block */}
                <div style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h1 style={{ fontSize: '4rem', overflow: 'hidden', margin: 0, padding: '5px 0' }}>
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
                    <h3 style={{ fontSize: '1.5rem', overflow: 'hidden', whiteSpace: 'nowrap', margin: '10px 0 0 0', fontWeight: '500', color: 'var(--text-secondary)' }}>
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
                    <p style={{ fontSize: '1rem', overflow: 'hidden', margin: '25px 0 0 0', fontWeight: '500', color: 'var(--text-secondary)' }}>
                        {typingText3.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.05, delay: (typingText2.length * 0.05) + (index * 0.05) }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </p>
                </div>

                {/* Optional Graphic / Avatar logic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '250px' }}
                >
                    <div style={{ position: 'relative', width: '100%', maxWidth: '350px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Decorative glow behind avatar */}
                        <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'var(--accent-glow)', filter: 'blur(60px)', borderRadius: '50%', zIndex: 0 }}></div>
                        <canvas
                            ref={canvasRef}
                            style={{
                                zIndex: 1,
                                pointerEvents: 'none',
                                userSelect: 'none',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
