import React from "react"
import { range } from "underscore"
import "../../styles/sections/card_city.css"
import {
    possibleContinentOptions,
    possibleUrbanAreasPerPage,
    sortByOptions,
} from "../../utils/constants"

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

    const handleChangeTotalUrbanAreasToShow = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCurrentPageNumber(0)
        setMaxResultsPerPage(event.target.value)
    }

    const handleChangeCurrentPage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCurrentPageNumber(event.target.value)
    }

    return (
        <form>
            <label htmlFor="sort-urban-areas">Sort by: </label>
            <select
                name="sort-urban-areas"
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
                type="text"
                value={filterName}
                onChange={handleChangeFilterName}
            />

            <button
                disabled={isLoading}
                onClick={onClickShowAllScores}
                className={showAllScores ? "pressed" : ""}
            >
                Show All Scores
            </button>

            <label htmlFor="total-urban-area">Results Per Page</label>
            <select
                name="total-urban-areas-to-show"
                disabled={isLoading}
                value={maxResultsPerPage}
                onChange={handleChangeTotalUrbanAreasToShow}
            >
                {possibleUrbanAreasPerPage.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>

            <label htmlFor="current-page">Page</label>
            <select
                name="total-urban-areas-to-show"
                disabled={isLoading}
                value={currentPageNumber}
                onChange={handleChangeCurrentPage}
            >
                {range(maxPossiblePages).map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </form>
    )
}
