import React from "react"
import { sortByOptions } from "../../utils/constants"

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
                    <option value={option}>{option}</option>
                ))}
            </select>
        </section>
    )
}
