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
                <option value={0}>1</option>

                {range(1, maxPossiblePages).map(option => (
                    <option value={option}>{option + 1}</option>
                ))}
            </select>
        </section>
    )
}
