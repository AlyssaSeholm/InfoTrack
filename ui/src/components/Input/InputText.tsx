import { SetStateAction, useState } from "react"


function InputText({
    labelTitle,
    labelStyle,
    type,
    containerStyle,
    inputStyle,
    defaultValue,
    placeholder,
    updateFormValue,
    updateType
}: {
    labelTitle: string | null,
    labelStyle: string | null,
    type: string | null,
    containerStyle: string | null,
    inputStyle: string,
    defaultValue: string | null,
    placeholder: string | null,
    updateFormValue: Function | null,
    updateType: string | null
}) {

    const [value, setValue] = useState<string | null>(defaultValue)

    const updateInputValue = (val: SetStateAction<string | null>) => {
        setValue(val)
        if (updateFormValue !== null) { updateFormValue({ updateType, value: val }); }
    }

    return (
        <div className={`form-control w-full ${containerStyle} focus-within:px-2 px-3`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input
                type={type || "text"}
                value={value || ""}
                placeholder={placeholder || ""}
                onChange={(e) => updateInputValue(e.target.value)}
                className={"input w-full focus:input-accent input-primary input-bordered  "}
            />
        </div>
    )
}


export default InputText