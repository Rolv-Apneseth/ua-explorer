export const baseApiUrl = "https://api.teleport.org/api/"
export const apiUrlCitiesAndImages = `${baseApiUrl}urban_areas/?embed=ua:item/ua:images`

// SAMPLE RESPONSE
// _embedded
//    ua:item
//        ua_id
//        continent
//        full_name
//        name
//        _embedded
//             ua:images
//                 links
//                     ....
//                 photo
//                     0
//                         image
//                             mobile
//                             web

interface FetchedUrbanArea {
    _embedded: Array<Object>
    ua_id: string
    name: string
    slug: string
    continent: string
}

export class UrbanArea {
    fetchedUrbanArea: FetchedUrbanArea
    name: string
    ua_id: string
    slug: string
    continent: string
    imageMobile: string
    imageWeb: string

    constructor(fetchedUrbanArea: FetchedUrbanArea) {
        this.fetchedUrbanArea = fetchedUrbanArea
        this.imageMobile = this.getImage("mobile")
        this.imageWeb = this.getImage("web")
        this.name = fetchedUrbanArea.name
        this.ua_id = fetchedUrbanArea.ua_id
        this.slug = fetchedUrbanArea.slug
        this.continent = fetchedUrbanArea.continent
    }

    getImage = (format: string) => {
        return this.fetchedUrbanArea._embedded["ua:images"].photos[0].image[
            format
        ]
    }
}

export const getUrbanAreas = () => {
    let urbanAreas: Array<UrbanArea> = []

    return fetchCitiesAndImages().then(
        (fetched_urban_areas: Array<FetchedUrbanArea>) => {
            fetched_urban_areas.forEach(fetched_urban_area => {
                let urbanArea = new UrbanArea(fetched_urban_area)
                urbanAreas.push(urbanArea)
            })

            return urbanAreas
        }
    )
}

export const fetchCitiesAndImages = () => {
    return fetch(apiUrlCitiesAndImages)
        .then(response => response.json())
        .then(response_json => response_json._embedded["ua:item"])
        .catch(error => console.warn(error))
}
