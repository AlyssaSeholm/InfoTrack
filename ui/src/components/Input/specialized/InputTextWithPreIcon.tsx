import { FC, SetStateAction, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


interface InputTextWithPreIconProps {
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


const InputTextWithPreIcon: FC<InputTextWithPreIconProps> = ( props ) => {
    const {
        labelTitle,
        labelStyle,
        type,
        containerStyle,
        inputStyle,
        defaultValue,
        placeholder,
        updateFormValue,
        updateType
    } = props;

    const [value, setValue] = useState<string | null>(defaultValue)

    const updateInputValue = (val: SetStateAction<string | null>) => {
        setValue(val)
        if (updateFormValue !== null) { updateFormValue({ updateType, val }); }
    }

    return (
        <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
            <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                    <FontAwesomeIcon icon={faUserCircle} />
                </span>
            </div>
            <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative font-roboto text-xl outline-none"
                placeholder={placeholder || ""}
                value={value || ""}
                onChange={(e) => updateInputValue(e.target.value)}
            />
        </div>
    );

    // return (
    //     <div className={`form-control w-full ${props.containerStyle} focus-within:px-2 px-3`}>
    //         <label className="label">
    //             <span className={"label-text text-base-content " + props.labelStyle}>{props.labelTitle}</span>
    //         </label>
    //         <input
    //             type={props.type || "text"}
    //             value={value || ""}
    //             placeholder={props.placeholder || ""}
    //             onChange={(e) => updateInputValue(e.target.value)}
    //             className={"input w-full focus:input-accent input-primary input-bordered  "}
    //         />
    //     </div>
    // )
}

InputTextWithPreIcon.defaultProps = {
    labelTitle: '',
    labelStyle: '',
    type: 'text',
    containerStyle: '',
    defaultValue: '',
    placeholder: 'Enter text',
    updateFormValue: () => {},
    updateType: 'simple'
};


export default InputTextWithPreIcon
