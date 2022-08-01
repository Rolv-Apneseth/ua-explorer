import React from "react"
import DarkModeToggle from "react-dark-mode-toggle"

interface Props {
    isDarkMode: boolean
    setIsDarkMode: Function
    setTheme: Function
}

const ThemeToggle: React.FC<Props> = props => {
    const handleChange = () => {
        props.setIsDarkMode(!props.isDarkMode, props.setTheme)
    }

    React.useEffect(() => {
        props.setTheme()
    }, [props.isDarkMode])

    return (
        <DarkModeToggle
            className="theme-toggle"
            checked={props.isDarkMode}
            onChange={handleChange}
            size={60}
            speed={2}
        />
    )
}

export default ThemeToggle
