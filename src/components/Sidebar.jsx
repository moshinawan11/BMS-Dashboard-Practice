import { useState } from "react"

import Button from "../components/Button"
import BoostIcon from "../../src/assets/boost-icon.svg?react"
import AsideIcon from "../../src/assets/aside-icon.svg?react"
import SiteLogo from "../../src/assets/logo-sm.svg?react"
import OverviewIcon from "../../src/assets/overview-icon.svg?react"
import MyVaultIcon from "../../src/assets/MyVault-icon.svg?react"
import ApprovalIcon from "../../src/assets/Approval-icon.svg?react"
import WorkflowIcon from "../../src/assets/WorkFlow-icon.svg?react"
import UploadQueIcon from "../../src/assets/UploadQue-icon.svg?react"
import RecentFilesIcon from "../../src/assets/recentfiles-icon.svg?react"
import FavIcon from "../../src/assets/fav-icon.svg?react"
import DeleteIcon from "../../src/assets/delete-icon.svg?react"
import SettingsIcon from "../../src/assets/Settings-icon.svg?react"
import SidebarMenuItem from "../components/SidebarMenuItem"

const storage = 43;

const badges = {
    overview: 0,
    myVault: 0,
    approval: 6,
    workflow: 0,
    uploadQueue: 0,
    recentFiles: 0,
    favorties: 0,
    delete: 0,
}

const menuItems = [
    { menuIcon: OverviewIcon, label: "Overview", badge: badges.overview },
    { menuIcon: MyVaultIcon, label: "My Vault", badge: badges.myVault },
    { menuIcon: ApprovalIcon, label: "Approval", badge: badges.approval },
    { menuIcon: WorkflowIcon, label: "Workflow", badge: badges.workflow, dropdown: ["WorkFlow Templates", "Active WorkFlows", "Nice WorkFlow", "Pookie Workflow"] },
    { menuIcon: UploadQueIcon, label: "Upload Queue", badge: badges.uploadQueue },
    { menuIcon: RecentFilesIcon, label: "Recent Files", badge: badges.recentFiles },
    { menuIcon: FavIcon, label: "Favorites", badge: badges.favorties },
    { menuIcon: DeleteIcon, label: "Trash Bin", badge: badges.delete },
    { menuIcon: SettingsIcon, label: "Settings" },
]

const Sidebar = () => {

    const [menuItemIsActive, setMenuItemIsActive] = useState({ index: [0], dropdown: false })
    const handleMenuItemIsActive = (i, dropdownIdx) => {
        setMenuItemIsActive(prevActive => {
            {
                if (dropdownIdx === false) {
                    return ({ index: [i], dropdown: false })
                }
                else if (dropdownIdx === true) {
                    let newState
                    prevActive.index.includes(i) ?
                        newState = { index: prevActive.index.filter(idx => idx !== i), dropdown: false } :
                        newState = { index: [...prevActive.index, i], dropdown: false }
                    return newState
                }
                return ({ index: [i], dropdown: dropdownIdx })
            }
        })
    }

    return (<div className="group top-2 bottom-2 rounded-xl fixed z-20 flex flex-col max-w-18 hover:max-w-60 transition-all duration-500"
        style={{ backgroundImage: "linear-gradient(0deg, #0D0E12, #0D0E12), linear-gradient(186.02deg, rgba(13, 153, 255, 0.03) 0%, rgba(13, 153, 255, 0.12) 49.33%, rgba(13, 153, 255, 0.05) 100%)" }}>
        <div className="border-b-[1px]">
            <div className="border-b-[1px] px-6 py-4 pt-6 flex group-hover:justify-start">
                <AsideIcon className="visible group-hover:invisible opacity-100 group-hover:opacity-0 duration-700 transition-all absolute w-6 min-w-6" />
                <SiteLogo className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-700 w-40 min-w-40" />
            </div>
            <div className="h-[1px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(26, 214, 255, 0.06) 0%, rgba(26, 214, 255, 0.45) 50%, rgba(26, 214, 255, 0.06) 100%)" }}></div>
        </div>
        <div className="overflow-x-hidden overflow-y-scroll no-scrollbar border-b-[1px solid text-wf-700] pt-4 pb-3 px-3 h-full flex flex-col gap-5">
            <div className="flex-1">
                <div className="flex flex-col gap-1">
                    {
                        menuItems?.map((item, i) => {
                            return (<SidebarMenuItem
                                key={i}
                                MenuIcon={item.menuIcon}
                                active={menuItemIsActive.index.includes(i)}
                                label={item.label}
                                badge={item.badge ?? 0}
                                dropdown={item.dropdown ?? []}
                                dropdownActive={menuItemIsActive.dropdown}
                                index={i}
                                handleIsActive={handleMenuItemIsActive}
                            />)
                        })
                    }
                </div>
            </div>
            <div className="absolute group-hover:opacity-0 bottom-0 transition-all duration-500 py-2 bg-[#0D0E12]">
                <button className="rounded-md px-4 py-2.5 bg-primary-500 cursor-pointer flex justify-center max-w-12">
                    <BoostIcon />
                </button>
            </div>
            <div className="min-w-[216px] rounded-xl bg-[#0D99FF14] border-[1px] border-[#0D99FF59] p-3 flex flex-col gap-4 opacity-0 group-hover:opacity-100 duration-500 transition-all">
                <p className="text-rg-md text-white">Upgrade Storage!</p>
                <div className="pb-1 flex flex-col gap-2.5">
                    <div className="flex flex-row">
                        <p className="w-full text-sm-md text-white">Storage</p>
                        <p className="text-nowrap text-sm-bd text-white">{storage}% left</p>
                    </div>
                    <div className="relative h-[5px] bg-[#B4DFFF] w-full rounded-full">
                        <div className="absolute h-[5px] bg-primary-500 rounded-full" style={{ width: `calc(${storage}%)` }}></div>
                    </div>
                </div>
                <Button type="button" isBtnPrimary={true}><img src="../../src/assets/boost-icon.svg" />Upgrade Storage</Button>
            </div>
        </div>
    </div>)
}

export default Sidebar