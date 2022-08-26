import React from "react"
import { UrbanAreaScore } from "../../utils/apiData"
import { getScoreColour } from "../../utils/helpers"

interface Props {
    label: string
    scoreObject: UrbanAreaScore
}

export const CardUrbanAreaScore = ({ label, scoreObject }: Props) => {
    const scoreFloat = parseFloat(scoreObject.score)
    const scoreMax = 10

    return (
        <section
            className="urban-area-score"
            style={{
                // Variable used to make score progress bar
                "--react-score-percentage": `${scoreFloat * scoreMax}%`,
                // Colour for score i.e. green = good, red = bad
                "--react-score-clr": getScoreColour(scoreFloat, scoreMax),
            }}
        >
            <p className="urban-area-score-label">{label}</p>
            <p className="urban-area-score-number">{scoreObject.score}</p>
        </section>
    )
}
