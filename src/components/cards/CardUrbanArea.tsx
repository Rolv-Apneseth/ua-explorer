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
        <motion.article
            layout
            initial={{ opacity: 0, x: `-${defaultAnimationChangeInPosition}` }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: defaultAnimationChangeInPosition }}
            transition={{ duration: defaultAnimationDurationInSeconds }}
            className="card-city"
        >
            <section className="urban-area-main">
                <motion.h3 layout>{urbanArea.fullName}</motion.h3>

                <motion.img
                    layout
                    src={urbanArea.imageWeb}
                    alt={urbanArea.name}
                />

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
                <motion.div
                    layout
                    dangerouslySetInnerHTML={{ __html: urbanArea.summary }}
                />
            </section>

            {/* DANGEROUS SET HTML -------------------------------------------*/}
            {/* Completely trusting the developers of the Teleport API with this one */}
            {/* ------------------------------------------------------------- */}

            <section className="urban-area-buttons">
                <motion.a
                    layout
                    className="urban-area-button"
                    href={urbanArea.cityUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Teleport
                </motion.a>
                <motion.a
                    layout
                    className="urban-area-button"
                    href={`https://en.wikipedia.org/wiki/${urbanArea.name}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Wikipedia
                </motion.a>
            </section>
        </motion.article>
    )
}
