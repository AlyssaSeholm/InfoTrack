import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import InputTextWithChipsIcon, { iChip } from '../../../components/Input/specialized/InputTextWithChips';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import TextDropdown, { iMenuItem } from '../../../components/common/input/textdropdown/TextDropdown';
import { selectCompanies, selectSelectedCompanyId } from '../../company/companySlice';
import { selectTheme } from '../../theme/themeSlice';
import CompletedThemes from '../../theme/themeColors';
import DelayedTooltip from '../../../components/common/delayedTooltip/DelayedTooltip';
import '../../../assets/css/modal.css';
import { fetch_User_ByEmail, selectUserId } from '../../user/userSlice';
import { create_Query, selectQueryLoading } from '../querySlice';
import { ToastContainer, toast } from "react-toastify";
import notify, { ToastType } from '../../../services/NotificationService';

interface NewQueryProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}
const OpenNewQueryModal: FC<NewQueryProps> = ( props ) => {
  const { isOpen, toggleIsOpen } = props;
  
  const dispatch: AppDispatch = useDispatch();

  const companies = useSelector(selectCompanies);
  const selectedCompanyId = useSelector(selectSelectedCompanyId) ?? "";
  // const isQueryLoading = useSelector(selectQueryLoading);
  const currentTheme = useSelector(selectTheme);
  const userId = useSelector(selectUserId);

  const [queryCompanyId, setQueryCompanyId] = useState<string>(companies.find(company => company.id === selectedCompanyId)?.id ?? '');
  const [queryEngineId, setQueryEngineId] = useState<string>('1');
  const [resultCount, setResultCount] = useState<string>('100');
  const [isQueryCreating, setIsQueryCreating] = useState<boolean>(false);
  // const [radioValue, setRadioValue] = useState('Google');
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
      { value: '1', label: 'Google', disabled: false },
      { value: '2', label: 'Bing', disabled: true },
      { value: '3', label: 'Yahoo', disabled: true },
      { value: '4', label: 'DuckDuckGo', disabled: true },
    ];
  }
  const getSearchEngineName = (id: string): string => {
    return getSearchEngineMenuItems().find(engine => engine.value === id)?.label ?? '';
  }
  const getResultCountMenuItems = (): iMenuItem[] => {
    return [
      { value: '25', label: '25', disabled: false },
      { value: '50', label: '50', disabled: false },
      { value: '100', label: '100', disabled: false },
      { value: '200', label: '200', disabled: true },
    ];
  }
  // const showSuccessToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: 'top-right',
  //   });
  // };

  const addChip = (chip: iChip) => {
      setChips([...chips, chip]);
    };
  const removeChip = (id: number) => {
    setChips(chips.filter(chip => chip.id !== id));
  };

  const canSubmit = (): boolean => {
    return chips.length > 0;
  }
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const newQuery: any = {
  //     userId: userId,
  //     companyId: queryCompanyId, 
  //     searchEngineId: queryEngineId, 
  //     name: '',
  //     includeTerms: chips.map(chip => chip.label).join(', '), 
  //     resultCount: resultCount,
  //     competitorCompanyId: null,
  //     excludeTerms: '',       
  //   }
  //   console.log({newQuery, event });
  //   const actionResult = await dispatch((create_Query as any)(newQuery));
  //   // Unwrap the result to handle it directly
  //   if (actionResult.meta.requestStatus === 'fulfilled') {
  //     console.log('Query created successfully!');
  //     toggleIsOpen();
  //   } else if (actionResult.meta.requestStatus === 'rejected') {
  //     console.error('Failed to create query');
  //   }

  // }; 

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    if (!canSubmit()) return;
  

    try {
      setIsQueryCreating(true);
      const newQuery: any = {
        userId: userId,
        companyId: queryCompanyId, 
        searchEngineId: queryEngineId, 
        name: '',
        includeTerms: chips.map(chip => chip.label).join(', '), 
        resultCount: resultCount,
        competitorCompanyId: null,
        excludeTerms: '',       
      }
      console.log({newQuery, e });
      const queryActionResult = await dispatch((create_Query as any)(newQuery));
      console.log( `Query created!  ${queryActionResult}` );
      notify("New query added! Getting first search results ... ", ToastType.SUCCESS);
      
      // const searchActionResult = await dispatch((create))
      // showAlert('success', "Success", 'Query created successfully!')
      setChips([]);
      toggleIsOpen();
      //TODO add notification
    } catch (error) {
      console.error('Failed to create query:', error);
      // Handle errors appropriately
    } finally {
      setIsQueryCreating(false);
    }
  };
  const handleNewCompanySelect = (e: iMenuItem) => { 
    console.log( `New company chosen! ${e.label}` );
    setQueryCompanyId(e.value);
  }
  const handleNewSearchEngineSelected = (e: iMenuItem) => { 
    console.log( `New search engine chosen! ${e.label}` );
    setQueryEngineId(e.value);
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
                btnLabel={queryEngineId !== "" ? getSearchEngineName(queryEngineId) : 'Google'}
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

          {/* Todo: Add flexbox so this flows better on various screen sizes */}
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
          {/* <Button color={CompletedThemes[currentTheme]?.primary} ripple={true} onClick={(e: any) => handleSubmit(e)}  > The keywords need to be a balance between specifity yet encompass board enough to pull adequate results. */}
          <DelayedTooltip 
            content={ 
              canSubmit() ? `Add query to your profile and execute the search` 
              : isQueryCreating ? `Adding query to your profile and executing search...`
              : `Please add at least one keyword to search` } 
            placement={'top'}            
            >
            <Button
              className=''
              loading={isQueryCreating}
              disabled={ !canSubmit() || isQueryCreating }
              ripple={true}
              variant='gradient'
              onClick={(e: any) => handleSubmit(e)}
              style={
                isQueryCreating 
                ? {
                    opacity: 0.9,
                    color: CompletedThemes[currentTheme]?.primary,
                    borderColor: CompletedThemes[currentTheme]?.primary,
                    borderStyle: 'solid',
                    borderWidth: '1px',
                  }
                : {
                    backgroundColor: CompletedThemes[currentTheme]?.primary,
                    color:CompletedThemes[currentTheme]?.primaryContent,
                    opacity: canSubmit() ? 1 : 0.5
                  }
                // canSubmit() && !isQueryCreating
                // ? {
                //   backgroundColor: CompletedThemes[currentTheme]?.primary,
                //   color:CompletedThemes[currentTheme]?.primaryContent }
                // : isQueryCreating 
                //   ? {
                //       opacity: 0.9,
                //       color: CompletedThemes[currentTheme]?.primary,
                //       borderColor: CompletedThemes[currentTheme]?.primary,
                //       borderStyle: 'solid',
                //       borderWidth: '1px',
                //     } 
                //   : {
                //     opacity: 0.5,                    
                //   }
              }
              >
                <span>Add Query & Search</span>
            </Button>
          </DelayedTooltip>
        </DialogFooter>

    </Dialog>
    </>
  );
};

export default OpenNewQueryModal;