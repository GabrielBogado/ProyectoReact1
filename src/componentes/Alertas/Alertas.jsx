import swal from 'sweetalert'

export function alertOrdenCreada(id) {
    return (
        swal(
            "Gracias por su compra",
            `Su orden se creo correctamente con el numero de orden: ${id}`,
            "success"
            ),
            setTimeout(() =>{
                window.location = "/"
        
    }, 2000)
)
}

export function alertaAgregadoCarrito(nombre){
    return (
        swal(
            {
                text:`SE AGREGO ${nombre} AL CARRITO`,
                icon: "success",
                button:false,
                timer:2500,
            }
        )
    )
}

export function alertaCarritoVacio(){
    return(
        swal(
            {
                text: "SU CARRITO ESTA VACIO",
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