import { FC, useEffect, useState } from 'react';
import { Company } from '../types';
import TextDropdown, { iMenuItem } from '../../../components/common/input/textdropdown/TextDropdown';
import { Query } from '../../queries/types';
import { SearchResults } from '../../search/results/types';
import { Accordion, AccordionBody, AccordionHeader, Button, Chip } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { create_Search } from '../../search/results/searchResultsSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import notify, { ToastType } from '../../../services/NotificationService';
import React from 'react';


interface CompanyCardProps {
    company: Company;
    gradientToColor: string;
    faIcon: string; 
    description: string;
    downloadLink: string;
    sourceCodeLink: string | null;
    title: string;
    isOpen: boolean;
    queries: Query[];
    searchResults: SearchResults[];
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
    const { company, gradientToColor, downloadLink, sourceCodeLink, title, isOpen } = props;

    const dispatch = useDispatch();

    const [selectedQueryId, setSelectedQueryId] = useState<string | null>(null);
    const [filteredResults, setFilteredResults] = useState<SearchResults[]>([]);
    const [queriesList, setQueriesList] = useState<Query[]>([]);

    const [queriesRunning, setQueriesRunning] = useState<boolean>(false);

    useEffect(() => {
        if (props.queries && props.queries.length > 0) {
            setSelectedQueryId(props.queries[0].id);
            console.log(`useEffect - selected queryId (${selectedQueryId}) -- before -- ${queriesList}`);
            setQueriesList(props.queries?.filter(q => q?.myCompanyId === company?.id));
            console.log(`useEffect - queries updated: (${queriesList?.length}) ${queriesList}`);
        }
    }, [props.queries]);

    useEffect(() => {
        if (selectedQueryId) {
            const newFilteredResults = props.searchResults.filter(sr => sr.queryId === selectedQueryId);
            setFilteredResults(newFilteredResults);
            console.log(`useEffect - Filtered results updated: ${newFilteredResults.length}`);
        }
    }, [props.searchResults, selectedQueryId]);

    const getQueryName = (id: string | null): string => {
        var query = filteredResults.length > 0 ? filteredResults[0] : null;
        if (!query) { return `add a query to ${company.name}`; }

        if (!id && !query) { return 'No query selected'; }
        
        if (!id && query !== null) { 
            setSelectedQueryId(query.id);
        }

        const items = convertQueriesToMenuItems();
        return items.find(q => q.value === query?.id)?.label ?? ' -- select a query --';
    }

    const convertQueriesToMenuItems = (): iMenuItem[] => {
        return queriesList?.map((query: Query, index) => {
            return {
                value: query.id,
                label: query.name != "" ? `${index + 1}. ${query.name}` : `${index + 1}. Query ${query.id} terms: ${query.includeTerms} ${query.excludeTerms}`,
                count: filteredResults?.filter(sr => sr?.queryId === query.id).length ?? 0,
                disabled: false
            };
        }) ?? [];
    }
    const handleQueryRun = async () => {
        setQueriesRunning(true);
        console.log(`Run query for ${company.name}`);
        const searchResult = await dispatch((create_Search as any)(selectedQueryId));

        console.log(`Query ran!: ${unwrapResult(searchResult)}`);
        setQueriesRunning(true);
        notify(`Query successfully ran for ${getQueryName(selectedQueryId)}`, ToastType.SUCCESS);
    }
    const handleQuerySelection = (newQuery: iMenuItem) => {
        console.log(`New query chosen! ${newQuery.value} ${newQuery.label}`);
        setSelectedQueryId(newQuery.value);
        const newFilteredResults = props.searchResults?.filter(sr => sr.queryId === newQuery.value);
        if (newFilteredResults) {
            setFilteredResults(newFilteredResults);
            console.log(`manual - Filtered results updated: ${newFilteredResults.length}`);
        } else {
            setFilteredResults([]);
            console.log(`manual - Filtered results updated: 0`);
        }
    };

    const [queryAccordionOpen, setQueryAccordionOpen] = React.useState(1);
    const [companyAccordionOpen, setCompanyAccordionOpen] = React.useState(false);
    const handleQueryOpen = (value: React.SetStateAction<number>) => setQueryAccordionOpen(queryAccordionOpen === value ? 0 : value);
    const handleCompanyOpen = () => { 
        setCompanyAccordionOpen(!companyAccordionOpen);

    };

    const formatDateIntl = (dateString: string): string => {
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    
        // Split to remove the comma added by the formatter between date and time
        return formatter.format(date).replace(',', '');
    };

