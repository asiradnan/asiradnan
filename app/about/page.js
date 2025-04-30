import "./About.css"
import Link from "next/link";
import { Caveat } from 'next/font/google';

export const metadata = {
    title: "About - Asir Adnan",
};

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400', '700'], // Adjust weights as needed
});
export default function About() {
    return (
        <main>
            <header className="header" >
                <h1 className="title">About Me</h1>
            </header>
            <div id="about_div" >

                <p id="about_paragraph">
                    <p>
                        Hey there! I&apos;m Asir Adnan — a passionate <strong>Full-Stack Developer</strong> who loves building real-world solutions with clean, scalable code. <br /><br />
                        I specialize in <strong>Python development</strong>, with a strong focus on backend technologies like Django, FastAPI, and DRF, and I sharpen my thinking through <Link href="/cp">Competitive Programming</Link>. <br /><br />
                        Self-taught and deeply curious, I constantly push myself to explore new tools and build fun, impactful <Link href="/projects">Projects</Link>!
                    </p>

                </p>

            </div>
        </main>

    )
}