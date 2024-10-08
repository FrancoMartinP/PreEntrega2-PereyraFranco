import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ( {producto} ) => {
  const {agregarProducto} = useContext(CartContext)
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...producto, cantidad: contador}
    agregarProducto(productoCarrito)
    setMostrarItemCount(false)
  }
  return (
    <div className="detallecard">
        <div>
            <img src={producto.imagen} width={200} />
            <h1>{producto.nombre}</h1>
        </div>
        <div>
            <p>Sinopsis: {producto.descripcion}</p>
            <p><b>Precio: ${producto.precio}</b> </p>
            {mostrarItemCount ? (<ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>) :
            (<Link className="agregar" to="/cart">Ir al Carrito</Link>)}
        </div>
       
    </div>
  )
}

export default ItemDetail