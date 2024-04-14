


import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import { selectSelectedCompanyId } from '../../../../features/company/companySlice';
import "./TextDropdown.css";

export interface iMenuItem {
  value: string;
  label: string;
  disabled?: boolean;
}
interface TextDropdownProps {
//   isOpen: boolean;
//   toggleIsOpen: () => void;
    btnLabel: string;
    menuItems: iMenuItem[];
  onSelect: (e: iMenuItem) => void;
}
const TextDropdown: FC<TextDropdownProps> = ( props ) => {
    const { btnLabel, menuItems, onSelect } = props;
  const companies = useSelector((state: RootState) => state.company.companies);
  const selectedCompanyId = useSelector(selectSelectedCompanyId);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleSelected = (event: iMenuItem) => {
    // event.preventDefault();
    console.log( `New company chosen! ${event.value}` );
    onSelect(event);
  }; 

  return (
    <>
    <Menu open={openMenu} handler={setOpenMenu} >
      <MenuHandler>
        <Button variant="text" onClick={() => setOpenMenu(!openMenu)} className="flex items-center gap-3 text-base font-normal capitalize tracking-normal outline-none  text-dropdown-btn " >      
            <span className='text text-accent'>
                {btnLabel}
                <ChevronDownIcon strokeWidth={2.5}
                    className={`h-3.25 w-3.5 transition-transform ${ openMenu ? "rotate-180" : "" }`}
                />
            </span>
        </Button>
      </MenuHandler>
      <MenuList className="hidden grid-cols-7 gap-3 overflow-visible flex flex-col text-base bg-base-200 bg-opacity-75 z-9999">
        {menuItems.map(({ value, label, disabled }) => (
            <MenuItem key={value} value={value}
                disabled={disabled}
                defaultChecked={label === btnLabel} 
                onClick={() => handleSelected({value, label})}
                className={`text text-base-content ${disabled ? "text-opacity-50 disabled" : "text-opacity 100"} bg-base-100 shadow-xl hover:outline-accent`}
            >
                {label}
            </MenuItem>
        ))}
        {/* {companies.map(({ id, name }) => (
            <MenuItem defaultChecked={selectedCompanyId === id} value={id} onSelect={(e:any) => {handleSelected(e)}}>{name}</MenuItem>
        ))} */}
      </MenuList>
    </Menu>

    </>
  );
};

export default TextDropdown;