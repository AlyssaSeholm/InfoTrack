import { FC } from 'react';
import { selectCompanies } from '../../company/companySlice';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../theme/themeSlice';
import CompletedThemes from '../../theme/themeColors';
import CompanyCard from '../../company/components/CompanyCard';
import { Company } from '../../company/types';


interface CompaniesProps {
    
}

const Companies: FC<CompaniesProps> = (props) => {
    const companies = useSelector(selectCompanies);
    const theme = useSelector(selectTheme);

    const renderEmptyCompanyList = () => {
        return (
            <div className={'card bg-base-100 shadow-xl'}>
                <p className={'text text-base-content text-xl'}>No companies found.</p>
            </div>
        );
    }

    return (
        <div className='company-list-container'>
            {(!companies || companies.length === 0)
                ? renderEmptyCompanyList() 
                : companies.map((company, index) => (
                        <CompanyCard
                            key={company.id}  // Use company.id if possible, for a more stable key than index
                            title={company.name}
                            company={company}
                            gradientToColor={CompletedThemes[theme]?.accent}
                            faIcon={company.icon ?? "coffee"}  // Ensure you replace null with an actual SVG element or conditional rendering
                            description={company.name + " - " + company.baseUrl}
                            downloadLink={company.baseUrl}
                            sourceCodeLink={null}
                            isOpen={index === 0}
                            />
            ))}
            {/* {companies.map((company, index) => (
                <CompanyCard
                    key={company.id}  // Use company.id if possible, for a more stable key than index
                    title={company.name}
                    gradientFromColor={CompletedThemes[theme]?.primary}
                    gradientToColor={CompletedThemes[theme]?.accent}
                    svgIcon={null}  // Ensure you replace null with an actual SVG element or conditional rendering
                    description={company.name + " - " + company.baseUrl}
                    downloadLink={company.baseUrl}
                    sourceCodeLink={null}
                />
            ))} */}
        </div>
    );

    // const renderCompanyCards = (company: Company, index: number) => {
    //         return (
    //             <>
    //                 <CompanyCard
    //                     key={index}
    //                     gradientFromColor={CompletedThemes[theme]?.primary}
    //                     gradientToColor={CompletedThemes[theme]?.accent}
    //                     svgIcon={null}
    //                     description={company.name + " - " + company.baseUrl}
    //                     downloadLink={company.baseUrl}
    //                     sourceCodeLink={null}
    //                 />
    //             </>
    //         );
    // }


    // return (
    //     <>
    //         <div className='company-list-container'>
    //             {companies.map((company, index) => (renderCompanyCards(company, index)))}
    //         </div>
    //     </>
    // );
}

export default Companies;