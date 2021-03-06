import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import './header.styles.scss'
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown";

const Header=({currentUser,hidden})=>{
    return(
        <div className="header">
            <Link className="logo-container" to='/'>HOME</Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {currentUser ? (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
                :(<Link className="option" to="/signin">SIGN IN</Link>)}
                <CartIcon />
            </div>
            {hidden ? null : <CardDropdown/>}
        </div>
    )
}

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);