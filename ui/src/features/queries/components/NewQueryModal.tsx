import React, { useState, KeyboardEvent, FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import InputTextWithChipsIcon, { iChip } from '../../../components/Input/specialized/InputTextWithChips';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
// import './NewQueryModal.css';
import '../../../assets/css/modal.css';
import TextDropdown, { iMenuItem } from '../../common/components/TextDropdown';
import { selectSelectedCompanyId } from '../../company/companySlice';
import { selectTheme } from '../../theme/themeSlice';
import CompletedThemes from '../../theme/themeColors';

interface NewQueryProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}
const OpenNewQueryModal: FC<NewQueryProps> = ( props ) => {
  const { isOpen, toggleIsOpen } = props;
  const companies = useSelector((state: RootState) => state.company.companies);
  const selectedCompanyId = useSelector(selectSelectedCompanyId) ?? "";
  const currentTheme = useSelector(selectTheme);
  const [queryCompanyId, setQueryCompanyId] = useState<string>('');
  const [queryEngine, setQueryEngine] = useState<string>('');
  const [resultCount, setResultCount] = useState<string>('');
  const [radioValue, setRadioValue] = useState('Google');
  const [chips, setChips] = useState<iChip[]>([]);


  const getCompanyName = (id: string): string => {
    const company = companies.find(company => company.id === id);
    console.log({ company, companies, selectedCompanyId, queryCompanyId });
    return company ? company.name : '';
  }
  const convertCompaniesToMenuItems = (): iMenuItem[] => {
    return companies.map((company: any) => {
      return { value: company.id, label: company.name, disabled: false };
    });
  }
  const getSearchEngineMenuItems = (): iMenuItem[] => {
    return [
      { value: 'Google', label: 'Google', disabled: false },
      { value: 'Bing', label: 'Bing', disabled: true },
      { value: 'Yahoo', label: 'Yahoo', disabled: true },
      { value: 'DuckDuckGo', label: 'DuckDuckGo', disabled: true },
    ];
  }
  const getResultCountMenuItems = (): iMenuItem[] => {
    return [
      { value: '25', label: '25', disabled: false },
      { value: '50', label: '50', disabled: false },
      { value: '100', label: '100', disabled: false },
      { value: '200', label: '200', disabled: true },
    ];
  }

  const addChip = (chip: iChip) => {
      setChips([...chips, chip]);
    };

  const removeChip = (id: number) => {
    setChips(chips.filter(chip => chip.id !== id));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ radioValue, chips, event });
  }; 

  const handleNewCompanySelect = (e: iMenuItem) => { 
    console.log( `New company chosen! ${e.label}` );
    setQueryCompanyId(e.value);
  }
  const handleNewSearchEngineSelected = (e: iMenuItem) => { 
    console.log( `New search engine chosen! ${e.label}` );
    setQueryEngine(e.value);
  }
  const handleNewResultCountSelected = (e: iMenuItem) => { 
    console.log( `New result coumt chosen! ${e.label}` );
    setResultCount(e.value);
  }
  return (
    <>
    <Dialog
      id="new_query_modal"
      className='z-10 bg-base-100'
        size={"xs"}
        open={isOpen}
        handler={toggleIsOpen}
        // animate={{
        //     mount: { scale: 1, y: 0 },
        //     unmount: { scale: 0.2, y: -200 },
        // }}
        >
          
        <DialogHeader className='header' >
            <p>Add a new query.</p>
        </DialogHeader>

        <DialogBody className='body'>
          <div className='row'>
            <div className='unit'>
              <h3>The keywords will be used to search </h3>
              <TextDropdown
                btnLabel={queryEngine !== "" ? queryEngine : 'Google'}
                menuItems={getSearchEngineMenuItems()}
                onSelect={handleNewSearchEngineSelected} />
              <h3>, </h3>
            </div>
          </div>
          
          <div className='row pt-2'>
            <div className="form-control">
              <InputTextWithChipsIcon
                labelTitle={'Keywords'}
                defaultValue={''}
                inputStyle={'primary'}
                placeholder={'Enter search keywords and press Enter to add them as chips'}
                chips={chips} updateType={'simple'}
                addChip={addChip}
                removeChip={removeChip}  />
            </div>
          </div>

          <div className='row'>
            <div className='unit'>
              <h3>looking for any references to your company </h3>
              <TextDropdown
                btnLabel={queryCompanyId !== "" ? getCompanyName(queryCompanyId) : getCompanyName(selectedCompanyId)}
                menuItems={convertCompaniesToMenuItems()}
                onSelect={handleNewCompanySelect} />
            </div>
            <div className='unit'>
              <h3>in </h3>
              <TextDropdown
                btnLabel={resultCount !== "" ? resultCount : '100'}
                menuItems={getResultCountMenuItems()}
                onSelect={handleNewResultCountSelected} />
                <h3> results.</h3>
            </div>
          </div>
        </DialogBody>

        <DialogFooter className='footer'>
          <Button   
            variant="text"
            onClick={() => toggleIsOpen()}
            className="mr-1"             
          >
              <span>Cancel</span>
          </Button>
          {/* <Button color={CompletedThemes[currentTheme]?.primary} ripple={true} onClick={(e: any) => handleSubmit(e)}  > */}
          <Button 
            loading={false}
            disabled={chips.length == 0 }
            ripple={true} 
            onClick={(e: any) => handleSubmit(e)} 
            style={{backgroundColor: CompletedThemes[currentTheme]?.primary, color:CompletedThemes[currentTheme]?.primaryContent}} 
            >
              <span>Add Query & Search</span>
          </Button>
        </DialogFooter>

    </Dialog>
    </>
  );
};

export default OpenNewQueryModal;