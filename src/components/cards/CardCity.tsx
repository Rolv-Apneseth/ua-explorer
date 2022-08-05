import React from "react"
import { UrbanArea } from "../../utils/apiData"
import "../../styles/sections/card_city.css"
import { searchByOptions } from "../../utils/constants"
import { motion } from "framer-motion"

interface Props {
    urbanArea: UrbanArea
    topStatistic?: string
}

export const CardCity = ({ urbanArea, topStatistic }: Props) => {
    const getDataToDisplay = () => {
        if (topStatistic === searchByOptions[1]) {
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
            // initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
