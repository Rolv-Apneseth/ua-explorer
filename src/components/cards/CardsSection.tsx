import React from "react"
import { UrbanArea } from "../../utils/api"
import { LoadingWheel } from "../LoadingWheel"
import { CardCity } from "./CardCity"
import "../../styles/sections/cards_section.css"

interface Props {
    data: Array<UrbanArea>
    isLoading: boolean
}

export const CardsSection = ({ data, isLoading }: Props) => {
    if (isLoading) {
        return <LoadingWheel />
    }

    return (
        <section className="cards-section">
            {data.map((urbanArea: UrbanArea) => (
                <CardCity urbanArea={urbanArea} />
            ))}
        </section>
    )
}
