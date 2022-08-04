import React from "react"
import { UrbanArea } from "../../utils/api"
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
    setData: Function
    isLoading: boolean
    searchBy: string
    filterContinent: string
}

export const CardsSection = ({
    data,
    setData,
    isLoading,
    searchBy,
    filterContinent,
}: Props) => {
    if (isLoading) {
        return <LoadingWheel />
    }

    const [topStatistic, setTopStatistic] = React.useState<string | undefined>(
        undefined
    )
    const resetTopStatistic = () => setTopStatistic(undefined)
    const updateTopStatistic = () => setTopStatistic(searchBy)

    React.useEffect(() => {
        // SORT URBAN AREAS
        let newData = [...data]
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
        setData(newData)
    }, [searchBy, filterContinent])

    return (
        <section className="cards-section">
            {data.map((urbanArea: UrbanArea) => {
                // FILTER URBAN AREAS
                if (
                    filterContinent === possibleContinentOptions[0] ||
                    filterContinent === urbanArea.continent
                ) {
                    return (
                        <CardCity
                            urbanArea={urbanArea}
                            topStatistic={topStatistic}
                        />
                    )
                }
            })}
        </section>
    )
}
