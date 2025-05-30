import { useNavigate } from 'react-router-dom'

import LoginLayout from '../../../layouts/LoginLayout'
import UserIcon from '../../../assets/user-icon.svg?react'
import MessageIcon from '../../../assets/message-icon.svg?react'
import LockIcon from '../../../assets/lock-icon.svg?react'
import VisibleIcon from '../../../assets/eye-icon.svg?react'
import HiddenIcon from '../../../assets/eye-icon-hide.svg?react'
import CheckboxIcon from '../../../assets/checkbox.svg?react'
import LoginSearchBar from '../components/LoginSearchBar'
import Button from '../../../components/Button'
import UnderlinedButton from '../../../components/UnderlinedButton'

const Login = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/login/forgot-password")
    }

    return (<LoginLayout title={"Login to your account"} desc={"Please enter your credentials to continue"}>
        <div className="px-2 sm:px-5 flex flex-col gap-5">
            <LoginSearchBar type={"text"} label={"Email or Username"} name={"email"} LeftIcon={MessageIcon} />
            <LoginSearchBar type={"password"} label={"Password"} name={"password"} LeftIcon={LockIcon} RightIconA={VisibleIcon} RightIconB={HiddenIcon} />
            <LoginSearchBar type={"text"} label={"Client Account"} name={"clientAccount"} LeftIcon={UserIcon} />
            <div className="flex flex-row justify-between">
                <div>
                    <label htmlFor="remember" className="text-sm text-wf-600 peer-checked:text-primary-500 cursor-pointer w-full flex flex-row-reverse justify-end flex-nowrap items-center gap-2">
                        Remember Me
                        <input type="checkbox" name="remember" id="remember"
                            className="peer hidden" />
                        <div className="w-5 h-5 bg-wf-200 peer-checked:peer-hover:bg-primary-500 peer-hover:bg-[#B4DFFF] peer-checked:bg-primary-500 rounded-xs flex justify-center items-center cursor-pointer">
                            <CheckboxIcon />
                        </div>
                    </label>
                </div>
                <UnderlinedButton onClick={handleNavigation}>Forgot Password?</UnderlinedButton>
            </div>
        </div>
        <div className="flex justify-center">
            <Button type="submit" isBtnPrimary={true}><img src="src/assets/signin.svg" alt="Sign in" />Sign In</Button>
        </div>
    </LoginLayout>)
}

export default Login
