import React from "react"
import { throttle } from "underscore"

import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"

import "../styles/global.css"

interface Props {
    children?: React.ReactNode
}

const Layout: React.FC<Props> = props => {
    const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches

    const [isDarkMode, setIsDarkMode] = React.useState(!prefersLight)
    const [topbarActive, setTopbarActive] = React.useState(false)
    const [scrollingUp, setScrollingUp] = React.useState(true)
    const [atStartingPosition, setAtStartingPosition] = React.useState(true)

    // Set data-theme on the body element
    const setTheme = () => {
        const bodyElement = document.querySelector("body")
        bodyElement?.setAttribute("data-theme", isDarkMode ? "dark" : "light")
    }

    React.useEffect(() => {
        // Initial setting of theme
        setTheme()

        // Navbar appears as user scrolls up -------------------------
        let previousPosition = document.documentElement.scrollTop

        window.onscroll = throttle(() => {
            let position = document.documentElement.scrollTop

            setScrollingUp(position <= previousPosition)
            setAtStartingPosition(position === 0)

            previousPosition = position
        }, 50)
    }, [])

    return (
        <>
            <Head />

            <Header
                active={topbarActive}
                setActive={setTopbarActive}
                scrollingUp={scrollingUp}
                atStartingPosition={atStartingPosition}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                setTheme={setTheme}
            />

            <main className={topbarActive ? "blur" : ""}>{props.children}</main>

            <Footer />
        </>
    )
}

export default Layout
