import {createContext, useState} from "react"

const cartContexto = createContext({cart: []})

const Provider = cartContexto.Provider



function CartContextProvider(props){
    const [cart, setCart] = useState ([])

    function addToCart(item, count){
        let indexItemInCart = cart.findIndex(itemInCart => itemInCart.id === item.id)
        const newCart = [...cart]
        if (indexItemInCart !== -1)
        {
            newCart[indexItemInCart].count += count
            setCart(newCart)
        }
        else{
            newCart.push({...item, count:count})
            setCart(newCart)
        }
        /* console.log(item, count) */
        
    }


    function contenidoCart(){
        return(cart)
    }


    function getQuantityCart(){
        return(cart.length)
    }
    return(
        <Provider value={{
            cart,
            getQuantityCart,
            addToCart,
            contenidoCart
            }}>
            {props.children}
        </Provider>
    )
}

export {cartContexto, CartContextProvider}