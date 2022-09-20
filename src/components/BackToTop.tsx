import React from "react"
import { debounce } from "underscore"

interface Props {
    hidden: boolean
}

const BackToTop = ({ hidden }: Props) => {
    const scrollToTop = debounce(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, 50)

    return (
        <button
            onClick={scrollToTop}
            className={`back-to-top ${hidden && "hidden"}`}
        >
            <i className="icon-move-up" />
        </button>
    )
}

export default BackToTop
