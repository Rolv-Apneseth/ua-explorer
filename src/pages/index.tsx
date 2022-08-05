import React from "react"
import { possibleContinentOptions, searchByOptions } from "../utils/constants"
import { getUrbanAreas } from "../utils/api"
import { UrbanArea } from "../utils/apiData"
import { CardsSection } from "../components/cards/CardsSection"
import { SearchOptions } from "../components/searchOptions/SearchOptions"
import Layout from "../components/Layout"

const Index = () => {
    const [data, setData] = React.useState<UrbanArea[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [searchBy, setSearchBy] = React.useState(searchByOptions[0])
    const [filterContinent, setFilterContinent] = React.useState(
        possibleContinentOptions[0]
    )
    const [filterName, setFilterName] = React.useState("")
    // const [query, setQuery] = React.useState("Harry")
    // const [page, setPage] = React.useState(1)

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
    }, [searchBy])

    return (
        <Layout>
            <h1 className="page-heading">City Explorer</h1>

            <SearchOptions
                isLoading={isLoading}
                searchBy={searchBy}
                setSearchBy={setSearchBy}
                filterContinent={filterContinent}
                setFilterContinent={setFilterContinent}
                filterName={filterName}
                setFilterName={setFilterName}
            />

            <CardsSection
                data={data}
                isLoading={isLoading}
                searchBy={searchBy}
                filterContinent={filterContinent}
                filterName={filterName}
            />
        </Layout>
    )
}

export default Index