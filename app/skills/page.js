import "./Skills.css"

export const metadata = {
    title: "Skills - Asir Adnan",
  };

export default function Skills(){
    return (
        <>
        
        <header className="header">
        <h1 className="title">My Skills</h1>
    </header>

    <main className="skills-container">
        <section className="skill">
            <h2>Frontend Development</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
            </ul>
        </section>

        <section className="skill">
            <h2>Backend Development</h2>
            <ul>
                <li>Django</li>
                <li>Django Rest Framework</li>
                <li>Node.js</li>
                <li>NextJS</li>
                <li>REST APIs</li>
            </ul>
        </section>

        <section className="skill">
            <h2>Programming Languages</h2>
            <ul>
                <li>Python</li>
                <li>C++</li>
                <li>C</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>JavaScript</li>
            </ul>
        </section>

        <section className="skill">
            <h2>Programming Knowledge</h2>
            <ul>
                <li>Data Structures</li>
                <li>Algorithm</li>
                <li>OOP</li>
                <li>Database Management (MySQL, MongoDB)</li>
                <li>Software Design</li> 
            </ul>
        </section>

        <section className="skill">
            <h2>Soft Skills</h2>
            <ul>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Time Management</li>
                <li>Team Collaboration</li>
                <li>Effective Communication</li>
            </ul>
        </section>

        <section className="skill">
            <h2>Tools & Technologies</h2>
            <ul>
                <li>Linux</li>
                <li>Hosting</li>
                <li>Git & GitHub</li>
                <li>Docker</li>

            </ul>
        </section>

        <section className="skill">
            <h2>Other Skills</h2>
            <ul>    
                <li>UI/UX Basics</li>
                <li>SEO Basics</li>
            </ul>
        </section>
    </main>

    </>
    )
}