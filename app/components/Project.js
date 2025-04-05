"use client"
import Image from "next/image"
import { useState } from "react"
import todoIcon from "@/public/pics/todo.png"
import tictactoeIcon from "@/public/pics/tictactoe.png"
import calcIcon from "@/public/pics/calc.png"
import weatherIcon from "@/public/pics/weather.png"
import ytIcon from "@/public/pics/yt.jpeg"
import urlIcon from "@/public/pics/url.png"
import wishIcon from "@/public/pics/sendwish.png"
import qrIcon from "@/public/pics/qr.png"
import copypasteIcon from "@/public/pics/copypaste.png"
import redballIcon from "@/public/pics/redball.png"
import greaterNumberGame from "@/public/pics/GreaterNumberGame.png"
import periodicTable from "@/public/pics/PeriodicTable.png"
import muslimApp from "@/public/pics/MuslimApp.jpg"
import vangtiChai from "@/public/pics/VangtiChai.png"

const projects = [
    {
        icon: copypasteIcon,
        title: "Copy Pasta",
        description: "Easier way to send text or file from one device to another.",
        liveLink: "https://copypasta.asiradnan.com",
        sourceLink: "https://github.com/asiradnan/copypaste",
        category: "Full Stack"
    },
    {
        icon: qrIcon,
        title: "QR Code",
        description: "Make customized qr code from any text or link!",
        liveLink: "https://qr.asiradnan.com",
        sourceLink: "https://github.com/asiradnan/qrcode",
        category: "Full Stack"
    },
    {
        icon: wishIcon,
        title: "Send Wishes",
        description: "Send wishes to whoever you want without revealing your identity!",
        liveLink: "https://sendwish.asiradnan.com",
        sourceLink: "https://github.com/asiradnan/receiveemail",
        category: "Full Stack"
    },
    {
        icon: urlIcon,
        title: "Chotto URL",
        description: "URL Shortner to shorten to large urls into a fixed length. Effective to share large urls.",
        liveLink: "https://chottourl.asiradnan.com",
        sourceLink: "https://github.com/asiradnan/url-shortener",
        category: "Full Stack"
    },
    {
        icon: todoIcon,
        title: "ToDo App",
        description: "A task management frontend that lets users securely create, update, filter, and track todos in real time.",
        liveLink: "https://todo.asiradnan.com/",
        sourceLink: "https://github.com/asiradnan/todo_nextjs_frontend",
        category: "Front End"
    },
    {
        icon: tictactoeIcon,
        title: "Tic Tac Toe",
        description: "A game where you can play against your friend or AI!",
        liveLink: "https://tictactoe.asiradnan.com/",
        sourceLink: "https://github.com/asiradnan/Tic-Tac-Toe",
        category: "Front End"
    },
    {
        icon: calcIcon,
        title: "Calculator",
        description: "Basic calculator - result of vanilla javascript.",
        liveLink: "https://calculator.asiradnan.com",
        sourceLink: "https://github.com/asiradnan/Calculator",
        category: "Front End"
    },
    {
        icon: weatherIcon,
        title: "Weather",
        description: "A weather app with an integrated map.",
        liveLink: "https://weather.asiradnan.com",
        sourceLink: "https://github.com/asiradnan/Weather",
        category: "Front End"
    },
    {
        icon: ytIcon,
        title: "YouTube Clone",
        description: "A clone I made practicing API and responsive CSS",
        liveLink: "https://www.youtube.com/watch?v=NxVQ8UK-GCE",
        sourceLink: "https://github.com/asiradnan/YouTube-Clone",
        category: "Front End"
    },
    {
        icon: redballIcon,
        title: "Red Ball Detection",
        description: "Red Ball detection from video or image using OpenCV and Python",
        liveLink: "https://youtu.be/1JfK-jljfNw?si=-umm4iTdmRqVXQeG",
        sourceLink: "https://github.com/asiradnan/Red-Ball-Detection",
        category: "Others"
    },
    {
        icon: muslimApp,
        title: "Muslim App",
        description: "Muslim App is a feature-rich Kotlin-based Android application designed to help Muslims track their daily religious duties effectively.",
        liveLink: "https://github.com/asiradnan/MuslimAppAndroid/releases/download/v1.0.0/muslimApp.apk",
        sourceLink: "https://github.com/asiradnan/MuslimAppAndroid",
        category: "Android"
    },
    {
        icon: periodicTable,
        title: "Periodic Table",
        description: "An Android app a list of 118 elements, each with detailed information in Bangla/English language.",
        liveLink: "https://github.com/asiradnan/Periodic-Table/releases/download/v1.0.0/periodicTable.apk",
        sourceLink: "https://github.com/asiradnan/Periodic-Table",
        category: "Android"
    },
    {
        icon: greaterNumberGame,
        title: "Greater Number Game",
        description: "A simple and fun Android game where players guess which of the two numbers is greater.",
        liveLink: "https://github.com/asiradnan/Greater-Number-Game/releases/download/v1.0.0/GreaterNumberGame.apk",
        sourceLink: "https://github.com/asiradnan/Greater-Number-Game",
        category: "Android"
    },
    {
        icon: vangtiChai,
        title: "Vangti Chai",
        description: "An Android app built as one of my first practice projects in an Android development course. This app calculates the minimum number of currency notes needed to make up a given amount.",
        liveLink: "https://github.com/asiradnan/Vangti-Chai/releases/download/v1.0.0/VangtiChai.apk",
        sourceLink: "https://github.com/asiradnan/Vangti-Chai",
        category: "Android"
    },
    
]
export default function ProjectcList(){
    const [selectedCategory, setSelectedCategory] = useState("All")
    const categories = ["All", "Front End", "Full Stack", "Android", "Others"]

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory)
    return(
        <>
            <header className="header">
                <h1 className="title">Projects</h1>
                <div className="categories">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </header>

            <div className="projectsMain">
                {filteredProjects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="pic">
                            <Image src={project.icon} alt={`${project.title} Snapshot`} style={{ objectFit: "contain" }} />
                        </div>
                        <div className="about">
                            <div className="project-header">
                                <p id="p_head">{project.title}</p>
                                <span className="category-tag">{project.category}</span>
                            </div>
                            <p id="des">{project.description}</p>
                            <div className="button-container">
                                <a href={project.liveLink} target="_blank"><button>Try now!</button></a>
                                <a href={project.sourceLink} target="_blank"><button>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}