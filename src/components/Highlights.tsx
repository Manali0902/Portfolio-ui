import { motion } from 'framer-motion';
import SpotlightCard from './react-bits/SpotlightCard';

const highlights = [
  {
    title: "Scalable Web Systems",
    description: "Building performant applications with modern frameworks and reusable architectures.",
    icon: "🏗️"
  },
  {
    title: "AI-Driven Tools",
    description: "Creating intelligent developer tools and search systems using LLMs and vector databases.",
    icon: "🤖"
  },
  {
    title: "Developer Experience",
    description: "Designing tools and components that help engineering teams move faster.",
    icon: "⚡"
  }
];

export default function Highlights() {
  return (
    <section id="highlights" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.15)', padding: '6rem 2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '1200px' }}>
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            style={{ flex: '1 1 280px', maxWidth: '400px', minWidth: '250px' }}
          >
            <SpotlightCard
              className="highlight-spotlight-card"
              spotlightColor="rgba(192, 132, 252, 0.25)"
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', padding: '1rem 0' }}>
                <span style={{ fontSize: '3rem' }}>{item.icon}</span>
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: 0, color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
