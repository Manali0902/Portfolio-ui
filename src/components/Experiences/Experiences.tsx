import React, { useRef, useState } from 'react';
import '../SharedPages.css';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const experiencesData = [
    {
        title: "Software Developer III",
        company: "Paycom",
        location: "Grapevine, TX",
        date: "May 2024 - Present",
        details: [
            "Architected and led the development of a global React/TypeScript component library used by 15+ teams, reducing redundant frontend development by 25% and establishing the core UI infrastructure for weekly production releases.",
            "Engineered an AI-powered Developer Support System by integrating a RAG pipeline (Pinecone, Milvus, GPT-4) directly into the UI ecosystem, reducing support overhead by 40% through automated, semantic root-cause analysis.",
            "Optimized AI-driven user experiences by implementing Hybrid Search and Re-ranking strategies, ensuring highly relevant code snippets and documentation were delivered within the LLM context window with sub-millisecond responsiveness.",
            "Boosted frontend performance and accessibility by 30% (Lighthouse scores) through advanced ES6+ optimizations, memoization, and lazy loading, ensuring full WCAG/ARIA compliance validated via JAWS and VoiceOver.",
            "Streamlined the end-to-end product lifecycle by owning CI/CD pipelines (GitLab/Jira) and designing RESTful APIs, bridging the gap between legacy enterprise systems and modern, AI-integrated web applications."
        ]
    },
    {
        title: "Software Developer Intern",
        company: "Paycom",
        location: "Grapevine, TX",
        date: "June 2023 - August 2023",
        details: [
            "Worked with real-time data and created a new functionality for the product admin side using Role Based Access Control and Redux for state management.",
            "Visualized data with 10M+ dynamic records for long running jobs within 2-3ms of response time using highcharts library.",
            "Tailored system to perform advanced filtering and created custom hooks to store cached filters for a session authenticated through JSON Web Token, achieving persistent user experience.",
            "Crafted complex scripts and utilized Webpack, npm, and composer for local builds, followed by container deployment for testing.",
            "Followed the agile model to deliver the project, performed code reviews, and used JIRA to keep track of tasks."
        ]
    },
    {
        title: "Associate UI Engineer",
        company: "IMPETUS TECHNOLOGIES",
        location: "Indore, MP, India",
        date: "August 2021 - August 2022",
        details: [
            "Developed and maintained a web dashboard for monitoring subsidiary companies using Angular, HTML5, and CSS/SCSS.",
            "Implemented caching mechanisms and optimized API call frequency to improve dashboard responsiveness by 2ms.",
            "Integrated RESTful APIs (GET, POST, PUT, DELETE) to fetch and display real-time business data with 100% accuracy.",
            "Delivered new features, UI panels, and bug fixes while collaborating with product to understand their business needs and convert them to technical requirements.",
            "Wrote unit tests to ensure reliable front-end performance and surpass any risks or bottlenecks, ensuring smooth deployments."
        ]
    },
    {
        title: "Software Developer Intern",
        company: "TechnoStrap Digital Pvt. Ltd.",
        location: "Indore, MP, India",
        date: "February 2021 - April 2021",
        details: [
            "Created an Android classified app with admin and user login capabilities, allowing role-based access throughout the system.",
            "Blueprinted UI/UX designs using Figma and defined use cases through ER diagrams and UML Class diagrams using draw.io.",
            "Developed an android app that allows users to buy and sell products, allowing admins to select which items are made available to users for purchase.",
            "Built REST APIs using Django framework to add new items, favorites items, and add items to cart from MongoDB database for real time update in the system and integrated them in front-end.",
            "Setup frontend using Java and XML on Android Studio and implemented Razorpay payment gateway for payments."
        ]
    },
    {
        title: "MERN Stack Developer Intern",
        company: "Ardent Technologies",
        location: "Indore, MP, India",
        date: "June 2020 - August 2020",
        details: [
            "Engineered a full-stack teacher-student management system using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline academic administrative processes.",
            "Implemented role-based access for diverse users and designed robust RESTful APIs to manage functionalities including attendance tracking, performance grading, and secure data exchange.",
            "Utilized React.js for building a dynamic user interface and MongoDB for scalable data storage, enhancing overall application performance and user experience."
        ]
    }
];

const TimelineItem = ({ exp, index }: { exp: typeof experiencesData[0], index: number }) => {
    const isLeft = index % 2 === 0;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                alignItems: 'flex-start',
                width: '100%',
                marginBottom: '4rem',
                position: 'relative'
            }}
        >
            {/* The Dot on the center line */}
            {/* We position it near the top (e.g. 40px down) to align with the initial unexpanded view */}
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '40px',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#c084fc',
                    borderRadius: '50%',
                    zIndex: 2,
                    boxShadow: '0 0 10px #c084fc'
                }} 
            />

            {/* The Experience Card */}
            <div style={{
                width: '45%',
                display: 'flex',
                justifyContent: isLeft ? 'flex-end' : 'flex-start'
            }}>
                <motion.div 
                    layout
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        padding: '2rem',
                        borderRadius: '15px',
                        cursor: 'none',
                        width: '100%',
                        textAlign: 'left', // Always left align the content
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.h2 layout style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.5rem' }}>{exp.title}</motion.h2>
                    <motion.h3 layout style={{ margin: '0 0 0.5rem 0', color: '#c084fc', fontSize: '1.2rem' }}>{exp.company}</motion.h3>
                    
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden', textAlign: 'left', marginTop: '1rem' }}
                            >
                                {exp.details.map((detail, idx) => (
                                    <p key={idx} style={{ margin: '0.5rem 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>• {detail}</p>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    <motion.div layout style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                        <span>{isExpanded ? 'Click to collapse' : 'Click to expand'}</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* The Timeline Date (Opposite Side) */}
            <div style={{
                width: '45%',
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                paddingTop: '35px' // Align with the dot
            }}>
                <div style={{
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    textAlign: isLeft ? 'left' : 'right'
                }}>
                    <div>{exp.date}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 400, marginTop: '0.5rem' }}>{exp.location}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Experiences() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <div ref={containerRef} className="page-container" style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Experience</h1>
            <p className="page-subtitle" style={{ textAlign: 'center', marginBottom: '5rem', color: 'var(--text-secondary)' }}>My professional journey throughout the years.</p>
            
            <div style={{ position: 'relative' }}>
                {/* Background Dim Line */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    width: '4px',
                    background: 'var(--glass-border)',
                    transform: 'translateX(-50%)',
                    borderRadius: '4px'
                }} />

                {/* Animated Gradient Line that grows with scroll */}
                <motion.div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    width: '4px',
                    background: 'var(--accent-gradient)',
                    transform: 'translateX(-50%)',
                    borderRadius: '4px',
                    transformOrigin: 'top',
                    scaleY: scrollYProgress,
                    zIndex: 1
                }} />

                {/* Timeline Items */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    {experiencesData.map((exp, index) => (
                        <TimelineItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
