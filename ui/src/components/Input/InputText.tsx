import { FC, SetStateAction, useState } from "react"


interface InputTextProps {
    labelTitle: string | null, 
    labelStyle: string | null, 
    type: string | null, 
    containerStyle: string | null, 
    inputStyle: string, 
    defaultValue: string | null, 
    placeholder: string | null, 
    updateFormValue: Function | null, 
    updateType: string | null ,
}

const InputText: FC<InputTextProps> = ( props ) => {

    const [value, setValue] = useState<string | null>(props.defaultValue)

    const updateInputValue = (val: SetStateAction<string | null>) => {
        setValue(val)
        if (props.updateFormValue !== null) { props.updateFormValue({ updateType: props.updateType, value: val }); }
    }

    return (
        <div className={`form-control w-full ${props.containerStyle} focus-within:px-2 px-3`}>
            <label className="label">
                <span className={"label-text text-base-content " + props.labelStyle}>{props.labelTitle}</span>
            </label>
            <input
                type={props.type || "text"}
                value={value || ""}
                placeholder={props.placeholder || ""}
                onChange={(e) => updateInputValue(e.target.value)}
                className={"input w-full focus:input-accent input-primary input-bordered  "}
            />
        </div>
    )
}


export default InputText