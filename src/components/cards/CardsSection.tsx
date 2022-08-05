import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UrbanArea } from "../../utils/apiData"
import { LoadingWheel } from "../LoadingWheel"
import { CardCity } from "./CardCity"
import "../../styles/sections/cards_section.css"
import {
    getSortingFunctionForUrbanAreasByAlphabetical,
    getSortingFunctionForUrbanAreasByOverallScore,
    getSortingFunctionForUrbanAreasByScoreLabel,
} from "../../utils/helpers"
import {
    searchByOptions,
    possibleScoreLabels,
    possibleContinentOptions,
} from "../../utils/constants"
import { uniqueId } from "underscore"

interface Props {
    data: Array<UrbanArea>
    isLoading: boolean
    searchBy: string
    filterContinent: string
    filterName: string
}

export const CardsSection = ({
    data,
    isLoading,
    searchBy,
    filterContinent,
    filterName,
}: Props) => {
    if (isLoading) {
        return <LoadingWheel />
    }

    const [topStatistic, setTopStatistic] = React.useState<string | undefined>(
        undefined
    )
    const resetTopStatistic = () => setTopStatistic(undefined)
    const updateTopStatistic = () => setTopStatistic(searchBy)

    const [displayData, setDisplayData] = React.useState<UrbanArea[]>([])

    React.useEffect(() => {
        let newData = [...data]

        newData = newData.filter((urbanArea: UrbanArea) => {
            const passContinent =
                filterContinent === possibleContinentOptions[0] ||
                filterContinent === urbanArea.continent
            const passName =
                filterName === "" ||
                urbanArea.fullName
                    .toLowerCase()
                    .includes(filterName.toLowerCase())

            return passContinent && passName
        })
        // SORT URBAN AREAS
        // BY: Score categories
        if (possibleScoreLabels.includes(searchBy)) {
            updateTopStatistic()
            newData.sort(getSortingFunctionForUrbanAreasByScoreLabel(searchBy))
        }
        // BY: Alphabetical
        else if (searchBy === searchByOptions[0]) {
            resetTopStatistic()
            newData.sort(getSortingFunctionForUrbanAreasByAlphabetical())
        }
        // BY: Overall score
        else if (searchBy === searchByOptions[1]) {
            updateTopStatistic()
            newData.sort(getSortingFunctionForUrbanAreasByOverallScore())
        }
        setDisplayData(newData)
    }, [searchBy])

    return (
        <motion.section layout className="cards-section">
            <AnimatePresence>
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
                            <CardCity
                                key={uniqueId("CardCity")}
                                urbanArea={urbanArea}
                                topStatistic={topStatistic}
                            />
                        )
                    }
                })}
            </AnimatePresence>
        </motion.section>
    )
}
