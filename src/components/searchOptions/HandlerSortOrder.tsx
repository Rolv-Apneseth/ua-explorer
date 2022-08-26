import React from "react"

interface Props {
    isLoading: boolean
    isSortOrderAscending: boolean
    setIsSortOrderAscending: Function
}

export const HandlerSortOrder = ({
    isLoading,
    isSortOrderAscending,
    setIsSortOrderAscending,
}: Props) => {
    const onClickChangeSortOrder = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
        setIsSortOrderAscending(!isSortOrderAscending)
    }

    return (
        <button
            disabled={isLoading}
            onClick={onClickChangeSortOrder}
            className={isSortOrderAscending ? "pressed" : ""}
        >
            <i className="icon-down-arrow"></i>
        </button>
    )
}
