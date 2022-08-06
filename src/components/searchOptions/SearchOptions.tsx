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
}

export const SearchOptions = ({
    isLoading,
    sortBy,
    setSortBy,
    filterContinent,
    setFilterContinent,
    filterName,
    setFilterName,
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
        </form>
    )
}
