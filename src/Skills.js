import "./Skills.css"
function Skills(){
    return (
        <div className="skillsMain">
        <div class='skill'>Programming 
            <p>
                {/* <span class="#best">Python</span>,
                <span class="#best">C/C++</span>, 
                <span class="#best">Javascript</span>, 
                <span class="#better">Java</span>,
                <span class="#good">Kotlin</span> */}
                Python, C/C++, Javascript, Java, Kotlin
            </p>
        </div>
        <div class='skill'>Web Technologies 
            <p>
                {/* <span class="#best">HTML</span>,
                <span class="#better">CSS</span>,
                <span class="#better">Javascript</span>,
                <span class="#best">Django</span>,
                <span class="#better">MySQL</span>,
                <span class="#good">Node JS</span>,
                <span class="#good">JSON/API</span> */}
                HTML, CSS, Javascript, Django, MySQL, Node JS, JSON/API
            </p>
        </div>
    </div>
    )
}
export default Skills