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

    return (
        <section
            key={`${urbanArea.ua_id}-CardUrbanAreaScore-${label}`}
            style={{
                // Variables used to make score progress bar
                "--react-clr-bg": scoreObject.color,
                "--react-score-percentage": `${scoreFloat * 10}%`,
            }}
        >
            <p>{label}</p>
            <p style={{ color: getScoreColour(scoreFloat, 10) }}>
                {scoreObject.score}
            </p>
        </section>
    )
}
