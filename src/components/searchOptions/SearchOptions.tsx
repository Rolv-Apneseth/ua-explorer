import React from "react"
import "../../styles/sections/card_city.css"
import { possibleContinentOptions, sortByOptions } from "../../utils/constants"

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
        <form>
            <select
                disabled={isLoading}
                value={sortBy}
                onChange={handleChangeSortBy}
            >
                {sortByOptions.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>

            <select
                disabled={isLoading}
                value={filterContinent}
                onChange={handleChangeFilterContinent}
            >
                {possibleContinentOptions.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>

            <input
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
        </form>
    )
}
