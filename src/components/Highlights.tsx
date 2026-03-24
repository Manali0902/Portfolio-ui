import { motion } from 'framer-motion';

const highlights = [
  {
    title: "Scalable Web Systems",
    description: "Building performant applications with modern frameworks and reusable architectures."
  },
  {
    title: "AI-Driven Tools",
    description: "Creating intelligent developer tools and search systems using LLMs and vector databases."
  },
  {
    title: "Developer Experience",
    description: "Designing tools and components that help engineering teams move faster."
  }
];

export default function Highlights() {
  return (
    <section id="highlights" style={{ padding: '0rem 2rem 6rem 2rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="flip-card"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>{item.title}</h3>
              </div>
              <div className="flip-card-back">
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: 0, fontWeight: 500, color: '#fff' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
