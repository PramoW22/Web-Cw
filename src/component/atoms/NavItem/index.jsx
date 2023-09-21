import { Link } from "react-router-dom";

const NavItem=({name,path})=>{
    return(
        <li className="nav-item">
            <Link className="nav-link" to={path}>
                {name}
                </Link>
    
       </li>
    )
}
export default NavItem;