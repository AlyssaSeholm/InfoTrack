import React, { ReactNode } from 'react';

interface FloatingLabelProps {
    children: ReactNode;           // Children that trigger the tooltip
    labelText: string;                 // Label text content
}

const FloatingLabel: React.FC<FloatingLabelProps> = ({
    labelText = 'Label',
    children
}) => {

    return (
//         <div class="relative h-11 w-full min-w-[200px]">
//     <input placeholder="Standard"
//       class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
//     <label
//       class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//       Standard
//     </label>
//   </div>
<div className="relative w-full min-w-[200px] h-10">
    {/* <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /> */}
      {children}
      <label className="
            flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
            peer-placeholder-shown:text-blue-gray-500 leading-tight 
            peer-focus:leading-tight 
            peer-disabled:text-transparent 
            peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 
            peer-placeholder-shown:text-sm text-[11px] 
            peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
            peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t 
            peer-focus:before:border-t-2 before:border-l 
            peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
            peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
            peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
            peer-focus:after:border-t-2 after:border-r 
            peer-focus:after:border-r-2 after:pointer-events-none after:transition-all 
            peer-disabled:after:border-transparent 
            peer-placeholder-shown:leading-[3.75] text-gray-500 
            peer-focus:text-gray-900 before:border-blue-gray-200 
            peer-focus:before:!border-gray-900 after:border-blue-gray-200 
            peer-focus:after:!border-gray-900"
        >
        {labelText}
    </label>
  </div>
        // <Tooltip 
        //     id='delayedtooltip'
        //     open={showTooltip}
        //     animate={{
        //         mount: { scale: 1, y: 0 },
        //         unmount: { scale: 0, y: 25 },
        //     }}
        //     content={content}
        //     placement={placement}             
        //     >
        //     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        //         {children}
        //     </div>
        // </Tooltip>
        
    );
};

export default FloatingLabel;