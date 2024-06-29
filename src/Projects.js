import "./Projects.css"
const todoIcon = require("./pics/todo.png")
const tictactoeIcon = require("./pics/tictactoe.png")
const calcIcon = require("./pics/calc.png")
const weatherIcon = require("./pics/weather.jpg")
const ytIcon = require("./pics/yt.jpeg")
function Projects(){
    return(
        <>
        <h1>Web Projects</h1>
        <div className="projectsMain">
            <div class="project">
                <div class="pic">
                    <img src={todoIcon}/>
                </div>
                <div class="about">
                    <p id="p_head">ToDo App</p>
                    <p id="des">Fully working minimal ToDo List webapp. Made with Django.</p>
                    <a href="https://todobyasir.vercel.app/" target="_blank"><button>Use Now!</button></a>
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
                    <a href="https://asiradnan.github.io/Tic-Tac-Toe/" target="_blank"><button>Play Now!</button></a>
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
                    <a href="https://asiradnan.github.io/Calculator/" target="_blank"><button>Try Now!</button></a>
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
                    <a href="https://asiradnan.github.io/Weather/" target="_blank"><button>Try Now!</button></a>
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