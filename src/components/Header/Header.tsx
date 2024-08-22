import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='header content'>
      <h1 className='main-title'>Notes</h1>
      <nav className='nav'>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/add-note">Add Note</NavLink>
      </nav>
    </header>
  )
}

export default Header