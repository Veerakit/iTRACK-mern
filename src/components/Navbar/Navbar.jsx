import { Link } from "react-router-dom"; 
import "./Navbar.css";
import itracklogo from "../../images/itrack.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            
            <Link className="" to="/" ><img src={itracklogo} alt="logo" className="logo-object" /></Link>
            <div className="">
                <ul className="menu-item">
                    <li className="link-menu">
                        <Link className="" to="/home" >HOME</Link></li>
                    <li className="link-menu">
                        <Link className="" to="/activities" >ACTIVITY</Link></li>
                    <li className="link-menu">
                        <Link className="" to="/todos" >TO-DOs</Link></li>
                </ul>
            </div>
        </nav>
   );
}

export default Navbar;