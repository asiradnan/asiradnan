import { Outlet } from "react-router-dom";
import Header from "./Header";
function Skeleton() {
    return ( 
        <>
        <Header/>
        <Outlet></Outlet>
        </>
     );
}

export default Skeleton;