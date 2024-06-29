import "./Cp.css"
const helloWorld = require("./pics/hello-world.png")
const idea = require("./pics/idea.png")
const contest = require("./pics/contest.png")
const refresh = require("./pics/refresh.png")
const hiking = require("./pics/hiking.png")
function Cp(){
    return(
        <div id="cpMain">
            <div class="event">
                <div class="firstLine">
                    <img src={helloWorld} class="logo" />
                    <span class="eventName">Printed Hello World!</span>
                </div>
                <p class="time">2022, January</p>
            </div>
            <div class="event">
                <div class="firstLine">
                    <img src={idea}  class="logo" />
                <span class="eventName">Solved first problem</span>
                </div>
                <p class="time">2022, April</p>
            </div>
            <div class="event">
                <div class="firstLine">
                    <img src={contest}  class="logo" />
                    <span class="eventName">First Codeforces contest</span>
                </div>
                <p class="time">2022, September</p>
            </div>
            <div class="event">
                <div class="firstLine">
                    <img src={refresh} class="logo" />
                    <span class="eventName">Third Codeforces contest</span>
                </div>
                <p class="time">2022, December</p>
            </div>
            <div class="event">
                <div class="firstLine">
                    <img src={hiking} class="logo" />
                    <span class="eventName">Became Pupil on Codeforces</span>
                </div>
                <p class="timeLast">2023, June</p>
            </div>
        </div>
    );
}
export default Cp;