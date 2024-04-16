


import React, { FC } from 'react';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import "./TextDropdown.css";

export interface iMenuItem {
  value: string;
  label: string;
  disabled?: boolean;
  badgeCount?: number;
}
interface TextDropdownProps {
    btnLabel: string;
    selectedValue: string;
    menuItems: iMenuItem[];
  onSelect: (e: iMenuItem) => void;
}
const TextDropdown: FC<TextDropdownProps> = ( props ) => {
  const { menuItems, onSelect} = props;
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleSelected = (event: iMenuItem) => {
    console.log( `New menu item chosen! ${event.label} ${event.value}` );
    onSelect(event);
  }; 

  const getDisplayLabel = () => {
    const menuItem = menuItems.find((item) => item.value === props.selectedValue);
    return menuItem ? menuItem.label : '-- no items to display -- ';
  };

  return (
    <>
    <Menu open={openMenu} handler={setOpenMenu} >
      <MenuHandler>
        <Button variant="text" 
          onClick={() => setOpenMenu(!openMenu)} 
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal outline-none text-dropdown-btn " >      
            <span className='text text-accent'>
                {getDisplayLabel()}
                <ChevronDownIcon strokeWidth={2.5}
                    className={`h-3.25 w-3.5 transition-transform ${ openMenu ? "rotate-180" : "" }`}
                />
            </span>
        </Button>
      </MenuHandler>
      <MenuList className="hidden grid-cols-7 gap-3 overflow-visible flex flex-col text-base bg-base-100 *:bg-base-100 z-9999"
                style={ {backgroundColor: "pink"} }>
        {menuItems.map(({ value, label, disabled, badgeCount = null }) => (
            <MenuItem key={value} value={value}
                disabled={disabled}
                defaultChecked={value === props.selectedValue} 
                onClick={() => handleSelected({value, label})}
                className={`text text-base-content ${disabled ? "text-opacity-50 disabled" : "text-opacity 100"} bg-base-100 shadow-xl hover:outline-accent`}
            >
              {badgeCount && <span className="text-xs text-accent">{badgeCount}</span>}
                {label}
            </MenuItem>
        ))}
      </MenuList>
    </Menu>

    </>
  );
};

export default TextDropdown;