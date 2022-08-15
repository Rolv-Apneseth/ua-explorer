import { UrbanArea, UrbanAreaScore } from "./apiData"
import { possibleColourCSSVariableNames, scoreBreakPoints } from "./constants"

export const getSortingFunctionForUrbanAreasByScoreLabel =
    (label: string) => (a: UrbanArea, b: UrbanArea) => {
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

export const sortScoreLabelsArray = (
    a: Array<string | UrbanAreaScore>,
    b: Array<string | UrbanAreaScore>
) => {
    // Can't be equal so no 0 value given
    return a[0] > b[0] ? 1 : -1
}

export const getScoreColour = (score: number, outOf: number) => {
    const resultingValue = score / outOf

    let result = 1

    if (resultingValue < scoreBreakPoints[0]) {
        result = 0
    } else if (resultingValue > scoreBreakPoints[1]) {
        result = 2
    }

    return `var(--clr-${possibleColourCSSVariableNames[result]})`
}
