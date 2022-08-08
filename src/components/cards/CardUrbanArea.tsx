import React from "react"
import { motion } from "framer-motion"
import {
    defaultAnimationChangeInPosition,
    defaultAnimationDurationInSeconds,
} from "../../utils/constants"
import { CardUrbanAreaScores } from "./CardUrbanAreaScores"
import { UrbanArea } from "../../utils/apiData"
import "../../styles/sections/card_city.css"
import { getScoreColour } from "../../utils/helpers"

interface Props {
    urbanArea: UrbanArea
    topStatistic?: string
    showAllScores: boolean
}

export const CardUrbanArea = ({
    urbanArea,
    topStatistic,
    showAllScores,
}: Props) => {
    return (
        <motion.section
            layout
            initial={{ opacity: 0, x: `-${defaultAnimationChangeInPosition}` }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: defaultAnimationChangeInPosition }}
            transition={{ duration: defaultAnimationDurationInSeconds }}
            className="card-city"
        >
            <motion.h3 layout>{urbanArea.fullName}</motion.h3>

            <motion.img layout src={urbanArea.imageWeb} alt={urbanArea.name} />

            <motion.h4 layout>
                Overall Score:&nbsp;
                <span
                    style={{
                        color: getScoreColour(
                            parseFloat(urbanArea.overallScore),
                            100
                        ),
                    }}
                >
                    {urbanArea.overallScore}
                </span>
            </motion.h4>

            <CardUrbanAreaScores
                urbanArea={urbanArea}
                topStatistic={topStatistic}
                showAllScores={showAllScores}
            />

            {/* DANGEROUS SET HTML -------------------------------------------*/}
            {/* Completely trusting the developers of the Teleport API with this one */}
            <motion.div
                layout
                dangerouslySetInnerHTML={{ __html: urbanArea.summary }}
            />
            {/* ------------------------------------------------------------- */}

            <motion.a
                layout
                className="urban-area-learn-more"
                href={urbanArea.cityUrl}
                target="_blank"
                rel="noreferrer"
            >
                Learn more
            </motion.a>
        </motion.section>
    )
}
