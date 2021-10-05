import React from "react";
import { Link } from "react-router-dom";


const Header=()=>{
    return(
        <div className="header-container">
            <Link to='/'>HOME</Link>
            <div>
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}
export default Header;