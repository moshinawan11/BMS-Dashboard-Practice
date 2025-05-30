import { useState } from 'react'

const LoginSearchBar = ({ type, label, name, LeftIcon, RightIconA, RightIconB }) => {
    const [showPass, toggleShowPass] = useState(false)
    let iconClasses = "absolute cursor-pointer text-typography-200 group-active:text-typography-500 group-focus-within:text-typography-500"
    return (<div className="flex flex-col gap-2">
        <label htmlFor={name} className="font-normal text-lg text-wf-700">{label}
            <div className="group relative flex items-center">
                <LeftIcon className={iconClasses + " left-4"} />
                {RightIconA && RightIconB ? showPass ?
                    <RightIconA className={iconClasses + " right-4"} onClick={() => toggleShowPass(!showPass)} /> :
                    <RightIconB className={iconClasses + " right-4"} onClick={() => toggleShowPass(!showPass)} /> : ""}
                <input type={type === "password" ? showPass ? "text" : "password" : type} id={name} name={name} placeholder="Please enter" className="pl-11 pr-4 py-3 bg-[#F7F9FC] rounded-md w-full cursor-pointer hover:bg-wf-200 active:bg-wf-200 focus:bg-wf-200 focus-visible:outline-none" />
            </div>
        </label>
    </div>)
}

export default LoginSearchBar
