import Link from 'next/link';

export default function IntroPage() {
  return (
    <main className="template-main">
      <div className="template-container" style={{ textAlign: 'center' }}>
        <header className="organism-header">
          <h1>Welcome to <span className="highlight">Task Master</span></h1>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#94a3b8' }}>
            A premium, atomic-design driven Todo Application built with Next.js App Router and Vanilla CSS.
          </p>
        </header>
        <div style={{ marginTop: '3rem' }}>
          <Link href="/todo" className="atom-btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1.2rem', padding: '1rem 2rem' }}>
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
