import { FC, useState } from 'react';
import { Company } from '../types';
import TextDropdown, { iMenuItem } from '../../../components/common/input/textdropdown/TextDropdown';
import { Query } from '../../queries/types';
import { SearchResults } from '../../search/results/types';
import { Accordion, AccordionBody, AccordionHeader, Button, Chip } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { create_Search, selectSearchLoading, selectSearchResults } from '../../search/results/searchResultsSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import notify, { ToastType } from '../../../services/NotificationService';
import React from 'react';


interface CompanyCardProps {
    company: Company;
    gradientToColor: string;
    faIcon: string;  // This holds the SVG path directly or as a component
    description: string;
    downloadLink: string;
    sourceCodeLink: string | null;
    title: string;
    isOpen: boolean;
    queries: Query[];
    searchResults: SearchResults[];
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
    const { company, gradientToColor, downloadLink, sourceCodeLink, title, isOpen, queries, searchResults } = props;

    const dispatch = useDispatch();

    const [selectedQueryId, setSelectedQueryId] = useState<string>(queries ? queries[0]?.id : "");
    const [queriesRunning, setQueriesRunning] = useState<boolean>(false);
    const selectedResults = useSelector(selectSearchResults);


    const getQueryName = (id: string): string => {
        const items = convertQueriesToMenuItems();
        var query = items.find(q => q.value === id);
        return query?.label ?? 'missing query name';
    }
    const convertQueriesToMenuItems = (): iMenuItem[] => {
        return queries?.filter(q => q.myCompanyId === company.id)?.map((query: Query, index) => {
            return {
                value: query.id,
                label: query.name != "" ? `${index + 1}. ${query.name}` : `${index + 1}. Query ${query.id} terms: ${query.includeTerms} ${query.excludeTerms}`,
                count: selectedResults?.filter(sr => sr?.queryId === query.id).length ?? 0,
                disabled: false
            };
        }) ?? [];
    }
    const companyQueries = (): Query[] => {
        return queries?.filter(q => q.myCompanyId === company.id) ?? [];
    }
    const handleNewSearchEngineSelected = (e: iMenuItem) => {
        console.log(`New query chosen! ${e.label}`);
        setSelectedQueryId(e.value);
    }
    const handleQueryRun = async () => {
        setQueriesRunning(true);
        console.log(`Run query for ${company.name}`);
        const searchResult = await dispatch((create_Search as any)(selectedQueryId));

        console.log(`Query ran!: ${unwrapResult(searchResult)}`);
        notify(`Query successfully ran for ${getQueryName(selectedQueryId)}`, ToastType.SUCCESS);
        setQueriesRunning(true);
    }

    const [queryAccordionOpen, setQueryAccordionOpen] = React.useState(1);
    const [companyAccordionOpen, setCompanyAccordionOpen] = React.useState(false);
    const handleQueryOpen = (value: React.SetStateAction<number>) => setQueryAccordionOpen(queryAccordionOpen === value ? 0 : value);
    const handleCompanyOpen = () => { 
        setCompanyAccordionOpen(!companyAccordionOpen);
        
    };

    //#region Render Functions
    const renderEmptyQueryList = () => {
        return (
            <div className={'card bg-base-100 shadow-xl h-20'}>
                <p className={'text text-base-content text-md'}>No queries found for this company.</p>
            </div>
        );
    }
    function Icon({ id }: { id: number }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === queryAccordionOpen ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }

    const renderQueryListSelect = () => {

        return (
            <>
                <div className='form-row'>
                    <h3>Queries: </h3>
                    <TextDropdown
                        btnLabel={selectedQueryId !== "" ? getQueryName(selectedQueryId) : 'No queries found'}
                        menuItems={convertQueriesToMenuItems()}
                        onSelect={handleNewSearchEngineSelected} />
                </div>
            </>
        )
    }

