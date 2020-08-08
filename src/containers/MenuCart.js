import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import Cart from './Cart';

function MenuCart() {
    const [menuData, setMenuData] = useState({
        "23121153": {
            productName: "Mouse",
            price: 1500
        },
        "1234678": {
            productName: "keyboard",
            price: 3500
        },
        "7891234": {
            productName: "AMD CPU",
            price: 8000
        }
    })

    const [cartData, setCartData] = useState({})
    
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let total = 0
        Object.keys(cartData).map((sku, _) => {
            let qty = cartData[sku]
            let price = menuData[sku].price
            total += qty * price
        })
        setCartTotal(total)
    }, [cartData])

    const addToCart = sku => {
        let newCart = { ...cartData } 

        if (sku in cartData) {
            newCart[sku] += 1
        }else {
            newCart[sku] = 1
        }

        setCartData(newCart)
        
    }

    const removeFromCart = sku => {
        let newCart = {...cartData}

        if (sku in cartData) {
            newCart[sku] -= 1

            if (newCart[sku] < 1) delete newCart[sku]
        }

        setCartData(newCart)
    }

    return (
    <div id="menu-cart">
        <Menu menuData={menuData} addToCart={addToCart} />
        <Cart 
        total={cartTotal} 
        menuData={menuData} 
        cartData={cartData} 
        removeFromCart={removeFromCart} 
        />
    </div>
    )
}


export default MenuCart;