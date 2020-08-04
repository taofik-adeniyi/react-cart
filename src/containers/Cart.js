import React from 'react';


function Cart() {
    return (
        <div id="cart">
            <h2 class="text-center">Cart</h2>
            <div id="cart-area">
                <div id="cart-total">
                    <div id="cart-item">
                        <span class="item-text">total</span>
                        <p class="item-total">
                            ₦<span id="total-amount">0</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    );
}


export default Cart;
