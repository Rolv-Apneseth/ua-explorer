import React from "react"
import { motion } from "framer-motion"
import { UrbanArea, UrbanAreaScore } from "../../utils/apiData"
import { possibleScoreLabels } from "../../utils/constants"
import { getJointStringForUID, sortScoreLabelsArray } from "../../utils/helpers"
import { CardUrbanAreaScore } from "./CardUrbanAreaScore"

interface Props {
    urbanArea: UrbanArea
    topStatistic?: string
    showAllScores: boolean
}

export const CardUrbanAreaScores = ({
    urbanArea,
    topStatistic,
    showAllScores,
}: Props) => {
    const scoreLabelsArray = Object.entries(urbanArea.scoreLabels).sort(
        sortScoreLabelsArray
    )

    const getKey = (ua_id: string, scoreLabel: string) =>
        getJointStringForUID(ua_id, "CardUrbanAreaScore", scoreLabel)

    return (
        <motion.article layout className="urban-area-scores">
            {topStatistic && possibleScoreLabels.includes(topStatistic) && (
                <CardUrbanAreaScore
                    key={getKey(urbanArea.ua_id, topStatistic)}
                    label={topStatistic}
                    scoreObject={urbanArea.getScoreValueByLabel(topStatistic)}
                    isTopStatistic={true}
                />
            )}

            {showAllScores &&
                scoreLabelsArray.map(
                    (scoreArray: Array<string | UrbanAreaScore>) => {
                        if (
                            typeof scoreArray[0] !== "string" ||
                            typeof scoreArray[1] !== "object" ||
                            // Score for topStatistic already displayed above
                            scoreArray[0] == topStatistic
                        ) {
                            return
                        }

                        const label: string = scoreArray[0]
                        const scoreObject: UrbanAreaScore = scoreArray[1]

                        return (
                            <CardUrbanAreaScore
                                key={getKey(urbanArea.ua_id, label)}
                                label={label}
                                scoreObject={scoreObject}
                                isTopStatistic={false}
                            />
                        )
                    }
                )}
        </motion.article>
    )
}
