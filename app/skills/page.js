import "./Skills.css"

export const metadata = {
    title: "Skills - Asir Adnan",
  };

export default function Skills(){
    return (
        <div className="skillsMain">
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Programming</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Python</td><td>7/10</td>
                </tr>
                <tr>
                    <td>C++</td><td>7/10</td>
                </tr>
                <tr>
                    <td>Javascript</td><td>6/10</td>
                </tr>
                <tr>
                    <td>Kotlin</td><td>3/10</td>
                </tr>
            </tbody>
        </table>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Web Technologies </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Django</td><td>7/10</td>
                </tr>
                <tr>
                    <td>Django Rest Framework</td><td>5/10</td>
                </tr>
                <tr>
                    <td>Database</td><td>7/10</td>
                </tr>
                <tr>
                    <td>React JS</td><td>6/10</td>
                </tr>
                <tr>
                    <td>Javascript</td><td>6/10</td>
                </tr>
                <tr>
                    <td>HTML</td><td>8/10</td>
                </tr>
                <tr>
                    <td>CSS</td><td>7/10</td>
                </tr>
                <tr>
                    <td>Bootstrap</td><td>5/10</td>
                </tr>
                
            </tbody>
        </table>
    {/* <div class='skill'>Programming 
        <p> */}
            {/* <span class="#best">Python</span>,
            <span class="#best">C/C++</span>, 
            <span class="#best">Javascript</span>, 
            <span class="#better">Java</span>,
            <span class="#good">Kotlin</span> */}
            {/* Python, C/C++, Javascript, Java, Kotlin
        </p>
    </div>
    <div class='skill'>Web Technologies 
        <p> */}
            {/* <span class="#best">HTML</span>,
            <span class="#better">CSS</span>,
            <span class="#better">Javascript</span>,
            <span class="#best">Django</span>,
            <span class="#better">MySQL</span>,
            <span class="#good">Node JS</span>,
            <span class="#good">JSON/API</span> */}
            {/* HTML, CSS, Javascript, Django, MySQL, Node JS, JSON/API
        </p>
    </div> */}
</div>
    )
}