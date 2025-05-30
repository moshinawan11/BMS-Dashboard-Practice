import BranchVector from "../../src/assets/branch-vector.svg?react"
import BranchLineVector from "../../src/assets/branch-line-vector.svg?react"

const SidebarDropdownItem = ({ dropdownItem, dropdownIndex, menuIndex, handleIsActive, dropdown, dropdownActive }) => {
    return (<li
        className="text-nowrap text-white px-2 max-h-11 rounded-md cursor-pointer flex flex-row items-center overflow-hidden"
        key={dropdownIndex}
        onClick={() => handleIsActive(menuIndex, dropdownIndex)}>
        <span>
            <BranchVector className="translate-y-1" />
            <BranchLineVector className={"-translate-y-2" + (dropdownIndex !== dropdown.length - 1 ? " group-hover:visible" : " invisible")} />
        </span>
        <span className={"py-2.5 px-3.5 flex-1 rounded-tl-xl rounded-bl-xl hover:[background:linear-gradient(90deg,#EDF0F714_0%,#EDF0F71A_50%,#EDF0F70A_100%)]" + (dropdownIndex === dropdownActive ? " [background:linear-gradient(90deg,#EDF0F714_0%,#EDF0F71A_50%,#EDF0F70A_100%)]" : "")}>
            {dropdownItem}
        </span>
    </li>)
}

export default SidebarDropdownItem