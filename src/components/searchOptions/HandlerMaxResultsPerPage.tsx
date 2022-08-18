import React from "react"
import { possibleUrbanAreasPerPage } from "../../utils/constants"

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

    return (
        <section>
            <label htmlFor="total-urban-area">Results Per Page</label>
            <select
                name="total-urban-areas-to-show"
                value={maxResultsPerPage}
                onChange={handleChangeTotalUrbanAreasToShow}
            >
                {possibleUrbanAreasPerPage.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </section>
    )
}
