import Link from 'next/link';

export default function AboutPage() {
    return (<main className="custom-main">
        <h1>About Us</h1>
        <p><Link href="/">Home</Link></p>
    </main>
    );
}