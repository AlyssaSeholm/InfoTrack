import { FC, useState } from "react"


interface ChipProps {
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

const Chip: FC<ChipProps> = ( props ) => {

    const [value] = useState<string | null>(props.defaultValue)
    

    return (
        <div className={`form-control w-full ${props.containerStyle} focus-within:px-2 px-3`}>
            <label className="label">
                <span className={"label-text text-base-content " + props.labelStyle}>{props.labelTitle}</span>
            </label>
            <input
                type={props.type || "text"}
                value={value || ""}
                placeholder={""}
                onChange={(e) => (e.target.value)}
                className={"input w-full focus:input-accent input-primary input-bordered  "}
            />
        </div>
    )
}


export default Chip