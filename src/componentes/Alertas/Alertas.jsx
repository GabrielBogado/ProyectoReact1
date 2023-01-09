import swal from 'sweetalert'

export function alertOrdenCreada(id) {
return (
    swal(
        "Gracias por su compra",
        `Su orden se creo correctamente con el numero de orden: ${id}`,
        "success"
    ),
    setTimeout(() => {
        alertaCarritoVacio()
    }, 2000)
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

export function alertaErrorVacio(){
    return(
        swal(
            {
                text:"ERROR, su carrito esta vacio",
                icon:"error",
                timer: 3000,
            }
        )
    )
}