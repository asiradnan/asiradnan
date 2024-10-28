"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import "./Header.css"
import { useState } from "react"
import menuIcon from "@/public/Icons/menu.png"

export default function Header(){
    const currentPath = usePathname();
    const [toplink, updateToplink] = useState("toplinks2off");
    const navBarToggle =()=>{
        (toplink === "toplinks2off") ? updateToplink("toplinks2on"):updateToplink("toplinks2off");
    }
    return(
        <>
            <header id="header1">
            <h2 id="topname">asiradnan</h2>
            <div id="toplinks">
                <Link href="/" className={currentPath === "/" ? "active" : ""}> Home</Link>
                <Link href="/about" className={currentPath === "/about" ? "active" : ""}>About</Link>
                <Link href="/skills" className={currentPath === "/skills" ? "active" : ""}>Skills</Link>
                <Link href="/projects" className={currentPath === "/projects" ? "active" : ""}>Projects</Link>
                <Link href="/cp" className={currentPath === "/cp" ? "active" : ""}>Competitive Programming</Link>     
                <Link href="/blogs" className={currentPath === "/blogs" ? "active" : ""}>Blogs</Link> 
            </div>
        </header>
        <header id="header2">
            <h2 id="topname">asiradnan</h2>
            <button id="menu" onClick={navBarToggle} aria-label="Toggle menu"><Image src={menuIcon} alt="toggle Icon" /></button>
            <div id="toplinks2" className={toplink}> 
              
                <br/>
                <Link href="/" className={currentPath === "/" ? "active" : ""}> Home</Link>
                <Link href="/about" className={currentPath === "/about" ? "active" : ""}>About</Link>
                <Link href="/skills" className={currentPath === "/skills" ? "active" : ""}>Skills</Link>
                <Link href="/projects" className={currentPath === "/projects" ? "active" : ""}>Projects</Link>
                <Link href="/cp" className={currentPath === "/cp" ? "active" : ""}>Competitive Programming</Link>     
                <Link href="/blogs" className={currentPath === "/blogs" ? "active" : ""}>Blogs</Link> 
            </div>
        </header>
        </>
    )
}