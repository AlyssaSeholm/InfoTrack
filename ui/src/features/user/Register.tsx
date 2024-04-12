import {useState, useRef, FormEvent} from 'react'
import {Link} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import '../../assets/css/global.css'

function Register(){

    const INITIAL_REGISTER_OBJ = {
        name : "",
        password : "",
        emailId : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)
    const [passwordFeedback, setPasswordFeedback] = useState({ lengthValid: false, characterCount: 0 });
    const minCharacterCount: number = 8;
    const maxCharacterCount: number = 24;
    var passwordRuleEmphasized = false;

    const submitForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setErrorMessage("")

        if(registerObj.name.trim() === "")return setErrorMessage("Name is required! (use any value)")
        if(registerObj.emailId.trim() === "")return setErrorMessage("Email Id is required! (use any value)")
        if(registerObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        else{
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/dashboard'
        }
    }

    const updateFormValue = ({updateType, value}: {updateType: string, value: any}) => {
        setErrorMessage("")
        setRegisterObj({...registerObj, [updateType] : value})

        if(updateType === "password") {
            const lengthValid = value.length >= minCharacterCount && value.length <= maxCharacterCount;
            const characterCount = value.length;
            setPasswordFeedback({ lengthValid, characterCount });
        }
    }

    const triggerWiggling = () : void => {
        console.log('triggerWiggling');
        passwordRuleEmphasized =  passwordFeedback.characterCount < minCharacterCount || passwordFeedback.characterCount > maxCharacterCount; // Set value to true immediately
        console.log(`passwordRuleEmphasized: ${passwordRuleEmphasized}`);
        setTimeout(() => {
            passwordRuleEmphasized = false; // Set value to false after 2 seconds
            console.log(`passwordRuleEmphasized: ${passwordRuleEmphasized}`);
        }, 2000);
    }
    const emphasizePasswordRule = () : boolean => {
        return passwordRuleEmphasized;
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            
            <div className="card mx-auto w-full max-w-5xl  bg-base-100 shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1   rounded-xl">
                <div className=''>
                        <LandingIntro />
                </div>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText defaultValue={registerObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} inputStyle={'primary'} labelStyle={null} type={null} placeholder={null}/>

                            <InputText defaultValue={registerObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} inputStyle={'primary'} labelStyle={null} type={null} placeholder={null}/>

                            {/* <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} inputStyle={'primary'} labelStyle={null} placeholder={null}/> */}
                            <div className="relative mt-4">
                                
                                <div className="label">
                                    <span className="label-text">Password:</span>
                                </div>
                                {/* <input
                                    className="input primary input-primary w-full input-bordered "
                                    defaultValue={registerObj.password}
                                    onChange={(e) => updateFormValue({ updateType: "password", value: e.target.value })}
                                    onBlur={() => triggerWiggling()}
                                    type="password"
                                    placeholder="Password"
                                /> */}
                                <label className="input input-primary input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                    {/* <input type="password" className="grow" value="password" /> */}
                                    <input
                                    className="grow"
                                    defaultValue={registerObj.password}
                                    onChange={(e) => updateFormValue({ updateType: "password", value: e.target.value })}
                                    onBlur={() => triggerWiggling()}
                                    type="password"
                                    placeholder="Password"
                                />
                                </label>
                                <span className="absolute right-2 top-3 text-sm">
                                    {`${passwordFeedback.characterCount}/24`}
                                </span>
                            </div>
                            <div className={`mt-1 ml-3 flex items-center ${emphasizePasswordRule() ? 'animate-wiggle' : ''}`}>
                                {registerObj.password && (
                                    passwordFeedback.lengthValid
                                    ? <span className="text-green-400 mr-2">✔</span> // Green checkmark icon
                                    : <span className="text-red-400 mr-2">✖</span> // Red X icon
                                )}
                                {/* <span className={`${!passwordFeedback.lengthValid && registerObj.password ? 'font-bold' : ''}`}> */}
                                <span className={`font-light`}>
                                    Password length needs to be 8-24 characters.
                                </span>
                            </div>
                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

                        <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register