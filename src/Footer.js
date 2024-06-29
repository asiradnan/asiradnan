import "./Footer.css"
function Footer(){
    const github = require("./Icons/github.png");
    const linkedin = require("./Icons/linkedin.png");
    const youtube = require("./Icons/youtube.png");
    const facebook = require("./Icons/facebook.png");
    const mail = require("./Icons/mail.png");

    return(
        <footer>
            <a href="https://github.com/asiradnan" target="_blank"><img src={github}/></a>
            <a href="https://www.linkedin.com/in/asiradnan" target="_blank"><img src={linkedin}/></a>
            <a href="https://youtube.com/@AsironScreen?si=KEwE1loeWyuPD94J" target="_blank"><img src={youtube}/></a>
            <a href="https://web.facebook.com/asiradnan23/" target="_blank"><img src={facebook}/></a>
            <a onclick="email()" href="#"><img src={mail}/></a>
        </footer>
    );
}
export default Footer;