import { FC } from 'react';
import { selectCompanies } from '../../company/companySlice';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../theme/themeSlice';
import CompletedThemes from '../../theme/themeColors';
import CompanyCard from '../../company/components/CompanyCard';
import { selectQueryList } from '../../queries/querySlice';
import { selectSearchResults } from '../../search/results/searchResultsSlice';


interface CompaniesProps { }

const Companies: FC<CompaniesProps> = () => {
    const companies = useSelector(selectCompanies);
    const theme = useSelector(selectTheme);
    const queries = useSelector(selectQueryList);
    const searchResults = useSelector(selectSearchResults);

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
                            queries={queries}
                            searchResults={searchResults}
                            />
            ))}
        </div>
    );
}

export default Companies;