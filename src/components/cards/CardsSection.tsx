import React from "react"
import { AnimatePresence } from "framer-motion"
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
        let newDisplayData = [...data]

        // FILTER URBAN AREAS
        newDisplayData = newDisplayData.filter((urbanArea: UrbanArea) => {
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
            newDisplayData.sort(
                getSortingFunctionForUrbanAreasByScoreLabel(searchBy)
            )
        }
        // BY: Alphabetical
        else if (searchBy === searchByOptions[0]) {
            resetTopStatistic()
            newDisplayData.sort(getSortingFunctionForUrbanAreasByAlphabetical())
        }
        // BY: Overall score
        else if (searchBy === searchByOptions[1]) {
            updateTopStatistic()
            newDisplayData.sort(getSortingFunctionForUrbanAreasByOverallScore())
        }
        setDisplayData(newDisplayData)
    }, [searchBy, data])

    return (
        <section className="cards-section">
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
                                key={urbanArea.ua_id}
                                urbanArea={urbanArea}
                                topStatistic={topStatistic}
                            />
                        )
                    }
                })}
            </AnimatePresence>
        </section>
    )
}
