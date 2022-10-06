import { Link, useMatch, useResolvedPath } from "react-router-dom"
import DarkMode from "./DarkMode";
export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="wesearch"><span>we</span>search.</Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/add">Add New Place</CustomLink>
            <CustomLink to="/addreview">Leave a Review</CustomLink>
        <DarkMode />
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( { path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}