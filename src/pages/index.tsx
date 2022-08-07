import React from "react"
import {
    defaultFilterByContinent,
    defaultFilterByName,
    defaultSortBy,
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
            <h1 className="page-heading">City Explorer</h1>

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
            />

            <CardsSection
                data={data}
                isLoading={isLoading}
                sortBy={sortBy}
                filterContinent={filterContinent}
                filterName={filterName}
                showAllScores={showAllScores}
            />
        </Layout>
    )
}

export default Index
