import React from "react"

interface Props {
    showAllScores: boolean
    setShowAllScores: Function
}

export const HandlerShowAllScores = ({
    showAllScores,
    setShowAllScores,
}: Props) => {
    const onClickShowAllScores = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
        setShowAllScores(!showAllScores)
    }

    return (
        <section>
            <button
                onClick={onClickShowAllScores}
                className={showAllScores ? "pressed" : ""}
            >
                Show All Scores
            </button>
        </section>
    )
}
