export default function Footer() {
    return (
        <footer style={{
            width: '100%',
            padding: '2rem',
            borderTop: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            background: 'var(--bg-primary)',
            backdropFilter: 'blur(10px)',
            marginTop: '4rem'
        }}>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} Manali Gandhi. All rights reserved.
            </p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                Built with React, TypeScript & Framer Motion.
            </p>
        </footer >
    );
}
