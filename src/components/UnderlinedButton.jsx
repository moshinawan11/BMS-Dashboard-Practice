const UnderlinedButton = ({children, ...props}) => {
    return (<button className="font-normal text-sm leading-5 underline text-primary-500 cursor-pointer text-nowrap" {...props}>{children}</button>)
}

export default UnderlinedButton