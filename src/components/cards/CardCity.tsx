import React from "react"
import { UrbanArea } from "../../utils/apiData"
import "../../styles/sections/card_city.css"
import { searchByOptions } from "../../utils/constants"

interface Props {
    urbanArea: UrbanArea
    topStatistic?: string
}

export const CardCity = ({ urbanArea, topStatistic }: Props) => {
    // const [dataToDisplay, setDataToDisplay] = React.useState(undefined)

    const getDataToDisplay = () => {
        if (topStatistic === searchByOptions[1]) {
            return <div>{`${topStatistic}: ${urbanArea.overallScore}`}</div>
        }
        return (
            <div>
                {topStatistic &&
                    `${topStatistic}: 
                ${urbanArea.getScoreValueByLabel(topStatistic).score}`}
            </div>
        )
    }

    React.useEffect(() => {}, [topStatistic])

    return (
        <section className="card-city">
            <div>
                {/* {urbanArea.name}, {urbanArea.continent} */}
                {urbanArea.fullName}
            </div>

            <img src={urbanArea.imageWeb} alt={urbanArea.name} />

            {getDataToDisplay()}

            {/* Completely trusting the developers of the Teleport API with this one */}
            <div dangerouslySetInnerHTML={{ __html: urbanArea.summary }} />
        </section>
    )
}
