import { useState } from "react"


function ToggleInput({ labelTitle, labelStyle, type, containerStyle, inputStyle = "primary", defaultValue, placeholder, updateFormValue, updateType }
    : { labelTitle: string | null, labelStyle: string | null, type: string | null, containerStyle: string | null, inputStyle: string, defaultValue: boolean | undefined, placeholder: string | null, updateFormValue: Function | null, updateType: string | null }) {

    const [value, setValue] = useState(defaultValue)

    const updateToogleValue = () => {
        setValue(!value);
        if (updateFormValue !== null) { updateFormValue({ updateType, value: !value }); }
    }

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
                <input type="checkbox" className={"toggle toggle-" + inputStyle} checked={value} onChange={() => updateToogleValue()} />
            </label>
        </div>
    )
}


export default ToggleInput
