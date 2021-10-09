import React from "react";
import './custom-button.styles.scss'

const CustomButton=({children,isGoogleSignin,...otherprops})=>(
    <button className={`${isGoogleSignin ? "googleSignin" : ""} custom-button`} {...otherprops}>
        {children}
    </button>
);
export default CustomButton;