import DownArrowIcon from "../../../assets/down-arrow.svg?react"

const TableHeading = ({title}) => {
    return (<div className="flex flex-row items-center text-rg-rg text-typography-500">{title}
        <span className="px-2 pt-2 pb-1.5">
            <DownArrowIcon />
        </span>
    </div>)
}

export default TableHeading