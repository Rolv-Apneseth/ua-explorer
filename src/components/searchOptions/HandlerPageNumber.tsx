import React from "react"
import { range } from "underscore"

interface Props {
    currentPageNumber: number
    setCurrentPageNumber: Function
    maxPossiblePages: number
}

export const HandlerPageNumber = ({
    currentPageNumber,
    setCurrentPageNumber,
    maxPossiblePages,
}: Props) => {
    const handleChangeCurrentPage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCurrentPageNumber(event.target.value)
    }

    return (
        <section>
            <label htmlFor="current-page">Page</label>
            <select
                name="total-urban-areas-to-show"
                value={currentPageNumber}
                onChange={handleChangeCurrentPage}
            >
                {range(maxPossiblePages).map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </section>
    )
}
