import React, { ReactNode } from 'react';

interface FloatingLabelProps {
    children: ReactNode;           // Child components
    labelText: string;             // Label text content [&:not(h1)]
}

const FloatingLabel: React.FC<FloatingLabelProps> = ({
    labelText = 'Label',
    children
}) => {

    return (
    // <div className="relative w-full min-w-[200px] h-10 bg-base-200 group-has-[ul]:">
    <>
        {children}
        <label className="
                flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                peer-placeholder-shown:text-base-content leading-tight 
                peer-focus:leading-tight 
                peer-disabled:text-transparent 
                peer-disabled:peer-placeholder-shown:text-base-content transition-all -top-1.5 
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
                peer-placeholder-shown:leading-[3.75] text-base-content 
                peer-focus:text-vase-content before:border-accent 
                peer-focus:before:!border-primary after:border-accent 
                peer-focus:after:!border-primary before:border-accent"
            >
            {labelText}
        </label>
        {/* <label className="
                flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                group-disabled:text-transparent 
                group-disabled:group-has-[ul]:text-base-content transition-all -top-1.5 
                text-sm text-[11px] 
                group-has-[ul]:text-base-content transition-text -top-1.5
                group-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                group-has-[ul]:before:border-transparent before:rounded-tl-md before:border-t 
                group-focus:before:border-t-2 before:border-l 
                group-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                group-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                group-has-[ul]:after:border-transparent after:rounded-tr-md after:border-t 
                group-focus:after:border-t-2 after:border-r 
                group-focus:after:border-r-2 after:pointer-events-none after:transition-all 
                group-disabled:after:border-transparent 

                leading-[3.75] text-base-content                 
                group-has-[ul]: leading-tight


                group-focus:text-vase-content before:border-accent 
                group-focus:before:!border-primary after:border-accent 
                group-focus:after:!border-primary before:border-accent
                "
            >
            {labelText}
        </label> */}
{/* 
        <label className="
                flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                group-has-[ul]:text-base-content leading-tight 
                leading-[3.75] text-base-content
                group-disabled:text-transparent 
                group-disabled:group-has-[ul]:text-base-content transition-all -top-1.5 
                group-focus:text-sm text-[11px] 
                group-has-[ul]:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                group-focus:before:border-transparent before:rounded-tl-md before:border-t 
                group-has-[ul]:before:border-t-2 before:border-l 
                group-has-[ul]:before:border-l-2 before:pointer-events-none before:transition-all 
                group-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                group-focus:after:border-transparent after:rounded-tr-md after:border-t 
                group-has-[ul]:after:border-t-2 after:border-r 
                group-has-[ul]:after:border-r-2 after:pointer-events-none after:transition-all 
                group-disabled:after:border-transparent 
                group-has-[ul]:text-base-content before:border-accent 
                group-has-[ul]:before:!border-primary after:border-accent 
                group-has-[ul]:after:!border-primary before:border-accent"
            >
            {labelText}
        </label> */}


        {/* BACKWARDS */}
         {/* <label className="
                flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                group-has-[ul]:text-base-content leading-tight 
                group-focus:leading-tight 
                group-disabled:text-transparent 
                group-disabled:group-has-[ul]:text-base-content transition-all -top-1.5 
                group-has-[ul]:text-sm text-[11px] 
                group-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                group-has-[ul]:before:border-transparent before:rounded-tl-md before:border-t 
                group-focus:before:border-t-2 before:border-l 
                group-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                group-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                group-has-[ul]:after:border-transparent after:rounded-tr-md after:border-t 
                group-focus:after:border-t-2 after:border-r 
                group-focus:after:border-r-2 after:pointer-events-none after:transition-all 
                group-disabled:after:border-transparent 
                group-has-[ul]:leading-[3.75] text-base-content 
                group-focus:text-vase-content before:border-accent 
                group-focus:before:!border-primary after:border-accent 
                group-focus:after:!border-primary before:border-accent"
            >
            {labelText}
        </label> */}
         {/* <label className="
                flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                group-has-[ul]:text-base-content leading-tight 
                group-focus:leading-tight 
                group-disabled:text-transparent 
                group-disabled:group-has-[ul]:text-base-content transition-all -top-1.5 
                group-has-[ul]:text-sm text-[11px] 
                group-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                group-has-[ul]:before:border-transparent before:rounded-tl-md before:border-t 
                group-focus:before:border-t-2 before:border-l 
                group-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                group-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                group-has-[ul]:after:border-transparent after:rounded-tr-md after:border-t 
                group-focus:after:border-t-2 after:border-r 
                group-focus:after:border-r-2 after:pointer-events-none after:transition-all 
                group-disabled:after:border-transparent 
                group-has-[ul]:leading-[3.75] text-base-content 
                group-focus:text-vase-content before:border-accent 
                group-focus:before:!border-primary after:border-accent 
                group-focus:after:!border-primary before:border-accent"
            >
            {labelText}
        </label> */}



        {/* <label className="
        flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
        group-focus: leading-[3.75] leading-[3.75]
        group-disabled:text-transparent 
        group-focus: text-sm text-[11px] 
        
        group-focus:before:border-transparent before:rounded-tl-md before:border-t 
        group-focus:before:border-l-2 before:pointer-events-none before:transition-all 
        group-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
        
        group-focus:after:border-transparent after:rounded-tr-md after:border-t 
        group-focus:after:border-r-2 after:pointer-events-none after:transition-all 
        group-disabled:after:border-transparent 
        group-focus:before:!border-primary after:border-accent 
        group-focus:after:!border-primary before:border-accent
        
        group-has-[ul]:leading-tight
        group-has-[ul]:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
        group-has-[ul]:before:border-t-2 before:border-l 
        group-has-[ul]:after:border-t-2 after:border-r 
        group-has-[ul]:text-sm text-base-content leading-tight 
        group-has-[ul]:text-base-content text-base-content 
        group-has-[ul]:leading-[3.75] group-focus:text-vase-content before:border-accent "
>
    {labelText}
</label> */}
        {/* <label className="
                flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                group-has-[ul]:text-base-content leading-tight 
                peer-focus:leading-tight 
                peer-disabled:text-transparent 
                peer-disabled:group-has-[ul]:text-base-content transition-all -top-1.5 
                group-has-[ul]:text-sm text-[11px] 
                peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                group-has-[ul]:before:border-transparent before:rounded-tl-md before:border-t 
                peer-focus:before:border-t-2 before:border-l 
                peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                group-has-[ul]:after:border-transparent after:rounded-tr-md after:border-t 
                peer-focus:after:border-t-2 after:border-r 
                peer-focus:after:border-r-2 after:pointer-events-none after:transition-all 
                peer-disabled:after:border-transparent 
                group-has-[ul]:leading-[3.75] text-base-content 
                peer-focus:text-vase-content before:border-accent 
                peer-focus:before:!border-primary after:border-accent 
                peer-focus:after:!border-primary before:border-accent"
            >
            {labelText}
        </label> */}
        </>
    // </div>

    // works with input
    // <div className="relative w-full min-w-[200px] h-10 bg-base-200">
    //     {children}
    //     <label className="
    //             flex w-full h-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
    //             peer-placeholder-shown:text-base-content leading-tight 
    //             peer-focus:leading-tight 
    //             peer-disabled:text-transparent 
    //             peer-disabled:peer-placeholder-shown:text-base-content transition-all -top-1.5 
    //             peer-placeholder-shown:text-sm text-[11px] 
    //             peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
    //             peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t 
    //             peer-focus:before:border-t-2 before:border-l 
    //             peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
    //             peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
    //             peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
    //             peer-focus:after:border-t-2 after:border-r 
    //             peer-focus:after:border-r-2 after:pointer-events-none after:transition-all 
    //             peer-disabled:after:border-transparent 
    //             peer-placeholder-shown:leading-[3.75] text-base-content 
    //             peer-focus:text-vase-content before:border-accent 
    //             peer-focus:before:!border-primary after:border-accent 
    //             peer-focus:after:!border-primary before:border-accent"
    //         >
    //         {labelText}
    //     </label>
    // </div>

    );
};

export default FloatingLabel;