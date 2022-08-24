export const possibleContinentOptions = [
    "Any Continent",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
]
export const possibleScoreLabels = [
    "Business Freedom",
    "Commute",
    "Cost of Living",
    "Economy",
    "Education",
    "Environmental Quality",
    "Healthcare",
    "Housing",
    "Internet Access",
    "Leisure & Culture",
    "Outdoors",
    "Safety",
    "Startups",
    "Taxation",
    "Tolerance",
    "Travel Connectivity",
    "Venture Capital",
]
export const possibleDetailLabels = [
    "Inflation [Teleport score]",
    "Monthly public transport",
    "Historical sites",
    "Currency for urban area",
    "GDP growth rate",
    "GDP per capita",
    "University quality [Teleport score]",
    "Life expectancy (years)",
    "Rent index [Teleport score]",
    "Unemployment rate in country",
    "English skills",
    "Tolerance towards minorities [Teleport score]",
    "Download speed (Mbps)",
    "Urban area elevation (meters)",
    "Air quality [Teleport score]",
    "Cleanliness [Teleport score]",
    "Crime rate [Teleport score]",
    "Gun-related deaths per 100,000 residents per year",
    "Income tax level [Teleport score]",
    "Freedom from corruption",
    "Lack of labor restrictions",
    "Urban area population (millions)",
    "Population density in people/sq km over full UA as defined by bounding box.",
    "Average number of rainy days per year",
    "Average high temperature (Celsius)",
    "Average low temperature (Celsius)",
    "Weather type",
]
export const sortByOptions = [
    "Alphabetical",
    "Overall Score",
    ...possibleScoreLabels,
]

export const possibleUrbanAreasPerPage = ["10", "25", "50", "100"]

export const defaultSortBy = sortByOptions[0]
export const defaultFilterByContinent = possibleContinentOptions[0]
export const defaultFilterByName = ""
export const defaultUrbanAreasPerPage = possibleUrbanAreasPerPage[0]

// ANIMATION
export const defaultAnimationChangeInPosition: string = "100%"
export const defaultAnimationDurationInSeconds: number = 1

// STYLING
export const scoreBreakPoints = [0.3, 0.5] // i.e. score < 30% = bad
export const possibleColourCSSVariableNames = ["bad", "warning", "good"] // i.e. var(--clr-bad)
