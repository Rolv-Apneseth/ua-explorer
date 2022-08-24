import React from "react"
import { possibleContinentOptions } from "../../utils/constants"

interface Props {
    filterContinent: string
    setFilterContinent: Function
}

export const HandlerFilterContinent = ({
    filterContinent,
    setFilterContinent,
}: Props) => {
    const handleChangeFilterContinent = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilterContinent(event.target.value)
    }

    return (
        <section>
            <label hidden htmlFor="filter-urban-area-continent">
                Continent:
            </label>
            <select
                name="filter-urban-area-continent"
                value={filterContinent}
                onChange={handleChangeFilterContinent}
            >
                {possibleContinentOptions.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </section>
    )
}
