import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import { selectUserProfile } from "../../user/userSlice"
import DelayedTooltip from "../../../components/common/delayedTooltip/DelayedTooltip"

function ProfileSettings(){
    const profile = useSelector(selectUserProfile);

    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType}: {updateType: string, value: any}) => {
        console.log(updateType)
    }

    return(
        <>
            {/* #DevNote: this currently isn't wired up */}
            <TitleCard title="Profile Settings" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="First Name" defaultValue={profile?.firstName || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Last Name" defaultValue={profile?.lastName || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Email" defaultValue={profile?.email || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Title" defaultValue={profile?.role || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="City" defaultValue={profile?.city || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="State" defaultValue={profile?.state || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <TextAreaInput labelTitle="About" defaultValue={profile?.about || ""} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue={profile?.language || "English"} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                    <InputText labelTitle="Timezone" defaultValue={profile?.timezone || "EST"} inputStyle="primary" updateFormValue={updateFormValue} labelStyle={null} type={null} containerStyle={null} placeholder={null} updateType={null}/>
                </div>

                <DelayedTooltip content="This isn't wired up." placement={"top"}>
                    <div className="mt-16">
                        <button disabled className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button>
                    </div>
                </DelayedTooltip>
            </TitleCard>
        </>
    )
}


export default ProfileSettings