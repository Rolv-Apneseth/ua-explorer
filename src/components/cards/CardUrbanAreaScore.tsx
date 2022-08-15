import React from "react"
import { UrbanArea, UrbanAreaScore } from "../../utils/apiData"
import { getScoreColour } from "../../utils/helpers"

interface Props {
    urbanArea: UrbanArea
    label: string
    scoreObject: UrbanAreaScore
}

export const CardUrbanAreaScore = ({
    urbanArea,
    label,
    scoreObject,
}: Props) => {
    const scoreFloat = parseFloat(scoreObject.score)
    const scoreMax = 10

    return (
        <section
            className="urban-area-score"
            key={`${urbanArea.ua_id}-CardUrbanAreaScore-${label}`}
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
