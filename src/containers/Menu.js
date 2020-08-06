import React from 'react';
import MenuItem from '../components/MenuItem'

function Menu({ menuData, addToCart }) {
    return (
        <div id="menu">
            <h2>Menu</h2>
            <div id="menu-area">
                {
                    Object.keys(menuData).map((k, index) => (
                        // <div className="menu-item" key={index}>
                        //     <span className="menu-text">{ `${menuData[k].productName} - ${menuData[k].price}` }</span>
                        //     <span className="menu-action">
                        //         <button onClick={() => addToCart(k)}>+</button>
                        //     </span>
                        // </div>
                        <MenuItem productName={menuData[k].productName} 
                        price={menuData[k].price}
                        addToCart={addToCart}
                        sku={k}
                        key={index}
                        />
                    ))
                }         
            </div>
        </div>
        )
}


export default Menu