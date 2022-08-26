import React from "react"
import { possibleContinentOptions } from "../../utils/constants"
import { getJointStringForUID } from "../../utils/helpers"

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

    const getKey = (continentName: string) =>
        getJointStringForUID("HandlerFilterContinent", continentName)

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
                    <option key={getKey(option)} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </section>
    )
}
