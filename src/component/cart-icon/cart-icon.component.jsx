import React from "react";
import {ReactComponent as ShoppingIcon} from '../../assets/crown/shopping-bag.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.action";
import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToprops=disptch=>({
toggleCartHidden:()=>disptch(toggleCartHidden())
})
export default connect(null,mapDispatchToprops)(CartIcon);