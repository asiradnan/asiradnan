import Home from "./Home";
import Blogs from "./Blogs"
import About from "./About";
import Cp from "./Cp";
import Projects from "./Projects";
import Skills from "./Skills";
import { Route, Routes } from "react-router-dom";
import Skeleton from "./Skeleton";
function App() {
  return (
  
  <Routes>
    <Route path="/" element={<Skeleton/> }>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="cp" element={<Cp/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="skills" element={<Skills/>}/>
      </Route>
  </Routes>
  
  );
}

export default App;
