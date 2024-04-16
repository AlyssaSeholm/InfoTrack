import { SetStateAction, useState } from "react"


function TextAreaInput(
    { labelTitle, labelStyle, containerStyle, inputStyle = "primary", defaultValue, placeholder, updateFormValue, updateType} :
    { labelTitle: string | null, labelStyle: string | null, type: string | null, containerStyle: string | null, inputStyle: string, defaultValue: string | null, placeholder: string | null, updateFormValue: Function | null, updateType: string | null}){

    const [value, setValue] = useState<string | null | undefined>(defaultValue)

    const updateInputValue = (val: SetStateAction<string | null | undefined>) => {
        setValue(val)
        if (updateFormValue !== null ) { updateFormValue({updateType, value : val}); }
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <textarea value={value || ""} className={"textarea textarea-bordered textarea-" + inputStyle + " w-full"} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}></textarea>
        </div>
    )
}


export default TextAreaInput