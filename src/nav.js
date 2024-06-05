import {Link} from "react-router-dom";
export default function Nav(){

    return(
        <nav>
            <div>
                Nav bar
            </div>
            {/* <BrowserRouter>
            <Routes> */} 
            <ul>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/service"> Sevice </Link>
                <Link to="/contact"> Contact</Link>
                <Link to="/switchimage"> Switchimage</Link>
            </ul>
            {/* </BrowserRouter>
            </Routes> */}
        </nav>
    )
}