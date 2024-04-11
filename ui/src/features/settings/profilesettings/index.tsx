import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToggleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}: {updateType: string, value: any}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Profile Settings" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Name" defaultValue="Alex" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Email Id" defaultValue="alex@dashwind.com" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Title" defaultValue="UI/UX Designer" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Place" defaultValue="California" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="English" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Timezone" defaultValue="IST" inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <ToggleInput updateType="syncData" labelTitle="Sync Data" inputStyle="primary" defaultValue={true} updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings