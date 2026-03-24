import { motion } from 'framer-motion';

const academicsData = [
    {
        degree: "Master of Science, Computer Science",
        university: "The University of Texas at Arlington, Arlington, TX",
        date: "May 2024",
        details: "Focused on advanced algorithms, software engineering, and modern web architectures."
    },
    {
        degree: "Bachelor of Technology, Computer Science",
        university: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, MP",
        date: "July 2016",
        details: "Built a strong foundation in computer science principles, databases, algorithms, and web technologies."
    },
    {
        degree: "Head of Public Relations (PR) Department",
        university: "Prayatna- Aspiring Dreams",
        date: "May 2020 - December 2021",
        details: "Managed a team of 12 members in a non-profit organization."
    }
];

export default function Academics() {
    return (
        <section id="academics" style={{ padding: '6rem 2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Academics & Achievements</h1>
            <p style={{ textAlign: 'center', marginBottom: '5rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Education history and prominent awards won.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px' }}>
                {academicsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
                    >
                        <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>{item.degree}</h2>
                        <h4 style={{ fontSize: '1rem', margin: 0, color: '#c084fc', fontWeight: 500 }}>
                            {item.university} | <span style={{ color: 'var(--text-secondary)' }}>{item.date}</span>
                        </h4>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
