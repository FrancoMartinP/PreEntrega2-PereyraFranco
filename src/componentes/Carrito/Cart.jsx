import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
const { carrito, precioTotal, borrarProducto, vaciarCarrito} = useContext(CartContext)

if(carrito.length === 0) {
    return(
        <div className="iniciocarrito">
            <h2>El Carrito esta vacio 😒</h2>
            <Link className="inicioc" to="/">Ir a Comprar</Link>
        </div>
    );
}

  return (
    <div className="detallecarrito">
        {
            carrito.map((productoCarrito) => (
                <ul style={{flexDirection: "column"}} key={productoCarrito.id}>
                    <li style={{display:"flex", justifyContent:"space-around"}}>
                        <img width={80}src={productoCarrito.imagen} alt="" />
                        <p>{productoCarrito.nombre}</p>
                        <p> Cantidad: {productoCarrito.cantidad}</p>
                        <p> Precio: ${productoCarrito.precio}</p>
                        <p>$ {productoCarrito.precio * productoCarrito.cantidad}</p>
                        <button className="borrar" onClick={() => borrarProducto(productoCarrito.id)}>Eliminar</button>
                    </li>
                </ul>
                
            ))
        }
        <div className="totalidad">
            <h2>Precio Total: ${precioTotal()}</h2>
            <Link className="final" onClick={vaciarCarrito}>Vaciar Carrito</Link>
            <Link className="final" to="/checkout">Finalizar Compra</Link> 
        </div>
          
    </div>
  )
}

export default Cart