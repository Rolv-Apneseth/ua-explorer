import React from "react"
import {
    defaultAnimationChangeInPosition,
    defaultAnimationDurationInSeconds,
} from "../../utils/constants"
import { UrbanArea } from "../../utils/apiData"
import "../../styles/sections/card_city.css"
import { sortByOptions } from "../../utils/constants"
import { motion } from "framer-motion"

interface Props {
    urbanArea: UrbanArea
    topStatistic?: string
}

export const CardCity = ({ urbanArea, topStatistic }: Props) => {
    const getDataToDisplay = () => {
        if (topStatistic === sortByOptions[1]) {
            return <div>{`${topStatistic}: ${urbanArea.overallScore}`}</div>
        }
        return (
            <div>
                {topStatistic &&
                    `${topStatistic}: 
                ${urbanArea.getScoreValueByLabel(topStatistic).score}`}
            </div>
        )
    }

    React.useEffect(() => {}, [topStatistic])

    return (
        <motion.section
            layout
            initial={{ opacity: 0, x: `-${defaultAnimationChangeInPosition}` }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: defaultAnimationChangeInPosition }}
            transition={{ duration: defaultAnimationDurationInSeconds }}
            className="card-city"
        >
            <div>{urbanArea.fullName}</div>

            <img src={urbanArea.imageWeb} alt={urbanArea.name} />

            {getDataToDisplay()}

            {/* Completely trusting the developers of the Teleport API with this one */}
            <div dangerouslySetInnerHTML={{ __html: urbanArea.summary }} />
        </motion.section>
    )
}
