import React from "react"
import { defaultSearchBy, searchByOptions } from "../utils/constants"
import { debounce } from "underscore"
import { LoadingWheel } from "../components/LoadingWheel"
import { getUrbanAreas, UrbanArea } from "../utils/api"
import { CardsSection } from "../components/cards/CardsSection"
import Layout from "../components/Layout"

const Index = () => {
    const [data, setData] = React.useState<UrbanArea[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    // const [searchBy, setSearchBy] = React.useState(defaultSearchBy)
    // const [query, setQuery] = React.useState("Harry")
    // const [page, setPage] = React.useState(1)
    // const [isLoadingResults, setIsLoadingResults] = React.useState(false)

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
    }, [])

    return (
        <Layout>
            <h1 className="page-heading">City Explorer</h1>

            <CardsSection data={data} isLoading={isLoading} />
        </Layout>
    )
}

export default Index
