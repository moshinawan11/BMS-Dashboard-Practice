import WordLogo from "../../../assets/word-logo.svg?react"
import ExcelLogo from "../../../assets/excel-logo.svg?react"
import PDFLogo from "../../../assets/pdf-logo.svg?react"
import MP3Logo from "../../../assets/mp3-logo.svg?react"
import JPEGLogo from "../../../assets/jpeg-logo.svg?react"
import MP4Logo from "../../../assets/mp4-logo.svg?react"
import PowerpointLogo from "../../../assets/powerpoint-logo.svg?react"
import GlobeIcon from "../../../assets/globe-icon.svg?react"
import UsersIcon from "../../../assets/users-icon.svg?react"
import LockIcon from "../../../assets/lock-icon.svg?react"
import ShareIcon from "../../../assets/share-icon.svg?react"
import OptionsIcon from "../../../assets/options-sm.svg?react"
import Checkbox from "../../../components/Checkbox"
import TableHeading from "./TableHeading"

const RecentFilesTable = ({ recentFilesList }) => {
    const fileIcon = {
        docx: <WordLogo />,
        xlsx: <ExcelLogo />,
        ppt: <PowerpointLogo />,
        pdf: <PDFLogo />,
        mp3: <MP3Logo />,
        jpeg: <JPEGLogo />,
        mp4: <MP4Logo />,
    }

    const privacyIcon = {
        "Public": <GlobeIcon />,
        "Only me": <LockIcon />,
        "Team": <UsersIcon />
    }

    return (<table className="table border-separate border-spacing-y-2">
        <thead>
            <tr className="rounded-lg">
                <th className="py-2.5 ps-2.5">
                    <div className="relative flex">
                        <Checkbox name="select" />
                    </div>
                </th>
                <th className="py-2.5">
                    <TableHeading title="Name" />
                </th>
                <th className="py-2.5">
                    <TableHeading title="Size" />
                </th>
                <th className="py-2.5">
                    <TableHeading title="Shared" />

                </th>
                <th className="py-2.5">
                    <TableHeading title="Last Modified" />

                </th>
                <th className="py-2.5 pe-2.5">
                    <TableHeading title="Actions" />
                </th>
            </tr>
        </thead>
        <tbody>
            {
                recentFilesList.map((file, index) => {
                    return (<tr key={index} className="group rounded-lg bg-white">
                        <td className="py-2.5 ps-2.5 rounded-l-lg">
                            <div className="flex">
                                <Checkbox name="select" />
                            </div>
                        </td>
                        <td className="py-2.5">
                            <div className="flex flex-row items-center gap-2.5">
                                {fileIcon[file.fileType]}
                                <span className="text-rg-rg text-typography-500 group-hover:text-primary-500">
                                    {file.fileName}
                                    <span className="text-sm-lt text-typography-300">.{file.fileType}
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td className="py-2.5 text-sm-lt text-typography-300">{file.size}</td>
                        <td className="py-2.5"><div className="flex flex-row items-center text-sm-lt text-primary-500 gap-2.5">{privacyIcon[file.privacy]}{file.privacy}
                        </div>
                        </td>
                        <td className="py-2.5 text-sm-lt text-typography-300">{file.lastModified}</td>
                        <td className="py-2.5 pe-2.5 rounded-r-lg">
                            <div className="flex flex-row gap-2.5">
                                <span className="rounded-sm h-8 w-8 cursor-pointer flex justify-center items-center active:bg-linear-to-tr from-[#0D99FF] to-[#90D0FF] group/wrapper">
                                    <ShareIcon className="text-typography-300 group-hover:text-primary-500 group-active/wrapper:text-white" />
                                </span>
                                <span className="rounded-sm h-8 w-8 cursor-pointer flex justify-center items-center active:bg-linear-to-tr from-[#0D99FF] to-[#90D0FF] group/wrapper">
                                    <OptionsIcon className="text-typography-300 group-hover:text-primary-500 group-active/wrapper:text-white" />
                                </span>
                            </div>
                        </td>
                    </tr>)
                })
            }
        </tbody>
    </table>)
}

export default RecentFilesTable