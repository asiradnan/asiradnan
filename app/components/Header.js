"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import "./Header.css"
import { useEffect, useState } from "react"
import menuIcon from "@/public/Icons/menu.png"

export default function Header(){
    const currentPath = usePathname();
    const [toplink, updateToplink] = useState("toplinks2off");
    const navBarToggle =()=>{
        (toplink === "toplinks2off") ? updateToplink("toplinks2on"):updateToplink("toplinks2off");
    }
    const [MobileCSS, setMobileCSS] = useState(false);
        useEffect(() => {
            const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setMobileCSS(true);
            } else {
                setMobileCSS(false);
            }
        };
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    return(
        <>
        <header id={MobileCSS === true ? "header2" : "header1"}>
            <h1 id="topname">asiradnan</h1>
            <button style={{ display: MobileCSS ? "block" : "none" }} id="menu" onClick={navBarToggle} aria-label="Toggle menu"><Image src={menuIcon} alt="toggle Icon" /></button>
            <div  id={MobileCSS === true ? "toplinks2" : "toplinks"} className={toplink} >
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