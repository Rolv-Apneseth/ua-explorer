import React from "react"
import "../../styles/sections/search_options.css"
import { HandlerFilterContinent } from "./HandlerFilterContinent"
import { HandlerFilterName } from "./HandlerFilterName"
import { HandlerShowAllScores } from "./HandlerShowAllScores"
import { HandlerSortBy } from "./HandlerSortBy"
import { HandlerSortOrder } from "./HandlerSortOrder"
import { PageOptions } from "./PageOptions"

interface Props {
    isLoading: boolean
    sortBy: string
    setSortBy: Function
    isSortOrderAscending: boolean
    setIsSortOrderAscending: Function
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
    isSortOrderAscending,
    setIsSortOrderAscending,
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
    }, [
        filterName,
        filterContinent,
        sortBy,
        maxResultsPerPage,
        isSortOrderAscending,
    ])

    return (
        <form className={`search-options ${isLoading ? "disabled" : ""}`}>
            <fieldset className="base-options" disabled={isLoading}>
                <HandlerFilterName
                    filterName={filterName}
                    setFilterName={setFilterName}
                />

                <HandlerFilterContinent
                    filterContinent={filterContinent}
                    setFilterContinent={setFilterContinent}
                />

                <HandlerSortBy sortBy={sortBy} setSortBy={setSortBy} />

                <HandlerSortOrder
                    isLoading={isLoading}
                    isSortOrderAscending={isSortOrderAscending}
                    setIsSortOrderAscending={setIsSortOrderAscending}
                />
            </fieldset>

            <fieldset className="other-options" disabled={isLoading}>
                <HandlerShowAllScores
                    isLoading={isLoading}
                    showAllScores={showAllScores}
                    setShowAllScores={setShowAllScores}
                />
            </fieldset>

            <PageOptions
                isLoading={isLoading}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                maxPossiblePages={maxPossiblePages}
                maxResultsPerPage={maxResultsPerPage}
                setMaxResultsPerPage={setMaxResultsPerPage}
            />
        </form>
    )
}
