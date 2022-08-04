import { possibleDetailLabels } from "./constants"

// SAMPLE RESPONSE
// _embedded
//    ua:item
//        ua_id
//        continent
//        full_name
//        name
//        _embedded
//              ua:details
//              ua:scores
//             ua:images
//                 links
//                     ....
//                 photo
//                     0
//                         image
//                             mobile
//                             web
//
// INTERFACES / TYPES
export interface FetchedUrbanArea {
    _embedded: UrbanAreaEmbeddedCategories
    ua_id: string
    name: string
    full_name: string
    slug: string
    continent: string
}

// EMBEDDED CATEGORIES ----------------------------
interface UrbanAreaEmbeddedCategories {
    "ua:images": UrbanAreaImages
    "ua:scores": UrbanAreaScores
    "ua:details": UrbanAreaDetails
}
// ------------------- DETAILS --------------------
interface UrbanAreaDetails {
    categories: Array<UrbanAreaDetailCategories>
}
interface UrbanAreaDetailCategories {
    label: string
    data: Array<UrbanAreaDetailData>
}
interface UrbanAreaDetailData {
    type: string
    label: string
    float_value?: Number | string
    int_value?: Number
    percent_value?: Number
    string_value?: string
    currency_dollar_value?: Number
}
// ------------------- IMAGES ---------------------
interface UrbanAreaImages {
    photos: Array<UrbanAreaImageInfo>
}
interface UrbanAreaImageInfo {
    image: UrbanAreaImage
}
interface UrbanAreaImage {
    mobile: string
    web: string
}
// ------------------- SCORES ---------------------
interface UrbanAreaScores {
    summary: string
    teleport_city_score: number
    categories: Array<UrbanAreaScoresCategory>
}
interface UrbanAreaScoresCategory {
    color: string
    name: string
    score_out_of_10: Number
}
interface UrbanAreaScoresContainer {
    "Business Freedom"?: UrbanAreaScore
    Commute?: UrbanAreaScore
    "Cost of Living"?: UrbanAreaScore
    Economy?: UrbanAreaScore
    Education?: UrbanAreaScore
    "Environmental Quality"?: UrbanAreaScore
    Healthcare?: UrbanAreaScore
    Housing?: UrbanAreaScore
    "Internet Access"?: UrbanAreaScore
    "Leisure & Culture"?: UrbanAreaScore
    Outdoors?: UrbanAreaScore
    Safety?: UrbanAreaScore
    Startups?: UrbanAreaScore
    Taxation?: UrbanAreaScore
    Tolerance?: UrbanAreaScore
    "Travel Connectivity"?: UrbanAreaScore
    "Venture Capital"?: UrbanAreaScore
}
class UrbanAreaScore {
    color: string
    score: string

    constructor(color: string = "#343434", score: string = "0.00") {
        this.color = color
        this.score = score
    }
}

export class UrbanArea {
    fetchedUrbanArea: FetchedUrbanArea
    embeddedCategories: UrbanAreaEmbeddedCategories
    // Basic
    name: string
    fullName: string
    continent: string
    // Images
    imageMobile: string
    imageWeb: string
    // Scores
    summary: string
    overallScore: string
    scoreLabels: UrbanAreaScoresContainer
    // Details
    detailLabels: Object

    constructor(fetchedUrbanArea: FetchedUrbanArea) {
        this.fetchedUrbanArea = fetchedUrbanArea
        this.embeddedCategories = fetchedUrbanArea._embedded

        // BASIC INFO
        this.name = fetchedUrbanArea.name
        this.fullName = fetchedUrbanArea.full_name
        this.continent = fetchedUrbanArea.continent

        // IMAGES
        const images = this.embeddedCategories["ua:images"].photos[0].image
        this.imageMobile = images.mobile
        this.imageWeb = images.web

        // SCORES
        const scoresCategory = this.embeddedCategories["ua:scores"]
        this.summary = scoresCategory.summary
        this.overallScore = scoresCategory.teleport_city_score.toFixed(2)
        this.scoreLabels = {}
        this.updateScoreLabels()

        // DETAILS
        this.detailLabels = {}
        this.updateDetailLabels()
    }

    updateScoreLabels = () => {
        type scoreLabelsKey = keyof typeof this.scoreLabels
        const scoresCategories = this.embeddedCategories["ua:scores"].categories

        scoresCategories.forEach(category => {
            const key = category.name as scoreLabelsKey
            this.scoreLabels[key] = new UrbanAreaScore(
                category.color,
                category.score_out_of_10.toFixed(2)
            )
        })
    }

    getScoreValueByLabel = (label: string) => {
        type scoreLabelsKey = keyof UrbanAreaScoresContainer
        const labelKey = label as scoreLabelsKey
        const backupResult: UrbanAreaScore = new UrbanAreaScore()

        if (labelKey in this.scoreLabels) {
            return this.scoreLabels[labelKey] || backupResult
        }
        return backupResult
    }

    updateDetailLabels = () => {
        type detailLabelsKey = keyof typeof this.detailLabels
        const detailsCategory = this.embeddedCategories["ua:details"].categories

        for (
            let categoryIndex: number = 0;
            categoryIndex < detailsCategory.length;
            categoryIndex++
        ) {
            for (
                let dataIndex: number = 0;
                dataIndex < detailsCategory[categoryIndex].data.length;
                dataIndex++
            ) {
                const detailData =
                    detailsCategory[categoryIndex].data[dataIndex]

                type detailDataKey = keyof typeof detailData

                const detailLabel = detailData.label as detailLabelsKey

                if (possibleDetailLabels.includes(detailData.label)) {
                    let valueProperty =
                        `${detailData.type}_value` as detailDataKey

                    if (valueProperty in detailData) {
                        this.detailLabels[detailLabel] =
                            detailData[valueProperty]
                    }
                }
            }
        }
    }

    getDetailValueByLabel = (label: string) => {
        type detailLabelsKey = keyof typeof this.detailLabels
        const labelKey = label as detailLabelsKey

        return this.detailLabels.hasOwnProperty(labelKey)
            ? this.detailLabels[labelKey]
            : "N/A"
    }
}
