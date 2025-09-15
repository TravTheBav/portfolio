import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function MyBurger({burgerActive, setBurgerActive}) {
    if (burgerActive) {
        return (
            <IoMdClose className='burger' onClick={() => {setBurgerActive(false)}}/>
        )
    }
    else {
        return (
            <GiHamburgerMenu className='burger' onClick={() => {setBurgerActive(true)}}/>
        )
    }
}

export default MyBurger