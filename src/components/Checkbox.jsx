import CheckboxIcon from "../assets/checkbox.svg?react"

const Checkbox = ({ id, name, title }) => {
    return (<label htmlFor={id ?? null} className="text-sm text-wf-600 peer-checked:text-primary-500 cursor-pointer flex flex-row-reverse justify-end flex-nowrap items-center gap-2">
        { title ?? "" }
        <input type="checkbox" name={name ?? null} id={id ?? null}
            className="peer hidden" />
        <div className="w-5 h-5 bg-wf-200 peer-checked:peer-hover:bg-primary-500 group-hover:bg-[#B4DFFF] peer-hover:bg-[#B4DFFF] peer-checked:bg-primary-500 rounded-xs flex justify-center items-center cursor-pointer">
            <CheckboxIcon />
        </div>
    </label>)
}

export default Checkbox