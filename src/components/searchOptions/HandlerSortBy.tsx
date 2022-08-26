import React from "react"
import { sortByOptions } from "../../utils/constants"
import { getJointStringForUID } from "../../utils/helpers"

interface Props {
    sortBy: string
    setSortBy: Function
}

export const HandlerSortBy = ({ sortBy, setSortBy }: Props) => {
    const handleChangeSortBy = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSortBy(event.target.value)
    }

    const getKey = (sortByValue: string) =>
        getJointStringForUID("HandlerSortBy", sortByValue)

    return (
        <section>
            <label hidden htmlFor="sort-urban-areas">
                Sort by:
            </label>
            <select
                name="sort-urban-areas"
                value={sortBy}
                onChange={handleChangeSortBy}
            >
                {sortByOptions.map(option => (
                    <option key={getKey(option)} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </section>
    )
}
