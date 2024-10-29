import "./Projects.css"
import Image from "next/image"
import todoIcon from "@/public/pics/todo.png"
import tictactoeIcon from "@/public/pics/tictactoe.png"
import calcIcon from "@/public/pics/calc.png"
import weatherIcon from "@/public/pics/weather.jpg"
import ytIcon from "@/public/pics/yt.jpeg"
import urlIcon from "@/public/pics/url.png"
import wishIcon from "@/public/pics/sendwish.png"
import qrIcon from "@/public/pics/qr.png"
import copypasteIcon from "@/public/pics/copypaste.png"

export const metadata = {
    title: "Projects - Asir Adnan",
    description: "Projects of Asir Adnan's portfolio",
  };

function Projects(){
    return(
        <>
        <h2 id="web">Web Projects</h2>
        <div className="projectsMain">
            <div className="project">
                <div className="pic">
                    <Image src={copypasteIcon} alt="CopyPasta App Snapshot" style={{objectFit: "contain"}} />
                </div>
                <div className="about">
                    <p id="p_head">Copy Pasta</p>
                    <p id="des">Easier way to send text or file from one device to another. </p>
                    <a href="https://copypasta.asiradnan.com" target="_blank"><button>Try now!</button></a>
                    <a href="https://github.com/asiradnan/copypaste" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div className="project">
                <div className="pic">
                    <Image src={qrIcon} alt="QR Code App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">QR Code</p>
                    <p id="des">Make customized qr code from any text or link!</p>
                    <a href="https://qr.asiradnan.com" target="_blank"><button>Try QR!</button></a>
                    <a href="https://github.com/asiradnan/qrcode" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div className="project">
                <div className="pic">
                    <Image src={wishIcon} alt="Send Wishes App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">Send Wishes</p>
                    <p id="des">Send wishes to whoever you want without revealing your identity!</p>
                    <a href="https://sendwish.asiradnan.com" target="_blank"><button>Send a Wish!</button></a>
                    <a href="https://github.com/asiradnan/receiveemail" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div className="project">
                <div className="pic">
                    <Image src={urlIcon} alt="ChottoURL App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">Chotto URL</p>
                    <p id="des">URL Shortner to shorten to large urls into a fixed length. Effective to share large urls.</p>
                    <a href="https://chottourl.asiradnan.com" target="_blank"><button>Use Now!</button></a>
                    <a href="https://github.com/asiradnan/url-shortener" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div className="project">
                <div className="pic">
                    <Image src={todoIcon} alt="ToDo App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">ToDo App</p>
                    <p id="des">Fully working minimal ToDo List webapp. Made with Django.</p>
                    <a href="https://todo.asiradnan.com/" target="_blank"><button>Use Now!</button></a>
                    <a href="https://github.com/asiradnan/ToDo" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div className="project">
                <div className="pic">
                    <Image src={tictactoeIcon} alt="TicTacToe App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">Tic Tac Toe</p>
                    <p id="des">A game where you can play against your friend or AI!</p>
                    <a href="https://tictactoe.asiradnan.com/" target="_blank"><button>Play Now!</button></a>
                    <a href="https://github.com/asiradnan/Tic-Tac-Toe" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="project">
                <div className="pic">
                    <Image src={calcIcon} alt="Calculator App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">Calculator</p>
                    <p id="des">Basic calculator - result of vanilla javascript.</p>
                    <a href="https://calculator.asiradnan.com" target="_blank"><button>Try Now!</button></a>
                    <a href="https://github.com/asiradnan/Calculator" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="project">
                <div className="pic">
                    <Image src={weatherIcon} alt="Weather App Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">Weather</p>
                    <p id="des">A weather app with an integrated map.</p>
                    <a href="https://weather.asiradnan.com" target="_blank"><button>Try Now!</button></a>
                    <a href="https://github.com/asiradnan/Weather" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="project">
                <div className="pic">
                    <Image src={ytIcon} alt="YouTube Clone Video Snapshot" style={{objectFit: "contain"}}/>
                </div>
                <div className="about">
                    <p id="p_head">YouTube Clone</p>
                    <p id="des">A clone I made practicing API and responsive CSS</p>
                    <a href="https://www.youtube.com/watch?v=NxVQ8UK-GCE" target="_blank"><button>Watch Demo!</button></a>
                    <a href="https://github.com/asiradnan/YouTube-Clone" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>  
        </div>
        </>
    )
}
export default Projects; 