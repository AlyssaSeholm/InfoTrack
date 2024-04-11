import { themeChange } from 'theme-change'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { openRightDrawer } from '../features/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../utilities/Constants'
import { setTheme } from '../features/theme/themeSlice';

import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import { RootState } from '../app/store'


function Header() {

    const dispatch = useDispatch();
    const pageTitle = useSelector((state: RootState) => state.header.pageTitle);
    const noOfNotifications = useSelector((state: RootState) => state.header.noOfNotifications);
    const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  
    const handleThemeChange = (event: any) => {
      const newTheme = event.target.value; // Assuming the new theme value is here
      dispatch(setTheme(newTheme));
      console.log(newTheme);
    };
    // useEffect(() => {
    //     themeChange(false)
    //     if (currentTheme === null) {
    //         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //             setCurrentTheme("dark")
    //         } else {
    //             setCurrentTheme("light") //todo: change to default theme
    //         }
    //     }
    // }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme); // Apply the theme to the document
        localStorage.setItem("theme", currentTheme); // Save the theme to localStorage
    }, [currentTheme]);

    // const handleThemeChange = (event: any) => {
    //     const newTheme = event.target.getAttribute('data-set-theme');
    //     console.log(newTheme);
    //     setCurrentTheme(newTheme); // Update the state and trigger the effect above
    // };

    // Opening right sidebar for notification
    const openNotification = () => {
        dispatch(openRightDrawer({
            header: "Notifications",
            bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
            isOpen: false,
            extraObject: undefined
        }))
    }


    function logoutUser() {
        localStorage.clear();
        window.location.href = '/'
    }

    return (
        // navbar fixed  flex-none justify-between bg-base-300  z-10 shadow-md

        <>
            <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">


                {/* Menu toogle for mobile view or small screen */}
                <div className="flex-1">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                        <Bars3Icon className="h-5 inline-block w-5" /></label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>


                <div className="flex-none ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn m-1">
                            Theme
                            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52" data-choose-theme onClick={handleThemeChange}>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" data-set-theme="default"  value="dracula" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" data-set-theme="retro"  value="retro" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" data-set-theme="cyberpunk"  value="cyberpunk" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" data-set-theme="valentine"  value="valentine" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Corporate" data-set-theme="corporate"  value="corporate" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" data-set-theme="night"  value="night" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" data-set-theme="cupcake"  value="cupcake" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Garden" data-set-theme="garden"  value="garden" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" data-set-theme="forest"  value="forest" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dim" data-set-theme="dim"  value="dim" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Sunset" data-set-theme="sunset"  value="sunset" /></li>
                        </ul>
                    </div>


                    {/* Light and dark theme selection toogle **/}
                    {/* TODO: Show toggle only when theme is default */}
                    {/* <label className="swap ">
                        <input type="checkbox" />
                        <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "dark" ? "swap-on" : "swap-off")} />
                        <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "light" ? "swap-on" : "swap-off")} />
                    </label> */}


                    {/* Notification icon */}
                    <button className="btn btn-ghost ml-4  btn-circle" onClick={() => openNotification()}>
                        <div className="indicator">
                            <BellIcon className="h-6 w-6" />
                            {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null}
                        </div>
                    </button>


                    {/* Profile icon, opening menu on click */}
                    <div className="dropdown dropdown-end ml-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="justify-between">
                                <Link to={'/app/settings-profile'}>
                                    Profile Settings
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li>
                            <div className="divider mt-0 mb-0"></div>
                            <li><a onClick={logoutUser}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header