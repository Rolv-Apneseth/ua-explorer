import React from "react"

interface Props {
    filterName: string
    setFilterName: Function
}

export const HandlerFilterName = ({ filterName, setFilterName }: Props) => {
    const handleChangeFilterName = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFilterName(event.target.value)
    }

    return (
        <section>
            <label htmlFor="filter-urban-area-name">Filter by name: </label>
            <input
                name="filter-urban-area-name"
                type="text"
                value={filterName}
                onChange={handleChangeFilterName}
            />
        </section>
    )
}
