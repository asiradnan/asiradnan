import "./Header.css"
import { useState } from "react";
import { NavLink } from "react-router-dom";
const menuIcon = require("./Icons/menu.png")
function Header(){
    const [toplink, updateToplink] = useState("toplinks2off");
    const navBarToggle =()=>{
        (toplink === "toplinks2off") ? updateToplink("toplinks2on"):updateToplink("toplinks2off");
    }
    return(
        <>
            <header id="header1">
                <h2 id="topname">asiradnan</h2>
                <div id="toplinks">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/cp">Competitive Programming</NavLink>     
                    <NavLink to="/blogs">Blogs</NavLink> 
                </div>
            </header>
            <header id="header2">
                <h2 id="topname">asiradnan</h2>
                <button id="menu" onClick={navBarToggle}><img src={menuIcon} alt="Icon" /></button>
                <div id="toplinks2" className={toplink}>
                    <br/>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/cp">Competitive Programming</NavLink>     
                    <NavLink to="/blogs">Blogs</NavLink> 
                </div>
            </header>
        </>
    );
}
export default Header