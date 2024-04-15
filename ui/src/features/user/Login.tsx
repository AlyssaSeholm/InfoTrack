import { useState, useRef, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import { RootState } from '../../app/store'
import { AppDispatch } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux'
import { fetch_User_ByEmail, hasUserProfile, selectUserEmail, selectUserError, selectUserLoading } from './userSlice'
import { setPageTitle } from '../common/headerSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';

function Login() {
    const user_error = useSelector(selectUserError);
    const user_loading = useSelector(selectUserLoading);
    const user_email = useSelector(selectUserEmail);
    const has_profile = useSelector(hasUserProfile);

    const INITIAL_LOGIN_OBJ = {
        password: "",
        emailId: user_email ?? ""
    }

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    // const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorMessage("")

        if (loginObj.emailId.trim() === "") { return setErrorMessage("Email Id is required! (use any value)"); }
        if (loginObj.password.trim() === "") { return setErrorMessage("Password is required! (use any value)"); }
        else {
            try {
                const actionResult = await dispatch(fetch_User_ByEmail(loginObj.emailId.trim()));
                // Unwrap the result to handle it directly
                const user = unwrapResult(actionResult);
                if (!user) {
                    setErrorMessage("User not found. Please register first.");
                    return;
                }
                // If we have a user, possibly do something with the user
                // Then, dispatch setPageTitle or any other synchronous actions
                // dispatch(setEmail(loginObj.emailId.trim()));
                
                // Redirect after successful login
                navigate('/app/dashboard');
            } catch (err) {
                // If an error occurs, set an error message
                // err could be typed based on what your async thunk rejects
                setErrorMessage("Login failed. Please check your credentials.");
            }
            // dispatch(fetch_User_ByEmail(loginObj.emailId.trim()) as any);
            // dispatch(setPageTitle(loginObj.emailId.trim()) as any);

            // setLoading(true)
            // // Call API to check user credentials and save token in localstorage
            // localStorage.setItem("token", "DumyTokenHere")

            // setLoading(false)
            // window.location.href = '/app/dashboard '
        }
    }

    const updateFormValue = ({ updateType, value }: { updateType: string, value: any }) => {
        setErrorMessage("")
        setLoginObj({ ...loginObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-100 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  bg-base-100 shadow-xl">
                <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                        <form onSubmit={(e) => submitForm(e)}>

                            <div className="mb-4">
                                <InputText type="emailId" defaultValue={loginObj.emailId} inputStyle='primary' updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} labelStyle={null} placeholder={null} />

                                <InputText defaultValue={loginObj.password} type="password" inputStyle='primary' updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} labelStyle={null} placeholder={null} />

                            </div>

                            <div className='text-right text-primary'><Link to="/forgot-password"><span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
                            </div>

                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                            <button type="submit" className={"btn mt-2 w-full btn-primary hover:shadow-lg" + (user_loading ? " loading" : "")}>Login</button>

                            <div className='text-center mt-4'>
                                Don't have an account yet?
                                <Link to="/register">
                                    <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                                        Register
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

function setEmail(arg0: any): any {
    throw new Error('Function not implemented.')
}
