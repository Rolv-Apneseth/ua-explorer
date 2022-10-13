import React from "react"
import { MotionConfig } from "framer-motion"
import { throttle } from "underscore"

import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

import "../styles/global.css"

interface Props {
    pageHeading: string
    children?: React.ReactNode
}

const Layout: React.FC<Props> = props => {
    let prefersLight = false

    if (typeof window !== "undefined") {
        prefersLight = window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches
    }

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
        <MotionConfig reducedMotion="user">
            <Head />

            <Header
                pageHeading={props.pageHeading}
                active={topbarActive}
                setActive={setTopbarActive}
                scrollingUp={scrollingUp}
                atStartingPosition={atStartingPosition}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                setTheme={setTheme}
            />

            <div className={`page-container ${topbarActive && "blur"}`}>
                <BackToTop hidden={atStartingPosition} />

                <main>{props.children}</main>

                <Footer />
            </div>
        </MotionConfig>
    )
}

export default Layout
