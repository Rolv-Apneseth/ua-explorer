import React from "react"

interface Props {
    isLoading: boolean
    showAllScores: boolean
    setShowAllScores: Function
}

export const HandlerShowAllScores = ({
    isLoading,
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
                disabled={isLoading}
                onClick={onClickShowAllScores}
                className={`${showAllScores ? "pressed" : ""} ${
                    isLoading ? "disabled" : ""
                }`}
            >
                Show All Scores
            </button>
        </section>
    )
}
