import React from "react"
import { AnimateSharedLayout } from "framer-motion"
import { UrbanArea } from "../../utils/apiData"
import { LoadingWheel } from "../LoadingWheel"
import { CardUrbanArea } from "./CardUrbanArea"
import "../../styles/sections/cards_section.css"
import {
    getSortingFunctionForUrbanAreasByAlphabetical,
    getSortingFunctionForUrbanAreasByOverallScore,
    getSortingFunctionForUrbanAreasByScoreLabel,
} from "../../utils/helpers"
import { sortByOptions, possibleContinentOptions } from "../../utils/constants"

interface Props {
    data: Array<UrbanArea>
    isLoading: boolean
    sortBy: string
    filterContinent: string
    filterName: string
    showAllScores: boolean
}

export const CardsSection = ({
    data,
    isLoading,
    sortBy,
    filterContinent,
    filterName,
    showAllScores,
}: Props) => {
    if (isLoading) {
        return <LoadingWheel />
    }

    const [topStatistic, setTopStatistic] = React.useState<string | undefined>(
        undefined
    )
    const resetTopStatistic = () => setTopStatistic(undefined)
    const updateTopStatistic = () => setTopStatistic(sortBy)

    const [displayData, setDisplayData] = React.useState<UrbanArea[]>([...data])

    React.useEffect(() => {
        let newDisplayData = [...data]

        // FILTER URBAN AREAS
        newDisplayData = newDisplayData.filter((urbanArea: UrbanArea) => {
            // BY: Continent
            const passContinent =
                filterContinent === possibleContinentOptions[0] ||
                filterContinent === urbanArea.continent
            // BY: Name (text search)
            const passName =
                filterName === "" ||
                urbanArea.fullName
                    .toLowerCase()
                    .includes(filterName.toLowerCase())

            return passContinent && passName
        })

        // SORT URBAN AREAS
        // BY: Alphabetical
        if (sortBy === sortByOptions[0]) {
            resetTopStatistic()
            newDisplayData.sort(getSortingFunctionForUrbanAreasByAlphabetical())
        }
        // BY: Overall score
        else if (sortBy === sortByOptions[1]) {
            updateTopStatistic()
            newDisplayData.sort(getSortingFunctionForUrbanAreasByOverallScore())
        }
        // BY: Score categories
        else {
            updateTopStatistic()
            newDisplayData.sort(
                getSortingFunctionForUrbanAreasByScoreLabel(sortBy)
            )
        }

        setDisplayData(newDisplayData)
    }, [sortBy, filterContinent, filterName, data])

    return (
        <section className="cards-section">
            <AnimateSharedLayout>
                {displayData.map((urbanArea: UrbanArea) => {
                    // FILTER URBAN AREAS
                    const passContinent =
                        filterContinent === possibleContinentOptions[0] ||
                        filterContinent === urbanArea.continent
                    const passName =
                        filterName === "" ||
                        urbanArea.fullName
                            .toLowerCase()
                            .includes(filterName.toLowerCase())

                    if (passContinent && passName) {
                        return (
                            <CardUrbanArea
                                key={urbanArea.ua_id}
                                urbanArea={urbanArea}
                                topStatistic={topStatistic}
                                showAllScores={showAllScores}
                            />
                        )
                    }
                })}
            </AnimateSharedLayout>
        </section>
    )
}
