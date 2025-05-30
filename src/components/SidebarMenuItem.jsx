import DropdownIcon from "../../src/assets/dropdown-icon.svg?react"
import SidebarDropdownItem from "./SideBarDropdownItem"

const SidebarMenuItem = ({ MenuIcon, active, label, badge, dropdown, dropdownActive, index, handleIsActive }) => {
    const activeTextClass = active ? " text-white" : " text-wf-400"
    const dropdownIdx = dropdown.length === 0 ? false : true
    return (<div>
        <div
            className={"group/menuItem px-4 py-2.5 rounded-md cursor-pointer flex flex-row items-center gap-2.5 border-[1px] border-transparent" + (active ? " bg-primary-500" : "") + (active ? " hover:bg-primary-500 hover:border-transparent" : " hover:border-primary-500 hover:[background:linear-gradient(90deg,rgba(13,153,255,0.08)_0%,rgba(13,153,255,0.1)_50%,rgba(13,153,255,0.04)_100%)]")}
            onClick={() => handleIsActive(index, dropdownIdx)}>
            <MenuIcon className={"min-w-[18px] group-hover/menuItem:text-white" + activeTextClass} />
            <p className={"invisible opacity-0 group-hover:visible group-hover:opacity-100 flex-1 text-rg-rg group-hover/menuItem:text-white text-nowrap transition-all duration-300" + activeTextClass}>
                {label}
            </p>
            {badge !== 0 && <span className={"rounded-full px-[3px] py-0.5 min-w-[22px] text-xs-md text-[#F7AC16] text-center" + (active ? " bg-white" : " bg-[#F7AC164D]")}>{badge}</span>}
            {
                dropdown.length > 0 &&
                <DropdownIcon className={"group-hover/menuItem:text-white transition-all duration-500" + activeTextClass + (active ? " rotate-180" : "")} />
            }
        </div>
        {
            dropdown.length > 0 &&
            <ul className={"max-h-0 transition-all duration-700 overflow-hidden" + (active ? " group-hover:max-h-64" : "")}>
                {
                    dropdown.map((item, i) => {
                        return (<SidebarDropdownItem key={i} dropdownItem={item} dropdownIndex={i} menuIndex={index} handleIsActive={handleIsActive} dropdown={dropdown} dropdownActive={dropdownActive} />)
                    })
                }
            </ul>
        }
    </div>)
}

export default SidebarMenuItem