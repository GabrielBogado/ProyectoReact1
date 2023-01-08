import {createContext, useState} from "react"
import { alertaCarritoVacio } from "../componentes/Alertas/Alertas"

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
        return(
            setCart([]),
            alertaCarritoVacio()
            )
    }

    function eliminarItem(idToRemove){
        const newCart = cart.filter((itemEnCart) => itemEnCart.id !== idToRemove)
        setCart(newCart)
    }

    function eliminarUnidad(idToRemove){
        let indexItemInCart = cart.findIndex(itemInCart => itemInCart.id === idToRemove)
        const newCart = [...cart]
        if (indexItemInCart !== -1)
        {
            if(newCart[indexItemInCart].count > 1){
            newCart[indexItemInCart].count -= 1
            setCart(newCart)
        } else{
            eliminarItem(idToRemove)
        }
        
    }

    }

    function totalCarrito(){
        return (cart.reduce((acc, elemento)=> acc + elemento.count * elemento.precio, 0))
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
            totalCarrito,
            eliminarUnidad
            }}>
            {props.children}
        </Provider>
    )
}

export {cartContexto, CartContextProvider}