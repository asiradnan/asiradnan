import "./Cp.css"
import Image from "next/image"
import helloWorld from "@/public/pics/hello-world.png"
import idea from "@/public/pics/idea.png"
import contest from "@/public/pics/contest.png"
import refresh from "@/public/pics/refresh.png"
import hiking from "@/public/pics/hiking.png"


export const metadata = {
    title: "Competitive Programming - Asir Adnan",
  };

function Cp(){
    return(
        <div id="cpMain">
            <div className="event">
                <div className="firstLine">
                    <Image src={helloWorld} className="logo" alt="helloWorld" />
                    <span className="eventName">Printed Hello World!</span>
                </div>
                <p className="time">2022, January</p>
            </div>
            <div className="event">
                <div className="firstLine">
                    <Image src={idea}  className="logo" alt="idea" />
                <span className="eventName">Solved first problem</span>
                </div>
                <p className="time">2022, April</p>
            </div>
            <div className="event">
                <div className="firstLine">
                    <Image src={contest}  className="logo" alt="contest" />
                    <span className="eventName">First Codeforces contest</span>
                </div>
                <p className="time">2022, September</p>
            </div>
            <div className="event">
                <div className="firstLine">
                    <Image src={refresh} className="logo" alt="refresh" />
                    <span className="eventName">Third Codeforces contest</span>
                </div>
                <p className="time">2022, December</p>
            </div>
            <div className="event">
                <div className="firstLine">
                    <Image src={hiking} className="logo" alt="hiking" />
                    <span className="eventName">Became Pupil on Codeforces</span>
                </div>
                <p className="timeLast">2023, June</p>
            </div>
        </div>
    );
}
export default Cp;