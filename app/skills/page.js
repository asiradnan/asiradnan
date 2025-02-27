import "./Skills.css"

export const metadata = {
    title: "Skills - Asir Adnan",
};

export default function Skills() {
    return (
        <>
            <header className="header">
                <h1 className="title">Skills</h1>
            </header>

            <main className="skills-container">
                <section className="skill">
                    <h2>Backend Development</h2>
                    <ul>
                        <li>FastAPI</li>
                        <li>Django</li>
                        <li>Django Rest Framework</li>
                        <li>Node.js</li>
                        <li>NextJS</li>
                        <li>Express.js</li>
                    </ul>
                </section>

                <section className="skill">
                    <h2>Android Development</h2>
                    <ul>
                        <li>Offline-first Architecture</li>
                        <li>Jetpack Compose</li>
                        <li>Room Database</li>
                        <li>Coroutines</li>
                        <li>ViewModel</li>
                        <li>LiveData</li>
                        <li>Push Notifications</li>
                        <li>Material UI</li>
                    </ul>
                </section>

                <section className="skill">
                    <h2>Frontend Development</h2>
                    <ul>
                        <li>NextJS</li>
                        <li>React.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </section>

                <section className="skill">
                    <h2>Programming Languages</h2>
                    <ul>
                        <li>Python</li>
                        <li>Kotlin</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Java</li>
                    </ul>
                </section>

                <section className="skill">
                    <h2>Programming Knowledge</h2>
                    <ul>
                        <li>Operating System</li>
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
                        <li>Nginx</li>
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