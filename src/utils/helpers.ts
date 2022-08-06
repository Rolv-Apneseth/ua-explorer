import { UrbanArea } from "./apiData"

export const getSortingFunctionForUrbanAreasByScoreLabel =
    (label: string) => (a: UrbanArea, b: UrbanArea) => {
        console.log(
            parseFloat(b.getScoreValueByLabel(label).score),
            parseFloat(a.getScoreValueByLabel(label).score)
        )
        return (
            parseFloat(b.getScoreValueByLabel(label).score) -
            parseFloat(a.getScoreValueByLabel(label).score)
        )
    }

export const getSortingFunctionForUrbanAreasByAlphabetical =
    () => (a: UrbanArea, b: UrbanArea) => {
        const textA = a.name
        const textB = b.name

        return textA < textB ? -1 : textA > textB ? 1 : 0
    }

export const getSortingFunctionForUrbanAreasByOverallScore =
    () => (a: UrbanArea, b: UrbanArea) => {
        return parseFloat(b.overallScore) - parseInt(a.overallScore)
    }
