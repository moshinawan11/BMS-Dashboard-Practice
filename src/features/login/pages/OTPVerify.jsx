import { useNavigate } from "react-router-dom"

import Button from "../../../components/Button"
import LoginLayout from "../../../layouts/LoginLayout"
import UnderlinedButton from "../../../components/UnderlinedButton"

const OTPVerify = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/login")
    }

    return (<LoginLayout title={"OTP Verification"} desc={<span>We send an OTP on your email <span className="text-primary-500">“useremil@gmail.com”</span>, Please enter OTP to continue</span>}>
        <div className="px-2 sm:px-5 flex flex-col gap-5">
            <div className="flex flex-row justify-center gap-2">
                {[...Array(6)].map((item, index) => {
                    return <input key={index} type="text" className="bg-[#F7F9FC] hover:bg-wf-200 active:bg-wf-200 focus:bg-wf-200 focus-visible:outline-none rounded-md px-4 py-3 flex-1 w-10 text-center" placeholder="-" />
                })}
            </div>
            <div className="text-center">
                <UnderlinedButton>Resend OTP?</UnderlinedButton>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3.5">
            <Button type="button" isBtnPrimary={false} onClick={handleNavigation}>Back To Login</Button>
            <Button type="submit" isBtnPrimary={true}><img src="../src/assets/verified-icon.svg" alt="Verify OTP" />Verify OTP</Button>
        </div>
    </LoginLayout>)
}

export default OTPVerify