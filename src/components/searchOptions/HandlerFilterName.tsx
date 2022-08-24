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
        <section className="search-options-filter-name">
            <label htmlFor="filter-urban-area-name" hidden>
                Filter by name:
            </label>
            <section className="icon-group">
                <i className="icon-find"></i>
                <input
                    name="filter-urban-area-name"
                    type="text"
                    placeholder="Search"
                    value={filterName}
                    onChange={handleChangeFilterName}
                />
            </section>
        </section>
    )
}
