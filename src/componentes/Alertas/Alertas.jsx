import swal from 'sweetalert'

export function alertOrdenCreada() {
return (
    swal(
        "Gracias por su compra",
        "Su orden se creo correctamente",
        "success"
    )
)
}

export function alertaAgregadoCarrito(nombre){
    return (
        swal(
            {
                text:`Se agrego ${nombre} al carrito `,
                icon: "success",
                button:false,
                timer:3000,
            }
        )
    )
}

export function alertaCarritoVacio(){
    return(
        swal(
            {
                text: "Su carrito se vacio con exito",
                icon: "success",
                timer:3000,
            }
        )
    )
}