    const renderResultsList = () => {

        if (selectedQueryId === "") {
            return (
                <div className={'card bg-base-100 w-full shadow-xl h-20'}>
                    <p className={'text text-base-content text-md'}>Select a query to display search results.</p>
                </div>
            );
        }

        const results = selectedResults?.filter(sr => sr?.queryId === selectedQueryId);
        const resultsv2 = searchResults?.filter(sr => sr?.queryId === selectedQueryId);
        console.log(`${selectedQueryId} -- renderResultsList: ${results}`)
        console.log(`${selectedQueryId} -- renderResultsList: ${resultsv2}`)
        if (!results || results.length === 0) {
            return (
                <div className={'card bg-base-100 shadow-xl h-20 w-full'}>
                    <p className={'text text-base-content text-md'}>No search results found for this query.</p>
                </div>
            );
        }

        return (
            <>
                {results.map((result, index) => (
                    <Accordion open={queryAccordionOpen === index + 1} key={index + 1} className={'p-0 overflow-hidden'} icon={<Icon id={index + 1} />} animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 5 }, }}>
                        <AccordionHeader onClick={() => handleQueryOpen(index + 1)} className='flex flex-row w-full gap-4'>
                            <h2 className={'text text-base-content text-md'}>{getQueryName(result.queryId)}</h2>
                            {/* Top 10 results: */}
                            {result.highestRank > 10 ?
                                <h3>Highest Rank: {result.highestRank}</h3>
                                : <p className={'text text-base-content text-md'}>No results in top 10</p>}
                            {result.top100Count > 0 ?
                                <h3>Number of Results Found: {result.top100Count} / {result.items.length}</h3>
                                : <p className={'text text-base-content text-md'}>No results matched the key terms.</p>}
                        </AccordionHeader>
                        <AccordionBody className={"overflow-x-hidden overflow-y-auto max-h-96"}>
                            <ul key={index} className={'card bg-base-300 shadow-xl flex flex-wrap flex-column gap-2'}>
                                {result.items.map((item, index) => (
                                    <li key={index} className={'shadow-xl rounded-md h-10 bg-base-100 flex flex-wrap flex-row items-center py-3 px-8 gap-4 h-min justify-around'}>
                                        <h3 className='flex'>{`#${item.rank}`}</h3>
                                        {item.tags?.map((tag, index) => (
                                            <Chip variant='outlined' key={index} value={tag} className='flex h-8 border-accent' />
                                        ))}
                                        <p className='flex'>{item.breadCrumbs?.text ?? ' ... '} {' > '} {item.breadCrumbs?.link ?? ' ... '}</p>
                                    </li>
                                    // <div key={index} className={'shadow-xl rounded-md h-10 bg-base-100 flex flex-wrap flex-row items-center py-3 px-8 gap-4 h-min justify-around animate={{ mount: { scale: 1 }, unmount: { scale: 0.9 }, }}'}>
                                    //     <h3 className='flex'>{`#${item.rank}`}</h3> 
                                    //     {item.tags?.map((tag, index) => (
                                    //         <Chip variant='outlined' key={index} value={tag}  className='flex h-8 border-accent'/>
                                    //     ))}
                                    //     <p className='flex'>{item.breadCrumbs?.text ?? ' ... '} {' > '} {item.breadCrumbs?.link ?? ' ... '}</p>
                                    // </div>
                                ))}
                            </ul>
                        </AccordionBody>
                    </Accordion>
                ))}

            </>
        );
    }
    //#endregion Render Functions

    return (
        <>
            <div className='company-card'>
                {/* <div className="card-mat card w-full p-6 bg-base-100 shadow-xl mt-6 collapse collapse-arrow overflow-visible" > */}
                {/* <input type="radio" name="my-accordion-1" defaultChecked={isOpen} /> */}

                <Accordion open={companyAccordionOpen} className={'p-0  overflow-hidden my-3 bg-base-100 shadow-xl mt-6 collapse collapse-arrow overflow-hidden'} >
                    {/* TITLE */}
                    <AccordionHeader
                        onClick={() => handleCompanyOpen()}
                        className='flex flex-row w-full gap-4 card__header '
                        style={{ background: `linear-gradient(255deg,  rgba(255, 134, 91, 0), ${gradientToColor} )`, width: `calc(100% + 5px)`, margin: `-3px 0 0px -3px` }}
                    >
                        {/* <div className="card__header collapse-title " style={{ background: `linear-gradient(255deg,  rgba(255, 134, 91, 0), ${gradientToColor} ) ` }}> */}
                        <label className="swap swap-rotate ">
                            <input type="checkbox" />
                            <span className={`material-symbols-outlined large-icon  ${(!isOpen ? "swap-on" : "swap-off")}`}> monitoring </span>
                            <span className={`material-symbols-outlined large-icon  ${(isOpen ? "swap-on" : "swap-off")}`}> monitoring </span>
                        </label>
                        {title && <h2 className="card__header__title text text-primary-content">{title}</h2>}
                        {/* </div> */}
                    </AccordionHeader>
                    {/* COLLAPSABLE CONTENT */}
                    {/* <div className='collapse-content'> */}
                    <AccordionBody className={"p-4 overflow-hidden max-h-96 pb-1"}>
                        {/* BODY */}
                        <div className="card__body w-full" >
                            <div className="w-full overflow-hidden">

                                {/* <div className="relative w-full min-w-[200px] h-10">
                                    <FloatingLabelInput labelText="Username" value={fieldvalue} setValue={setfieldValue} placeholderTxt={''} />
                                </div> */}

                                <div className="relative w-full min-w-[200px] flex justify-between overflow-x-hidden overflow-y-auto max-h-80">{/* <div className="select-with-floating-label mt-3"> */}


                                    <div className='flex flex-1 flex-row flex-wrap'>
                                        <div className='flex flex-column gap-4 w-full justify-end'>
                                            {/* <Button variant="outlined" size="md" ripple={true} className="flex items-center gap-3 py-0.5 pl-3 pr-5 border-base-content">
                                            <span className={`material-symbols-outlined large-icon animate-spin  ${(!isOpen ? "swap-on" : "swap-off")}`}> refresh </span>
                                            Refresh
                                        </Button> */}
                                            <Button disabled={queriesRunning || !selectedQueryId} variant="gradient" size="sm" ripple={true} onClick={handleQueryRun}
                                                className={`flex items-center gap-3 py-0.5 pl-3 pr-5 bg-primary opacity-70 hover:opacity-100 focus:opacity-100 text-primary-content border-primary-content ${queriesRunning ? 'bg-opacity-50' : ''}`}
                                            >
                                                <span className={`material-symbols-outlined large-icon ${queriesRunning ? 'animate-pulse' : ''}  ${(!isOpen ? "swap-on" : "swap-off")}`}> query_stats </span>
                                                Run Query
                                            </Button>
                                        </div>
                                        <div className='flex flex w-full'>
                                            {(!companyQueries() || companyQueries().length === 0)
                                                ? renderEmptyQueryList()
                                                : renderQueryListSelect()}
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full mt-4 flex flex-row flex-wrap p-3 gap-3">
                                    {renderResultsList()}
                                </div>
                            </div>
                        </div>
                        {/* FOOTER */}
                        <div className="card__footer ">
                            <a href={downloadLink} className="group card__footer__link btn btn-ghost btn-neutral-content ">
                                Navigate to Company Site
                                <span className={`material-symbols-outlined group-hover:animate-pulse`}> east </span>
                            </a>
                            {sourceCodeLink && <a href={sourceCodeLink} className="card__footer__link btn btn-neutral-content">Source Code</a>}
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    );
}

export default CompanyCard;

