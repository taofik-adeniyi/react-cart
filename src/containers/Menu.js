import React from 'react';


function Menu({ menuData, addToCart }) {
    return (
        <div id="menu">
            <h2>Menu</h2>
            <div id="menu-area">
                {
                    Object.keys(menuData).map((k, index) => (
                        <div className="menu-item" key={index}>
                            <span className="menu-text">{ `${menuData[k].productName} - ${menuData[k].price}` }</span>
                            <span className="menu-action">
                                <button onClick={() => addToCart(k)}>+</button>
                            </span>
                        </div>
                    ))
                }         
            </div>
        </div>
        )
}


export default Menu