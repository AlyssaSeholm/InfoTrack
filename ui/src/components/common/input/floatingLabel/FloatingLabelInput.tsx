import React from 'react';
import FloatingLabel from './FloatingLabel';

interface FloatingLabelInputProps {
    labelText: string;                 // Label text content,
    placeholderTxt: string;
    value: string;
    setValue: Function;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
    labelText = 'Label',
    placeholderTxt = ' ',
    value,
    setValue
}) => {

// TODO: fix color scheme
    return (
        <FloatingLabel labelText={labelText} >
            <input //outlined styling
                className={`peer w-full h-full bg-transparent text-base-content font-sans font-normal outline outline-0 
                    focus:outline-0 
                    border-accent
                    disabled:bg-blue-gray-50 
                    disabled:border-0 transition-all 
                    placeholder-shown:border 
                    placeholder-shown:border-accent 
                    placeholder-shown:border-t-accent border 
                    focus:border-2 border-t-transparent 
                    focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-primary 
                    focus:border-primary
                    bg-base-200`}                
                placeholder={placeholderTxt}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </FloatingLabel>
    );
};

export default FloatingLabelInput;


//Default Outlined Styling
    // className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 
    // focus:outline-0 
    // disabled:bg-blue-gray-50 
    // disabled:border-0 transition-all 
    // placeholder-shown:border 
    // placeholder-shown:border-blue-gray-200 
    // placeholder-shown:border-t-blue-gray-200 border 
    // focus:border-2 border-t-transparent 
    // focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 
    // focus:border-gray-900`}   

//Standard Styling
// className={`peer h-full w-full border-b border-blue-gray-200 bg-transparent 
//             pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all 
//             placeholder-shown:border-blue-gray-200 
//             focus:border-gray-500 
//             focus:outline-0 
//             disabled:border-0 
//             disabled:bg-blue-gray-50 
//             placeholder:opacity-0 
//             focus:placeholder:opacity-100`}
