import "./Home.css"
import Footer from "./Footer"
const me_resized = require("./pics/me_resized.png")
const me_mobile = require("./pics/me_mobile.png")

function Home(){
    return(
        <>  
            <main id="index">
                <p id="left">
                    Hey, I am <br/>
                    <span id="mainname">Asir Adnan</span>
                </p>
                <div id="desktop-image">
                    <img id="mainpic" src={me_resized} alt="haha" />
                </div>
                <div id="mobile-image">
                    <img id="mainpic" src={me_mobile} alt="haha" />
                </div>
                <div id="right">
                    <p> CS Undergrad, </p>
                    <p>Competitive Programmer, </p>
                    <p>Web Developer.</p>
                </div>
            </main> 
            <Footer/>
        </>
        
    )
}
export default Home;