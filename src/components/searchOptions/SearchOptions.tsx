import React from "react"
import "../../styles/sections/card_city.css"
import { HandlerFilterContinent } from "./HandlerFilterContinent"
import { HandlerFilterName } from "./HandlerFilterName"
import { HandlerMaxResultsPerPage } from "./HandlerMaxResultsPerPage"
import { HandlerPageNumber } from "./HandlerPageNumber"
import { HandlerShowAllScores } from "./HandlerShowAllScores"
import { HandlerSortBy } from "./HandlerSortBy"

interface Props {
    isLoading: boolean
    sortBy: string
    setSortBy: Function
    filterContinent: string
    setFilterContinent: Function
    filterName: string
    setFilterName: Function
    showAllScores: boolean
    setShowAllScores: Function
    currentPageNumber: number
    setCurrentPageNumber: Function
    maxPossiblePages: number
    maxResultsPerPage: string
    setMaxResultsPerPage: Function
}

export const SearchOptions = ({
    isLoading,
    sortBy,
    setSortBy,
    filterContinent,
    setFilterContinent,
    filterName,
    setFilterName,
    showAllScores,
    setShowAllScores,
    currentPageNumber,
    setCurrentPageNumber,
    maxPossiblePages,
    maxResultsPerPage,
    setMaxResultsPerPage,
}: Props) => {
    // Reset page number when any of the filters/sorts change
    React.useEffect(() => {
        setCurrentPageNumber(0)
    }, [filterName, filterContinent, sortBy, maxResultsPerPage])

    return (
        <form>
            <fieldset disabled={isLoading}>
                <HandlerSortBy sortBy={sortBy} setSortBy={setSortBy} />

                <HandlerFilterContinent
                    filterContinent={filterContinent}
                    setFilterContinent={setFilterContinent}
                />

                <HandlerFilterName
                    filterName={filterName}
                    setFilterName={setFilterName}
                />

                <HandlerMaxResultsPerPage
                    maxResultsPerPage={maxResultsPerPage}
                    setMaxResultsPerPage={setMaxResultsPerPage}
                />

                <HandlerPageNumber
                    currentPageNumber={currentPageNumber}
                    setCurrentPageNumber={setCurrentPageNumber}
                    maxPossiblePages={maxPossiblePages}
                />

                <HandlerShowAllScores
                    showAllScores={showAllScores}
                    setShowAllScores={setShowAllScores}
                />
            </fieldset>
        </form>
    )
}
