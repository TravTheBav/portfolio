import styles from './NavBar.module.css'
import { useNavigate } from 'react-router'

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav>
            <button onClick={() => { navigate('/') }}>Home</button>
            <button onClick={() => { navigate('/projects') }}>Projects</button>
            <button onClick={() => { navigate('/contact') }}>Contact</button>
        </nav>
    )
}

export default NavBar