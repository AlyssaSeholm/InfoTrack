
// import axios from 'axios'
// import capitalize from 'capitalize-the-first-letter'
import React, { useState } from 'react'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'


function SelectBox(props: { labelTitle: any; labelDescription: any; defaultValue: any; containerStyle: any; placeholder: any; labelStyle: any; options: any; updateType: any; updateFormValue: any }){
    
    const {labelTitle, labelDescription, defaultValue, containerStyle, placeholder, labelStyle, options, updateType, updateFormValue} = props

    const [value, setValue] = useState(defaultValue || "")


    const updateValue = (newValue: string) =>{
        updateFormValue({updateType, value : newValue})
        setValue(newValue)
    }


    return (
        <div id='kittens' className={`inline-block ${containerStyle}`}>
            <label  className={`label  ${labelStyle}`}>
                <div className="label-text">{labelTitle}
                    {labelDescription && 
                    <div className="tooltip tooltip-right" data-tip={labelDescription}>
                        <InformationCircleIcon className='w-4 h-4'/>
                    </div> }
                </div>
            </label>

            <select className="select select-bordered w-full" value={value} onChange={(e) => updateValue(e.target.value)}>
                <option disabled value="PLACEHOLDER">{placeholder}</option>
                {
                    options.map((o: { value: any; name: any }, k: React.Key | null | undefined) => {
                        return <option value={o.value || o.name} key={k}>{o.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectBox
