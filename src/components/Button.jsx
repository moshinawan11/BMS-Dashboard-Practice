const Button = ({ type, isBtnPrimary, children, ...props }) => {
    const primaryClasses = "cursor-pointer rounded-md px-3 md:px-5 py-2.5 flex flex-row justify-center items-center gap-2 font-medium text-base md:text-lg text-nowrap "
    let secondaryClasses
    isBtnPrimary ? 
    secondaryClasses =  "bg-primary-500 hover:bg-primary-600 text-wf-100" :
    secondaryClasses = "bg-wf-200 hover:bg-wf-300 text-typography-300 hover:text-typography-500"
    return (<button className={primaryClasses + secondaryClasses} {...props}>{children}</button>)
}

export default Button
