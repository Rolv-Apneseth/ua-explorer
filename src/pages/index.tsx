import React from "react"
import {
    defaultFilterByContinent,
    defaultFilterByName,
    defaultSortBy,
    defaultUrbanAreasPerPage,
} from "../utils/constants"
import { getUrbanAreas } from "../utils/api"
import { UrbanArea } from "../utils/apiData"
import { CardsSection } from "../components/cards/CardsSection"
import { SearchOptions } from "../components/searchOptions/SearchOptions"
import Layout from "../components/Layout"

const Index = () => {
    const [data, setData] = React.useState<UrbanArea[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [sortBy, setSortBy] = React.useState(defaultSortBy)
    const [filterContinent, setFilterContinent] = React.useState(
        defaultFilterByContinent
    )
    const [filterName, setFilterName] = React.useState(defaultFilterByName)
    const [showAllScores, setShowAllScores] = React.useState(false)
    const [currentPageNumber, setCurrentPageNumber] = React.useState(0)
    const [maxPossiblePages, setMaxPossiblePages] = React.useState(1)
    const [maxResultsPerPage, setMaxResultsPerPage] = React.useState(
        defaultUrbanAreasPerPage
    )

    React.useEffect(() => {
        if (data.length === 0) {
            setIsLoading(true)
            getUrbanAreas()
                .then((urbanAreas: UrbanArea[]) => {
                    setData(urbanAreas)
                })
                .then(() => {
                    setIsLoading(false)
                })
        }
    }, [sortBy])

    return (
        <Layout>
            <h1 className="page-heading">Urban Area Explorer</h1>

            <SearchOptions
                isLoading={isLoading}
                sortBy={sortBy}
                setSortBy={setSortBy}
                filterContinent={filterContinent}
                setFilterContinent={setFilterContinent}
                filterName={filterName}
                setFilterName={setFilterName}
                showAllScores={showAllScores}
                setShowAllScores={setShowAllScores}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                maxPossiblePages={maxPossiblePages}
                maxResultsPerPage={maxResultsPerPage}
                setMaxResultsPerPage={setMaxResultsPerPage}
            />

            <CardsSection
                data={data}
                isLoading={isLoading}
                sortBy={sortBy}
                filterContinent={filterContinent}
                filterName={filterName}
                showAllScores={showAllScores}
                currentPageNumber={currentPageNumber}
                setMaxPossiblePages={setMaxPossiblePages}
                maxResultsPerPage={maxResultsPerPage}
            />
        </Layout>
    )
}

export default Index
