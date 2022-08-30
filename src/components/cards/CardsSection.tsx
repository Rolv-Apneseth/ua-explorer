import React from "react"
import { LayoutGroup } from "framer-motion"
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
    isSortOrderAscending: boolean
    filterContinent: string
    filterName: string
    showAllScores: boolean
    currentPageNumber: number
    setMaxPossiblePages: Function
    maxResultsPerPage: string
}

export const CardsSection = ({
    data,
    isLoading,
    sortBy,
    isSortOrderAscending,
    filterContinent,
    filterName,
    showAllScores,
    currentPageNumber,
    setMaxPossiblePages,
    maxResultsPerPage,
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

        // ASCENDING/DESCENDING ORDER
        if (isSortOrderAscending) {
            newDisplayData.reverse()
        }

        setMaxPossiblePages(
            Math.ceil(newDisplayData.length / parseInt(maxResultsPerPage))
        )
        setDisplayData(newDisplayData)
    }, [
        sortBy,
        filterContinent,
        filterName,
        data,
        maxResultsPerPage,
        isSortOrderAscending,
    ])

    const getSliceForCurrentlyDisplayedData = () => {
        const totalUrbanAreasAvailable = displayData.length
        const maxResultsPerPageInt = parseInt(maxResultsPerPage)
        const toShow =
            maxResultsPerPageInt <= totalUrbanAreasAvailable
                ? maxResultsPerPageInt
                : totalUrbanAreasAvailable

        const start = toShow * currentPageNumber
        const end = toShow + start

        return displayData.slice(start, end)
    }

    return (
        <section className="cards-section">
            <LayoutGroup>
                {getSliceForCurrentlyDisplayedData().map(
                    (urbanArea: UrbanArea) => {
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
                    }
                )}
            </LayoutGroup>
        </section>
    )
}
