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
        
    }


    function contenidoCart(){
        return(cart)
    }

    function eliminarCart(){
        return(setCart([]))
    }

    function eliminarItem(idToRemove){
        const newCart = cart.filter((itemEnCart) => itemEnCart.id !== idToRemove)
        setCart(newCart)
    }

    function totalCarrito(){
        return cart.reduce((prev, ac)=> prev + ac.count * ac.price, 0)
    }


    function getQuantityCart(){
        return(cart.length)
    }
    return(
        <Provider value={{
            cart,
            getQuantityCart,
            addToCart,
            contenidoCart,
            eliminarCart,
            eliminarItem,
            totalCarrito
            }}>
            {props.children}
        </Provider>
    )
}

export {cartContexto, CartContextProvider}