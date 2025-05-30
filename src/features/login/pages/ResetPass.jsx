import { useNavigate } from 'react-router-dom'

import LockIcon from '../../../assets/lock-icon.svg?react'
import VisibleIcon from '../../../assets/eye-icon.svg?react'
import HiddenIcon from '../../../assets/eye-icon-hide.svg?react'
import LoginSearchBar from '../components/LoginSearchBar'
import Button from '../../../components/Button'
import LoginLayout from '../../../layouts/LoginLayout'

const ResetPass = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/login")
    }

    return (<LoginLayout title={"Reset Your Password"} desc={"Enter and confirm your new password below to complete the reset process."}>
        <div className="px-2 sm:px-5 flex flex-col gap-5">
            <LoginSearchBar type={"password"} label={"New Password"} name={"newPassword"} LeftIcon={LockIcon} RightIconA={VisibleIcon} RightIconB={HiddenIcon} />
            <LoginSearchBar type={"password"} label={"Confirm New Password"} name={"confirmNewPassword"} LeftIcon={LockIcon} RightIconA={VisibleIcon} RightIconB={HiddenIcon} />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3.5">
            <Button type="button" isBtnPrimary={false} onClick={handleNavigation}>Back To Login</Button>
            <Button type="submit" isBtnPrimary={true}><img src="../src/assets/verified-icon.svg" alt="Reset Password" />Reset Password</Button>
        </div>
    </LoginLayout>)
}

export default ResetPass