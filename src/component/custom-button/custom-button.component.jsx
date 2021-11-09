import React from "react";
import './custom-button.styles.scss'

const CustomButton=({children,isGoogleSignin,inverted,...otherprops})=>(
    <button className={`${inverted ? 'inverted':""}
    ${isGoogleSignin ? "googleSignin" : ""}
     custom-button`} {...otherprops}>
         
        {children}
    </button>
);
export default CustomButton;