
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>

        <div className='cabecera' >
          <Link to="/">Inicio</Link>
          <Link to="/categoria/aventura">Aventura</Link>
          <Link to="/categoria/magia">Magia</Link>
          <Link to="/categoria/fantasia">Fantasia</Link>
        </div>

          

    </nav>
  )
}

export default NavBar