import React from "react"
import "../../styles/sections/card_city.css"
import {
    possibleContinentOptions,
    possibleUrbanAreasPerPage,
    sortByOptions,
} from "../../utils/constants"
import { HandlerMaxResultsPerPage } from "./HandlerMaxResultsPerPage"
import { HandlerPageNumber } from "./HandlerPageNumber"

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
    const handleChangeSortBy = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSortBy(event.target.value)
    }

    const handleChangeFilterContinent = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilterContinent(event.target.value)
    }

    const handleChangeFilterName = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFilterName(event.target.value)
    }

    const onClickShowAllScores = (
        event: React.ChangeEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
        setShowAllScores(!showAllScores)
    }

    return (
        !isLoading && (
            <form>
                <label htmlFor="sort-urban-areas">Sort by: </label>
                <select
                    name="sort-urban-areas"
                    value={sortBy}
                    onChange={handleChangeSortBy}
                >
                    {sortByOptions.map(option => (
                        <option value={option}>{option}</option>
                    ))}
                </select>

                <label htmlFor="filter-urban-area-continent">Continent: </label>
                <select
                    name="filter-urban-area-continent"
                    value={filterContinent}
                    onChange={handleChangeFilterContinent}
                >
                    {possibleContinentOptions.map(option => (
                        <option value={option}>{option}</option>
                    ))}
                </select>

                <label htmlFor="filter-urban-area-name">Filter by name: </label>
                <input
                    name="filter-urban-area-name"
                    type="text"
                    value={filterName}
                    onChange={handleChangeFilterName}
                />

                <button
                    onClick={onClickShowAllScores}
                    className={showAllScores ? "pressed" : ""}
                >
                    Show All Scores
                </button>

                <HandlerMaxResultsPerPage
                    setCurrentPageNumber={setCurrentPageNumber}
                    maxResultsPerPage={maxResultsPerPage}
                    setMaxResultsPerPage={setMaxResultsPerPage}
                />

                <HandlerPageNumber
                    currentPageNumber={currentPageNumber}
                    setCurrentPageNumber={setCurrentPageNumber}
                    maxPossiblePages={maxPossiblePages}
                />
            </form>
        )
    )
}
