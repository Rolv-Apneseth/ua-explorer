import React from "react"
import { HandlerMaxResultsPerPage } from "./HandlerMaxResultsPerPage"
import { HandlerPageNumber } from "./HandlerPageNumber"

interface Props {
    isLoading: boolean
    currentPageNumber: number
    setCurrentPageNumber: Function
    maxPossiblePages: number
    maxResultsPerPage: string
    setMaxResultsPerPage: Function
}

export const PageOptions = ({
    isLoading,
    currentPageNumber,
    setCurrentPageNumber,
    maxPossiblePages,
    maxResultsPerPage,
    setMaxResultsPerPage,
}: Props) => {
    return (
        <fieldset disabled={isLoading} className="page-options">
            <HandlerMaxResultsPerPage
                maxResultsPerPage={maxResultsPerPage}
                setMaxResultsPerPage={setMaxResultsPerPage}
            />

            <HandlerPageNumber
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                maxPossiblePages={maxPossiblePages}
            />
        </fieldset>
    )
}
