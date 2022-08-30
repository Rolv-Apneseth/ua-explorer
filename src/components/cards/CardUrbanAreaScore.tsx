import React from "react"
import { motion } from "framer-motion"
import { UrbanAreaScore } from "../../utils/apiData"
import { getScoreColour } from "../../utils/helpers"

interface Props {
    label: string
    scoreObject: UrbanAreaScore
    isTopStatistic: boolean
}

export const CardUrbanAreaScore = ({
    label,
    scoreObject,
    isTopStatistic,
}: Props) => {
    const scoreFloat = parseFloat(scoreObject.score)
    const scoreMax = 10

    const style = {
        // Variable used to make score progress bar
        "--react-score-percentage": `${scoreFloat * scoreMax}%`,
        // Colour for score i.e. green = good, red = bad
        "--react-score-clr": getScoreColour(scoreFloat, scoreMax),
    }
    const className = "urban-area-score"
    const innerContent = (
        <>
            <p className="urban-area-score-label">{label}</p>
            <p className="urban-area-score-number">{scoreObject.score}</p>
        </>
    )

    // Only top statistic is turned into a motion component for performance
    // It is necessary to have layout="position" so that the text does not get stretched
    return isTopStatistic ? (
        <motion.section layout="position" className={className} style={style}>
            {innerContent}
        </motion.section>
    ) : (
        <section className={className} style={style}>
            {innerContent}
        </section>
    )
}