    //#region Render Functions
    const renderEmptyQueryList = () => {
        return (
            <div className={'card bg-base-100 shadow-xl h-10 py-3 px-4 m-4'}>
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
                        selectedValue={selectedQueryId ?? ''}
                        btnLabel={getQueryName(selectedQueryId)}
                        menuItems={convertQueriesToMenuItems()}
                        onSelect={(newQuery) => handleQuerySelection(newQuery)} />
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

        if (!filteredResults || filteredResults.length === 0) {
            return (
                <div className={'card bg-base-100 shadow-xl h-20 w-full'}>
                    <p className={'text text-base-content text-md'}>No search results found for this query.</p>
                </div>
            );
        }

        return (
            <>
                {filteredResults.map((result, index) => (
                    <Accordion open={queryAccordionOpen === index + 1} key={index + 1} className={'p-0 overflow-hidden'} icon={<Icon id={index + 1} />} animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 5 }, }}>
                        <AccordionHeader onClick={() => handleQueryOpen(index + 1)} className='flex flex-row w-full gap-4'>
                            <h2 className={'text text-base-content text-sm'}>{formatDateIntl(result.searchedOn.toString())}</h2>
                            {result.highestRank ? <h3 className='text text-base-content text-sm'>Highest Rank: {result.highestRank}</h3> : ''}
                            {result.top100Count > 0 ?
                                <h3 className='text text-base-content text-sm'>Number of Mentions Found: {result?.items?.filter(i => i?.tags && i.tags.length > 0 )?.length ?? 0} / {result.items.length}</h3>
                                : <p className={'text text-base-content text-sm'}>No results matched the key terms.</p>}
                        </AccordionHeader>
                        <AccordionBody className={"overflow-x-hidden overflow-y-auto max-h-96"}>
                            <ul key={index} className={'card bg-base-300 shadow-xl flex flex-wrap flex-column gap-2'}>
                                {result.items.map((item, index) => (
                                    <li key={index} className={'shadow-xl rounded-md h-10 bg-base-100 flex flex-wrap flex-row items-center py-3 px-8 gap-3 h-min justify-left'}>
                                        <h3 className='flex'>{`# ${item.resultRank}`}</h3>
                                        {item.tags?.map((tag, index) => (
                                            <Chip variant='outlined' key={index} value={tag} className='flex h-8 border-accent' />
                                        ))}
                                        {item.url && <a href={item.url} className='flex text-xs'>{item.url}</a>}
                                        {item.breadCrumbs && (item.breadCrumbs.link || item.breadCrumbs.text) 
                                            && <p className='flex text-xs'>{item.breadCrumbs?.text ?? ' ... '} {' > '} {item.breadCrumbs?.link ?? ' ... '}</p>}
                                    </li>
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
                <Accordion open={companyAccordionOpen} className={'p-0  overflow-hidden my-3 bg-base-100 shadow-xl mt-6 collapse collapse-arrow overflow-hidden'} >

                    {/* TITLE */}
                    <AccordionHeader
                        onClick={() => handleCompanyOpen()}
                        className='flex flex-row w-full gap-4 card__header '
                        style={{ background: `linear-gradient(255deg,  rgba(255, 134, 91, 0), ${gradientToColor} )`, width: `calc(100% + 5px)`, margin: `-3px 0 0px -3px` }}
                    >
                        <label className="swap swap-rotate ">
                            <input type="checkbox" />
                            <span className={`material-symbols-outlined large-icon  ${(!isOpen ? "swap-on" : "swap-off")}`}> monitoring </span>
                            <span className={`material-symbols-outlined large-icon  ${(isOpen ? "swap-on" : "swap-off")}`}> monitoring </span>
                        </label>
                        {title && <h2 className="card__header__title text text-primary-content">{title}</h2>}
                        
                    </AccordionHeader>

                    {/* COLLAPSABLE CONTENT */}
                    <AccordionBody className={"p-4 overflow-hidden overflow-y-auto max-h-[40vh] pb-1"}>
                        {/* BODY */}
                        <div className="card__body w-full" >
                            <div className="w-full overflow-hidden">

                                <div className="relative w-full min-w-[200px] flex justify-between overflow-x-hidden overflow-y-auto max-h-80">{/* <div className="select-with-floating-label mt-3"> */}

                                    <div className='flex flex-1 flex-row flex-wrap'>
                                        <div className='flex flex-column gap-4 w-full justify-end'>
                                            <Button variant="gradient" size="sm" ripple={true} 
                                                disabled={queriesRunning || !selectedQueryId}
                                                onClick={handleQueryRun}
                                                className={`flex items-center gap-3 py-0.5 pl-3 pr-5 bg-primary opacity-70 hover:opacity-100 focus:opacity-100 text-primary-content border-primary-content 
                                                    ${(queriesRunning || selectedQueryId || !filteredResults || filteredResults.length === 0) ? 'bg-opacity-50 cursor-default' : ''}`}
                                            >
                                                <span className={`material-symbols-outlined large-icon ${queriesRunning ? 'animate-pulse' : ''} `}> query_stats </span>
                                                Run Query
                                            </Button>
                                        </div>
                                        <div className='flex flex w-full'>
                                            {(!queriesList || queriesList.length === 0)
                                                ? renderEmptyQueryList()
                                                : renderQueryListSelect()}
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full mt-4 flex flex-row flex-wrap p-3 gap-3">
                                    {(queriesList && queriesList.length > 0 && selectedQueryId && filteredResults?.length > 0)
                                        && renderResultsList()}
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

