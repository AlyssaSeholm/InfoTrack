import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardFooter, CardHeader, Select, Option } from '@material-tailwind/react';
import { FC, SetStateAction, useEffect, useState } from 'react';

import { fas, faB } from '@fortawesome/free-solid-svg-icons';
import { lookupIconByStringName } from '../../../utilities/iconUtilities';
import { selectQueryList, selectQueryListByCompanyId } from '../../queries/querySlice';
import { useSelector } from 'react-redux';
import { Company } from '../types';
import { RootState } from '../../../app/store';
import FloatingLabel from '../../../components/common/input/floatingLabel/FloatingLabel';
import FloatingLabelInput from '../../../components/common/input/floatingLabel/FloatingLabelInput';


interface CompanyCardProps {
    company: Company;
    gradientToColor: string;
    faIcon: string;  // This holds the SVG path directly or as a component
    description: string;
    downloadLink: string;
    sourceCodeLink: string | null;
    title: string;
    isOpen: boolean;
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
    const { gradientToColor,description, downloadLink, sourceCodeLink, title, isOpen } = props;    
    
    const queries = useSelector((state: RootState) => selectQueryListByCompanyId(state, props.company.id));
    // const [isExpanded, setIsExpanded] = useState<boolean>(false);

    
    const [fieldvalue, setfieldValue] = useState<string>("");

    const renderEmptyQueryList = () => {
        return (
            <div className={'card bg-base-100 shadow-xl'}>
                <p className={'text text-base-content text-xl'}>No queries found for this company.</p>
            </div>
        );
    }

    return (
        <>
        {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium">
            Focus me to see content
            </div>
            <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
        </div> */}
        <div className='company-card'>
            <div className="card-mat card w-full p-6 bg-base-100 shadow-xl mt-6 collapse collapse-arrow overflow-visible" >
                <input type="radio" name="my-accordion-1" defaultChecked={isOpen} /> 

                {/* TITLE */}
                <div className="card__header collapse-title " style={{ background: `linear-gradient(255deg,  rgba(255, 134, 91, 0), ${gradientToColor} ) ` }}> 
                    <label className="swap swap-rotate ">
                        <input type="checkbox" />
                        <span className={`material-symbols-outlined large-icon  ${(!isOpen ? "swap-on" : "swap-off")}`}> query_stats </span>
                        <span className={`material-symbols-outlined large-icon  ${(isOpen ? "swap-on" : "swap-off")}`}> monitoring </span>
                    </label>
                    {title && <h2 className="card__header__title text text-primary-content">{title}</h2>}
                </div>

                {/* COLLAPSABLE CONTENT */}
                <div className='collapse-content'>
                    {/* BODY */}
                    <div className="card__body " >
                    <div className="w-72">



  <div className="relative w-full min-w-[200px] h-10">
    <FloatingLabelInput labelText="Username" value={fieldvalue} setValue={setfieldValue} placeholderTxt={''} />
    {/* <FloatingLabel labelText="Username" >
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " />
    </FloatingLabel> */}
      {/* <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
    </label> */}
  </div>
</div>  
    <div className="relative h-10 w-72 min-w-[200px]">
                    {/* <select className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'> */}
                    <input className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900'/>
                        {/* {(!queries || queries.length === 0)
                            ? renderEmptyQueryList() 
                            : queries.map((query, index) => (
                                <option key={query.id} value={query.id}>{query.name}</option>
                        ))} */}
                        {/* <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option> */}
                    {/* </select> */}
  <label
    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
    Select a City
  </label>
                    </div>
                        <p className='text text-neutral-content'>{description}</p>
                    </div>
                    {/* FOOTER */}
                    <div className="card__footer ">
                        <a href={downloadLink} className="card__footer__link btn btn-ghost btn-neutral-content">Navigate to Company Site</a>
                        {sourceCodeLink && <a href={sourceCodeLink} className="card__footer__link btn btn-neutral-content">Source Code</a>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CompanyCard;