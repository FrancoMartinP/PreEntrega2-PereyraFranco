import { useState } from "react"

const ItemCount = ({stock, agregarAlCarrito}) => {
    const [count, setCount] = useState(1)

    const aumentar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const disminuir = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
  return (
    <div className="conteo">
        <button onClick={disminuir}>-</button>
        <p>{count}</p>
        <button onClick={aumentar}>+</button>

        <button onClick={ () => agregarAlCarrito(count)}>Agregar</button>
        
    
    </div>
  )
}

export default ItemCount