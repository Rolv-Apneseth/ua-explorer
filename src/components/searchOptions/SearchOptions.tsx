import React from "react"
import "../../styles/sections/card_city.css"
import { searchByOptions } from "../../utils/constants"

interface Props {
    isLoading: boolean
    searchBy: string
    setSearchBy: Function
}

export const SearchOptions = ({ isLoading, searchBy, setSearchBy }: Props) => {
    const handleChangeSearchBy = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSearchBy(event.target.value)
    }

    return (
        <form>
            <select
                disabled={isLoading}
                value={searchBy}
                onChange={handleChangeSearchBy}
            >
                {searchByOptions.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </form>
    )
}
