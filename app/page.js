import "./Home.css"
import me_resized from "@/public/pics/me_resized.png"
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <main id="index">
        <p id="left">
            Hey, I am <br/>
            <span id="mainname">Asir Adnan</span>
        </p>
        <div id="desktop-image">
            <Image  id="mainpic" src={me_resized} alt="Profile Photo" />
        </div>
        <div id="right">
            <p>Full Stack Developer.</p>
            <p> Python Specialist, </p>
            <p> Django, DRF, FastAPI. </p>
        </div>
    </main> 
    <Footer />
    </>
    
  );
}
