import Link from "next/link"

export default function NavBar() {
    return (
        <>
        <div className="grid grid-cols-2">

        
        <h2>
            Asir Adnan
        </h2>
        <Image src="" alt="" />
            <nav className="hidden grid-row-6 md:grid-cols-6 lg:grid">
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/achievements">Achievements</Link>
                <Link href="/experience">Experience</Link>
            </nav>
            </div>
        </>
    )
}