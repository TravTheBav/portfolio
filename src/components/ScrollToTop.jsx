{/**
    Scrolls the page to the top whenever the user clicks on a navigational anchor.
    from -> https://v5.reactrouter.com/web/guides/scroll-restoration    
*/}

import { useEffect } from "react"
import { useLocation } from "react-router"

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop