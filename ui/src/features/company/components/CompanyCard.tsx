import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { FC, SetStateAction, useEffect, useState } from 'react';

import { fas, faB } from '@fortawesome/free-solid-svg-icons';
import { lookupIconByStringName } from '../../../utilities/iconUtilities';


interface CompanyCardProps {
    gradientFromColor: string;
    gradientToColor: string;
    faIcon: string;  // This holds the SVG path directly or as a component
    description: string;
    downloadLink: string;
    sourceCodeLink: string | null;
    title: string;
    isOpen: boolean;
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
    const { gradientFromColor, gradientToColor, faIcon, description, downloadLink, sourceCodeLink, title, isOpen } = props;
    const [icon, setIcon] = useState<IconDefinition | null>(null);
    // const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
            <div className="card-mat card w-full p-6 bg-base-100 shadow-xl mt-6 collapse collapse-arrow " >
                <input type="radio" name="my-accordion-1" defaultChecked={isOpen} /> 

                <div className="card__header collapse-title " style={{ background: `linear-gradient(255deg,  rgba(255, 134, 91, 0), ${gradientToColor} ) ` }}> 
                    {/* {icon && <FontAwesomeIcon  icon={icon} />} */}
                    {/* <span className="material-symbols-outlined large-icon"> store </span> */}
                    <label className="swap swap-rotate ">
                        <input type="checkbox" />
                        <span className={`material-symbols-outlined large-icon  ${(!isOpen ? "swap-on" : "swap-off")}`}> query_stats </span>
                        <span className={`material-symbols-outlined large-icon  ${(isOpen ? "swap-on" : "swap-off")}`}> monitoring </span>
                    </label>
                    {title && <h2 className="card__header__title text text-primary-content">{title}</h2>}
                </div>

                <div className='collapse-content'>
                    <div className="card__body " >
                        <p className='text text-neutral-content'>{description}</p>
                    </div>
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