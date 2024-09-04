import "./Projects.css"
const todoIcon = require("./pics/todo.png")
const tictactoeIcon = require("./pics/tictactoe.png")
const calcIcon = require("./pics/calc.png")
const weatherIcon = require("./pics/weather.jpg")
const ytIcon = require("./pics/yt.jpeg")
const urlIcon = require("./pics/url.png")
const wishIcon = require("./pics/sendwish.png")
const qrIcon = require("./pics/qr.png")
const copypasteIcon = require("./pics/copypaste.png")
function Projects(){
    return(
        <>
        <h1>Web Projects</h1>
        <div className="projectsMain">
            <div class="project">
                <div class="pic">
                    <img src={copypasteIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">Copy Paste</p>
                    <p id="des">Easier way to send text or file from one device to another. </p>
                    <a href="https://copypasta.asiradnan.com" target="_blank"><button>Try now!</button></a>
                    <a href="https://github.com/asiradnan/copypaste" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div class="project">
                <div class="pic">
                    <img src={qrIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">QR Code</p>
                    <p id="des">Make customized qr code from any text or link!</p>
                    <a href="https://qr.asiradnan.com" target="_blank"><button>Try QR!</button></a>
                    <a href="https://github.com/asiradnan/qrcode" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div class="project">
                <div class="pic">
                    <img src={wishIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">Send Wishes</p>
                    <p id="des">Send wishes to whoever you want without revealing your identity!</p>
                    <a href="https://sendwish.asiradnan.com" target="_blank"><button>Send a Wish!</button></a>
                    <a href="https://github.com/asiradnan/receiveemail" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div class="project">
                <div class="pic">
                    <img src={urlIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">Chotto URL</p>
                    <p id="des">URL Shortner to shorten to large urls into a fixed length. Effective to share large urls.</p>
                    <a href="https://chottourl.asiradnan.com" target="_blank"><button>Use Now!</button></a>
                    <a href="https://github.com/asiradnan/url-shortener" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div class="project">
                <div class="pic">
                    <img src={todoIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">ToDo App</p>
                    <p id="des">Fully working minimal ToDo List webapp. Made with Django.</p>
                    <a href="https://todo.asiradnan.com/" target="_blank"><button>Use Now!</button></a>
                    <a href="https://github.com/asiradnan/ToDo" target="_blank"><button>Source Code</button></a>
                </div>            
            </div>   
            <div class="project">
                <div class="pic">
                    <img src={tictactoeIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">Tic Tac Toe</p>
                    <p id="des">A game where you can play against your friend or AI!</p>
                    <a href="https://tictactoe.asiradnan.com/" target="_blank"><button>Play Now!</button></a>
                    <a href="https://github.com/asiradnan/Tic-Tac-Toe" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div class="project">
                <div class="pic">
                    <img src={calcIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">Calculator</p>
                    <p id="des">Basic calculator - result of vanilla javascript.</p>
                    <a href="https://calculator.asiradnan.com" target="_blank"><button>Try Now!</button></a>
                    <a href="https://github.com/asiradnan/Calculator" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div class="project">
                <div class="pic">
                    <img src={weatherIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">Weather</p>
                    <p id="des">A weather app with an integrated map.</p>
                    <a href="https://weather.asiradnan.com" target="_blank"><button>Try Now!</button></a>
                    <a href="https://github.com/asiradnan/Weather" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div class="project">
                <div class="pic">
                    <img src={ytIcon}/>
                </div>
                <div class="about">
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