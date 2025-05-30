import FileIcon from "../../../assets/file-icon.svg?react"
import EllipsisIcon from "../../../assets/ellipsis-icon.svg?react"

const StorageCard = ({title, files, storage, totalStorage, primaryColor, secondaryColor}) => {
    let storageVal = ""
    let totalStorageVal = ""
    for(const char of storage) {
        storageVal += char.match("[0-9]") ?? ""
    }
    for(const char of totalStorage) {
        totalStorageVal += char.match("[0-9]") ?? ""
    }
    let storagePerc = (storageVal * 100) / totalStorageVal
    return (<div className="rounded-lg p-5 flex flex-col gap-3.5 bg-white shadow-[0px,6px,25px,#2F3B440F]">
        <div className="flex flex-row justify-between items-center">
            <div className="rounded-md p-2.5 flex items-center justify-center" style={{ backgroundColor: `${secondaryColor}` }}><FileIcon style={{ color: `${primaryColor}` }} /></div>
            <div className="group rounded-lg px-[3px] py-2.5 cursor-pointer hover:bg-[#E7F5FF]"><EllipsisIcon className="text-typography-300 group-hover:text-primary-500" /></div>
        </div>
        <div className="flex flex-row gap-0.5 items-center">
            <p className="text-rg-rg text-typography-500 flex-1 capitalize">{title}</p>
            <p className="text-sm-lt text-typography-300">{files} Files</p>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-sm-lt text-typography-300">{storage} / {totalStorage}</p>
            <div className={`h-2.5 rounded-full relative`} style={{ backgroundColor: `${secondaryColor}` }}>
                <div className={`h-2.5 rounded-full absolute left-0`} style={{ width: `calc(${storagePerc}%)`, backgroundColor: `${primaryColor}` }}></div>
            </div>
        </div>
    </div>)
}

export default StorageCard
