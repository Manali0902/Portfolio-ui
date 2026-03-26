import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb, SiFirebase } from 'react-icons/si';
import LogoLoop from './react-bits/LogoLoop';
import MagicBento from './react-bits/MagicBento';



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

    const techStackLogos = techStack.map((tech) => ({
        node: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', padding: '1.5rem' }}>
                <span style={{ fontSize: '3rem', color: '#c084fc' }}>{tech.icon}</span>
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>{tech.name}</span>
            </div>
        ),
        title: tech.name
    }));

    const bentoCards = [
        {
            title: 'Experience',
            description: 'Years in the industry building intelligent software.',
            label: '3+',
            color: '#060010'
        },
        {
            title: 'Enterprise Projects',
            description: 'Delivered robust solutions at scale.',
            label: '15+',
            color: '#060010'
        },
        {
            title: 'Optimization',
            description: 'Records optimized in real-time pipelines.',
            label: '10M+',
            color: '#060010'
        }
    ];

    return (
        <section id="about" style={{ padding: '6rem 2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ maxWidth: '800px', textAlign: 'center', cursor: 'default' }}>
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
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <LogoLoop logos={techStackLogos} speed={80} direction="left" />
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1000px', marginTop: '6rem', position: 'relative', zIndex: 2, borderTop: '1px solid var(--glass-border)', paddingTop: '4rem' }}>
                <MagicBento cards={bentoCards} enableStars={true} enableSpotlight={true} />
            </div>
        </section>
    );
}
