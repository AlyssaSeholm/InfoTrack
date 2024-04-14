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
    placeholderTxt = 'testing',
    value,
    setValue
}) => {

//TODO: fix color scheme
    return (
        <FloatingLabel labelText={labelText} >
            <input
                className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 
                    focus:outline-0 
                    disabled:bg-blue-gray-50 
                    disabled:border-0 transition-all 
                    placeholder-shown:border 
                    placeholder-shown:border-blue-gray-200 
                    placeholder-shown:border-t-blue-gray-200 border 
                    focus:border-2 border-t-transparent 
                    focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 
                    focus:border-gray-900`}
                
                placeholder={placeholderTxt}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </FloatingLabel>
    );
};

export default FloatingLabelInput;

