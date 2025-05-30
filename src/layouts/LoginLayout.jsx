const LoginLayout = ({ title, desc, children }) => {
    return (<div className="flex justify-center items-center">
        <div className="bg-white max-w-lg rounded-xl py-11 px-2 sm:px-6 flex flex-col gap-11 shadow-[0_6px_25px_#2F3B440F]">
            <img src="../src/assets/logo.svg" alt="Site Logo" />
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl sm:text-3xl leading-9 text-wf-800 text-center">{title}</h1>
                <p className="font-normal text-base sm:text-lg text-wf-600 text-center">{desc}</p>
            </div>
            {children}
        </div>
    </div>)
}

export default LoginLayout