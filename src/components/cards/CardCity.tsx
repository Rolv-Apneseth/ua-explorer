import React from "react"
import { UrbanArea } from "../../utils/api"
import "../../styles/sections/card_city.css"

interface Props {
    urbanArea: UrbanArea
}

export const CardCity = ({ urbanArea }: Props) => {
    return (
        <section className="card-city">
            <div>{urbanArea.name}</div>
            <div>{urbanArea.continent}</div>
            <div>{urbanArea.ua_id}</div>
            <img src={urbanArea.imageWeb} alt={urbanArea.name} />
        </section>
    )
}
