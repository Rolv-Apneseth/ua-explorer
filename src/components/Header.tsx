import { Link } from "gatsby"
import React from "react"

import ThemeToggle from "./themeToggle/ThemeToggle"

interface Props {
    setActive: Function
    active: boolean
    atStartingPosition: boolean
    scrollingUp: boolean
    isDarkMode: boolean
    setIsDarkMode: Function
    setTheme: Function
}

const Header: React.FC<Props> = props => {
    const deactivate = () => {
        props.setActive(false)
    }

    return (
        <header
            className={`header${props.active ? " active" : ""}${
                props.scrollingUp ? " appear" : ""
            }${props.atStartingPosition ? " initial-state" : ""}`}
        >
            <nav>
                <ul>
                    <li>
                        <Link onClick={deactivate} to="/">
                            Home
                        </Link>
                    </li>
                    {/* <li> */}
                    {/*     <Link onClick={deactivate} to="/#contact"> */}
                    {/*         Contact */}
                    {/*     </Link> */}
                    {/* </li> */}
                    <li>
                        <a
                            onClick={deactivate}
                            href="https://developers.teleport.org/api/"
                            target="_blank"
                            rel="noopener"
                        >
                            API
                        </a>
                    </li>
                    <li>
                        <ThemeToggle
                            isDarkMode={props.isDarkMode}
                            setIsDarkMode={props.setIsDarkMode}
                            setTheme={props.setTheme}
                        />
                    </li>
                </ul>
            </nav>

            <button
                className="topbar-toggle"
                aria-label="Navbar visibility toggle (hamburger menu)"
                onClick={() => props.setActive(!props.active)}
            >
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
        </header>
    )
}

export default Header
