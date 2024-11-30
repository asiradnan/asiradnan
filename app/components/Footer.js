"use client"
import "./Footer.css";
import Image from "next/image";
import github from "@/public/Icons/github.png";
import linkedin from "@/public/Icons/linkedin.png";
import youtube from "@/public/Icons/youtube.png";
import facebook from "@/public/Icons/facebook.png";
import mail from "@/public/Icons/mail.png";
import cv from "@/public/Icons/cv.png";


function Footer(){
    const email = () => {
        alert("Email me at asiradnan23@gmail.com");
    };
    return(
        <footer>
            <a href="https://github.com/asiradnan" target="_blank"><Image src={github} alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/asiradnan" target="_blank"><Image src={linkedin} alt="linkedin icon"/></a>
            <a href="https://youtube.com/@AsironScreen?si=KEwE1loeWyuPD94J" target="_blank"><Image src={youtube} alt="youtube icon"/></a>
            <a href="https://web.facebook.com/asiradnan23/" target="_blank"><Image src={facebook} alt="facebook icon"/></a>
            <a onClick={email} href="#"><Image src={mail} alt="email icon"/></a>
            <a href="/AsirAdnan_Nov_2024.pdf" target="_blank"><Image src={cv} alt="cv icon"/></a>
        </footer>
    );
}
export default Footer;