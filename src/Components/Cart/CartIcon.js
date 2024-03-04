import React from 'react';
import {Fragment} from 'react'
import CartLogo from '../../assets/icons8-cart-30.png'

import classes from './CartIcon'
const CartIcon =()=>{
    return <Fragment>
        <img className={classes.icon}
        src={CartLogo} alt="Cart Svg" />
    </Fragment>
}
export default CartIcon;