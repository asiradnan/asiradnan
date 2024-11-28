import  "./About.css"
import Link from "next/link";
import { Caveat } from 'next/font/google';

export const metadata = {
    title: "About - Asir Adnan",
  };

  const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400', '700'], // Adjust weights as needed
});
export default function About(){
    return (
        <main className={caveat.className}>
        <header className="header" >
                <h1 className="title">About Me</h1>
            </header>
            <div id="about_div" >
            
            <p id="about_paragraph">
                Hey there! I&apos;m Asir Adnan, currently sailing through the exciting seas of computer science at BRAC University, where I&apos;m in my third year of pursuing a BS in Computer Science. <br/><br/>
                I love <Link href="/cp">Competitive Programming</Link> which makes it easy for me to apply my &quot;liking to think&quot; attribute and my coding skills altogether. <br/><br/>
                Also, I teach myself development tools to treat myself with delicious <Link href="/projects">Projects</Link>!
            </p>
        </div>
        </main>
        
    )
}