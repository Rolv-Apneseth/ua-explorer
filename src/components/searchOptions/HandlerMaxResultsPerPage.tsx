import React from "react"
import { possibleUrbanAreasPerPage } from "../../utils/constants"
import { getJointStringForUID } from "../../utils/helpers"

interface Props {
    maxResultsPerPage: string
    setMaxResultsPerPage: Function
}

export const HandlerMaxResultsPerPage = ({
    maxResultsPerPage,
    setMaxResultsPerPage,
}: Props) => {
    const handleChangeTotalUrbanAreasToShow = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setMaxResultsPerPage(event.target.value)
    }

    const getKey = (maxResultsValue: string) =>
        getJointStringForUID("HandlerMaxResultsPerPage", maxResultsValue)

    return (
        <section>
            <label htmlFor="total-urban-area">Results Per Page</label>
            <select
                name="total-urban-areas-to-show"
                value={maxResultsPerPage}
                onChange={handleChangeTotalUrbanAreasToShow}
            >
                {possibleUrbanAreasPerPage.map(option => (
                    <option key={getKey(option)} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </section>
    )
}
