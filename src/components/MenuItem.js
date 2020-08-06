import React from 'react';

function MenuItem({productName, price, addToCart, sku}) {
    return (
        // <div class="menu-item">
        //     <span class="menu-text">
        //         Mouse - ₦ 199
        //     </span>
        //     <span class="menu-action">
        //         <button>+</button>
        //     </span>
        // </div>
        <div className="menu-item">
            <span className="menu-text">
            {`${productName} - ₦${price}`}
            {/* Mouse - ₦ 199 */}
            </span>
            <span className="menu-action">
                <button onClick={() => addToCart(sku)}>+</button>
            </span>
        </div>
    );
}


export default MenuItem;