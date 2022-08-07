import React from "react"
import { UrbanArea, UrbanAreaScore } from "../../utils/apiData"
import { possibleScoreLabels } from "../../utils/constants"
import { sortScoreLabelsArray } from "../../utils/helpers"
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

    return (
        <article className="urban-area-scores">
            {topStatistic && possibleScoreLabels.includes(topStatistic) && (
                <CardUrbanAreaScore
                    urbanArea={urbanArea}
                    label={topStatistic}
                    scoreObject={urbanArea.getScoreValueByLabel(topStatistic)}
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
                                urbanArea={urbanArea}
                                label={label}
                                scoreObject={scoreObject}
                            />
                        )
                    }
                )}
        </article>
    )
}
