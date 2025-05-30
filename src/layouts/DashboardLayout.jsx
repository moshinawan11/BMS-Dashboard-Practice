import Sidebar from "../components/Sidebar"

import SearchIcon from "../../src/assets/search-icon.svg?react"
import DetailsIcon from "../../src/assets/details-icon.svg?react"
import NotificationIcon from "../../src/assets/notification-icon.svg?react"
import UserIcon from "../../src/assets/user-icon-2.svg?react"

const DashboardLayout = ({ title, description, children }) => {

    return (<div className="flex flex-row">
        <aside className="p-2 w-[88px]">
            <Sidebar />
        </aside>
        <div className="flex flex-col flex-1">
            <header className="px-[17px] py-4 flex flex-row items-center">
                <div className="flex flex-col gap-0.5 w-3/5">
                    <h5 className="text-h5-md text-typography-500">{title}</h5>
                    {
                        description &&
                        <p className="text-rg-lt text-typography-300">{description}</p>
                    }
                </div>
                <div className="flex flex-row flex-1 gap-4 justify-end">
                    <span className="group rounded-md p-2.5 bg-[#FFFFFF80] hover:bg-[#FFFFFFCC]"><SearchIcon className="group-hover:text-primary-500" /></span>
                    <span className="group rounded-md p-2.5 bg-[#FFFFFF80] hover:bg-[#FFFFFFCC]"><DetailsIcon className="group-hover:text-primary-500" /></span>
                    <span className="group rounded-md p-2.5 bg-[#FFFFFF80] hover:bg-[#FFFFFFCC]"><NotificationIcon className="group-hover:text-primary-500" /></span>
                    <span className="group rounded-md p-2.5 bg-[#FFFFFF80] hover:bg-[#FFFFFFCC]"><UserIcon className="group-hover:text-primary-500" /></span>
                </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    </div>)
}

export default DashboardLayout
