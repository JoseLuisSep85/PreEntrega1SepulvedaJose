import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import cartItem from '../Car' 
import { Link } from "react-router-dom"

const cart = () => {
    const {cart, clearCart, totalCantidad, total} = useContext(CartContext)

    if ( totalCantidad === 0) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )

    }

    return (
        <div>
            { cart.map(p => <cartItem key={p.id}{...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} className="boton" >Limpiar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}