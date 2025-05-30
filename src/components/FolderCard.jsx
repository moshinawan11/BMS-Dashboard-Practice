import EllipsisIcon from "../assets/ellipsis-icon.svg?react"
import FolderIcon from "../assets/folder-icon.svg?react"

const FolderCard = ({ title, items }) => {
    return (<div className="group shadow-[0px,6px,25px,#2F3B440F]">
        <div className="rounded-tl-xl rounded-tr-[50px] bg-[#F7F9FC] min-h-8 w-1/2 max-w-48 translate-y-2 relative z-0">
        </div>
        <div className="relative group bg-white p-5 rounded-xl flex flex-col gap-3.5 items-center">
            <div className="absolute inset-0 bg-[#E7F5FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl pointer-events-none z-10" />
            <div className="flex flex-row w-full justify-between items-center">
                <div className="rounded-md p-2.5 flex items-center justify-center bg-[#B4DFFF4D]"><FolderIcon /></div>
                <div className="rounded-lg px-[3px] py-2.5 cursor-pointer"><EllipsisIcon className="text-typography-300 group-hover:text-primary-500" /></div>
            </div>
            <div className="flex flex-col w-full gap-1">
                <p className="text-rg-rg text-typography-500 cursor-pointer group-hover:text-primary-500">{title}</p>
                <p className="text-sm-lt text-typography-300">{items} Items</p>
            </div>
        </div>
    </div >)
}

export default FolderCard