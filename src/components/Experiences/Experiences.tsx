import React from 'react';
import '../SharedPages.css';

export default function Experiences() {
    return (
        <div className="page-container">
            <h1 className="page-title">Experiences</h1>
            <p className="page-subtitle">My professional journey throughout the years.</p>
            <div className="timeline">
                <div className="timeline-card">
                    <h2>Software Developer III at Paycom</h2>
                    <h5 style={{ color: '#64748b' }}>Grapevine, TX | May 2024 - Present</h5>
                    <div style={{ textAlign: 'left' }}>
                        <p>• Architected and led the development of a global React/TypeScript component library used by 15+ teams, reducing redundant frontend development by 25% and establishing the core UI infrastructure for weekly production releases.</p>
                        <p>• Engineered an AI-powered Developer Support System by integrating a RAG pipeline (Pinecone, Milvus, GPT-4) directly into the UI ecosystem, reducing support overhead by 40% through automated, semantic root-cause analysis.</p>
                        <p>• Optimized AI-driven user experiences by implementing Hybrid Search and Re-ranking strategies, ensuring highly relevant code snippets and documentation were delivered within the LLM context window with sub-millisecond responsiveness.</p>
                        <p>• Boosted frontend performance and accessibility by 30% (Lighthouse scores) through advanced ES6+ optimizations, memoization, and lazy loading, ensuring full WCAG/ARIA compliance validated via JAWS and VoiceOver.</p>
                        <p>• Streamlined the end-to-end product lifecycle by owning CI/CD pipelines (GitLab/Jira) and designing RESTful APIs, bridging the gap between legacy enterprise systems and modern, AI-integrated web applications.</p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2>Software Developer Intern at Paycom</h2>
                    <h5 style={{ color: '#64748b' }}>Grapevine, TX | June 2023 - August 2023</h5>
                    <div style={{ textAlign: 'left' }}>
                        <p>• Worked with real-time data and created a new functionality for the product admin side using Role Based Access Control and Redux for state management.</p>
                        <p>• Visualized data with 10M+ dynamic records for long running jobs within 2-3ms of response time using highcharts library.</p>
                        <p>• Tailored system to perform advanced filtering and created custom hooks to store cached filters for a session authenticated through JSON Web Token, achieving persistent user experience.</p>
                        <p>• Crafted complex scripts and utilized Webpack, npm, and composer for local builds, followed by container deployment for testing.</p>
                        <p>• Followed the agile model to deliver the project, performed code reviews, and used JIRA to keep track of tasks.</p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2>Associate UI Engineer at IMPETUS TECHNOLOGIES</h2>
                    <h5 style={{ color: '#64748b' }}>Indore, MP, India | August 2021 - August 2022</h5>
                    <div style={{ textAlign: 'left' }}>
                        <p>• Developed and maintained a web dashboard for monitoring subsidiary companies using Angular, HTML5, and CSS/SCSS.</p>
                        <p>• Implemented caching mechanisms and optimized API call frequency to improve dashboard responsiveness by 2ms.</p>
                        <p>• Integrated RESTful APIs (GET, POST, PUT, DELETE) to fetch and display real-time business data with 100% accuracy.</p>
                        <p>• Delivered new features, UI panels, and bug fixes while collaborating with product to understand their business needs and convert them to technical requirements.</p>
                        <p>• Wrote unit tests to ensure reliable front-end performance and surpass any risks or bottlenecks, ensuring smooth deployments.</p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2>Software Developer Intern at TechnoStrap Digital Pvt. Ltd.</h2>
                    <h5 style={{ color: '#64748b' }}>Indore, MP, India | February 2021 - April 2021</h5>
                    <div style={{ textAlign: 'left' }}>
                        <p>• Created an Android classified app with admin and user login capabilities, allowing role-based access throughout the system.</p>
                        <p>• Blueprinted UI/UX designs using Figma and defined use cases through ER diagrams and UML Class diagrams using draw.io.</p>
                        <p>• Developed an android app that allows users to buy and sell products, allowing admins to select which items are made available to users for purchase.</p>
                        <p>• Built REST APIs using Django framework to add new items, favorites items, and add items to cart from MongoDB database for real time update in the system and integrated them in front-end.</p>
                        <p>• Setup frontend using Java and XML on Android Studio and implemented Razorpay payment gateway for payments.</p>
                    </div>
                </div>
                <div className="timeline-card">
                    <h2>MERN Stack Developer Intern at Ardent Technologies</h2>
                    <h5 style={{ color: '#64748b' }}>Indore, MP, India | June 2020 - August 2020</h5>
                    <div style={{ textAlign: 'left' }}>
                        <p>• Engineered a full-stack teacher-student management system using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline academic administrative processes.</p>
                        <p>• Implemented role-based access for diverse users and designed robust RESTful APIs to manage functionalities including attendance tracking, performance grading, and secure data exchange.</p>
                        <p>• Utilized React.js for building a dynamic user interface and MongoDB for scalable data storage, enhancing overall application performance and user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
