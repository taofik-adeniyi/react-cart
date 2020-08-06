import React from 'react';


function Cart({ total, cartData, menuData, removeFromCart }) {
    return (
        <div id="cart">
            <h2 className="text-center">Cart</h2>
            <div id="cart-area">
                {
                    Object.keys(cartData).map((sku, index) =>(
                        <div className="cart-item" key={index}>
                            <span className="item-text">
                                {menuData[sku].productName} x {cartData[sku]}
                            </span>
                            <span className="item-total">
                                {menuData[sku].price}
                            </span>
                            <button className="remove-button" onClick={() => removeFromCart(sku)} >
                                -
                            </button>
                        </div>
                    ))
                }
                <div id="cart-total">
                    <div className="cart-item">
                        <span className="item-text">total</span>
                        <p className="item-total">
                        ₦<span id="total-amount">{total}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    )
}


export default Cart;
