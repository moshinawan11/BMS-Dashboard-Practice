import { useNavigate } from "react-router-dom"

import Button from '../../../components/Button'
import LoginSearchBar from '../components/LoginSearchBar'
import MessageIcon from '../../../assets/message-icon.svg?react'
import LoginLayout from "../../../layouts/LoginLayout"

const ForgotPass = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/login")
    }

    return (<LoginLayout title="Forgot password?" desc="Please enter your email address, we will send an OTP on that to reset your password.">
        <div className="px-2 sm:px-5 flex flex-col gap-5">
            <LoginSearchBar type={"text"} label={"Email Address"} name={"email"} LeftIcon={MessageIcon} />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3.5">
            <Button type="button" isBtnPrimary={false} onClick={handleNavigation}>Back to Login</Button>
            <Button type="submit" isBtnPrimary={true}><img src="../src/assets/send-icon.svg" alt="Send OTP" />Send OTP</Button>
        </div>
    </LoginLayout>)
}

export default ForgotPass