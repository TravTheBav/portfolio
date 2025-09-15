import { Link } from "react-router"
import styles from './MobileNav.module.css'

function MobileNav({burgerActive, setBurgerActive}) {

    if (burgerActive) {
        return (
            <div className={`${styles.mobile_nav}`}>
                <nav>
                    <Link to='/' onClick={() => {setBurgerActive(false)}}>Home</Link>
                    <Link to='/projects' onClick={() => {setBurgerActive(false)}}>Projects</Link>
                    <Link to='/contact' onClick={() => {setBurgerActive(false)}}>Contact</Link>
                </nav>
            </div>
        )
    }

    return <></>
}

export default MobileNav