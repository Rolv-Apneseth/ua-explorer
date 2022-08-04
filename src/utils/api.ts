import { UrbanArea, FetchedUrbanArea } from "./apiData"

const baseApiUrl = "https://api.teleport.org/api/"
export const apiUrlUrbanAreas = `${baseApiUrl}urban_areas/?embed=ua:item/ua:images&embed=ua:item/ua:salaries&embed=ua:item/ua:details&embed=ua:item/ua:scores`

export const fetchUrbanAreas = () => {
    return fetch(apiUrlUrbanAreas)
        .then(response => response.json())
        .then(response_json => response_json._embedded["ua:item"])
        .catch(error => console.warn(error))
}

export const getUrbanAreas = () => {
    let urbanAreas: Array<UrbanArea> = []

    return fetchUrbanAreas().then(
        (fetched_urban_areas: Array<FetchedUrbanArea>) => {
            fetched_urban_areas.forEach(fetched_urban_area => {
                let urbanArea = new UrbanArea(fetched_urban_area)
                urbanAreas.push(urbanArea)
            })

            return urbanAreas
        }
    )
}
