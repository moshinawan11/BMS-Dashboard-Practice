import DashboardLayout from "../../../layouts/DashboardLayout"
import StorageCard from "../components/StorageCard"
import FolderCard from "../../../components/FolderCard"
import RecentFilesTable from "../components/RecentFilesTable"

const storageStats = {
    documents: {
        files: 322,
        storage: "15 GB",
    },
    videos: {
        files: 92,
        storage: "190 GB",
    },
    music: {
        files: 222,
        storage: "88 GB",
    },
    images: {
        files: 361,
        storage: "22 GB",
    },
}

const storageFoldersColors = {
    documents: {
        primaryColor: "#0D99FF",
        secondaryColor: "#E7F5FF",
    },
    videos: {
        primaryColor: "#17C653",
        secondaryColor: "#E8F9EE",
    },
    music: {
        primaryColor: "#F8285A",
        secondaryColor: "#FEEAEF",
    },
    images: {
        primaryColor: "#F7AC16",
        secondaryColor: "#FEF7E8",
    },
}

const totalStorage = "600 GB"

const myPrivateVaults = [
    { title: "Finance", items: 3329 },
    { title: "Employee Documents", items: 3329 },
    { title: "Yearly Analysis", items: 3329 },
    { title: "Business Quotations", items: 3329 },
]

const recentFiles = [
    {
        fileName: "Design-guidelines",
        fileType: "docx",
        size: "8.95 MB",
        privacy: "Public",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },
    {
        fileName: "Design-guidelines",
        fileType: "xlsx",
        size: "8.95 MB",
        privacy: "Only me",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },
    {
        fileName: "Design-guidelines",
        fileType: "ppt",
        size: "8.95 MB",
        privacy: "Team",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },
    {
        fileName: "Design-guidelines",
        fileType: "pdf",
        size: "8.95 MB",
        privacy: "Only me",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },    {
        fileName: "Design-guidelines",
        fileType: "jpeg",
        size: "8.95 MB",
        privacy: "Team",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },    {
        fileName: "Design-guidelines",
        fileType: "mp4",
        size: "8.95 MB",
        privacy: "Team",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },    {
        fileName: "Design-guidelines",
        fileType: "mp3",
        size: "8.95 MB",
        privacy: "Public",
        lastModified: "27 Sep, 2024  -  08:42 AM",
    },
]

const Overview = () => {
    return (<DashboardLayout title="Overview" description="All of your files in one place" >
        <section className="px-4 py-3 flex flex-col gap-2.5">
            <div className="flex flex-row items-center">
                <p className="w-1/2 text-lg-md text-typography-500">Overview Storage</p>
            </div>
            <div className="grid gap-3.5 md:grid-cols-3 lg:grid-cols-4">
                {
                    Object.entries(storageStats).map((key, index) => {
                        return (<StorageCard key={index} title={key[0]} files={key[1].files} storage={key[1].storage} totalStorage={totalStorage} primaryColor={storageFoldersColors[key[0]].primaryColor} secondaryColor={storageFoldersColors[key[0]].secondaryColor} />)
                    })
                }
            </div>
        </section>
        <section className="px-4 py-3 flex flex-col gap-2.5">
            <div className="flex flex-row items-center">
                <p className="w-1/2 text-lg-md text-typography-500">My Private Vaults</p>
                <div className="w-1/2 text-end">
                    <button className="cursor-pointer text-sm-lt text-primary-500" type="button">See All</button>
                </div>
            </div>
            <div className="grid gap-3.5 md:grid-cols-3 lg:grid-cols-5">
                {
                    myPrivateVaults.map((folder, i) => {
                        return (<FolderCard key={i} title={folder.title} items={folder.items} />)
                    })
                }
            </div>
        </section>
        <section className="px-4 py-3 flex flex-col gap-2.5">
            <div className="flex flex-row items-center">
                <p className="w-1/2 text-lg-md text-typography-500">Recent Files</p>
                <div className="w-1/2 text-end">
                    <button className="cursor-pointer text-sm-lt text-primary-500" type="button">See All</button>
                </div>
            </div>
            {
                recentFiles.length > 0 ?
                    <RecentFilesTable recentFilesList={recentFiles}/>
                    :
                    <h1 className="text-typography-300">No recent files</h1>
            }
        </section>
    </DashboardLayout>)
}

export default Overview
