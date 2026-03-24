import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '6rem 2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get In Touch</h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>I'm always open to discussing new opportunities or exciting projects. Let's connect!</p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="glass-panel"
                style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', width: '100%', maxWidth: '600px' }}
            >
                <div>
                    <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)', textAlign: 'center' }}>Dallas, TX</h2>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', textAlign: 'center' }}>Currently based in Texas</p>
                </div>

                <div style={{ width: '100%', borderTop: '1px solid var(--glass-border)', margin: '1rem 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)', textAlign: 'center' }}>Let's connect on LinkedIn!</h2>
                    <a href="https://www.linkedin.com/in/manali-gandhi-b187401a6/" target="_blank" rel="noopener noreferrer" className="btn" style={{ textDecoration: 'none' }}>
                        Visit LinkedIn
                    </a>
                </div>

                <div style={{ width: '100%', borderTop: '1px solid var(--glass-border)', margin: '1rem 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)', textAlign: 'center' }}>Or shoot me an email</h2>
                    <a href="mailto:gandhi.manali@outlook.com" className="btn" style={{ textDecoration: 'none' }}>
                        gandhi.manali@outlook.com
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
